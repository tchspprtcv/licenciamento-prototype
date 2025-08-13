import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { LicenseType, Legislation, Fee, Infraction, LicensingModel, ValidityUnit } from '../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';

const Trash2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
);

export const LicenseDossierPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {
        getLicenseTypeById,
        updateLicenseType,
        legislations, addLegislation, deleteLegislation,
        legislationTypes,
        licensingModels,
        validityUnits,
        processTypes, licenseProcesses, associateProcessToLicense, dissociateProcessFromLicense,
        fees, addFee, deleteFee,
        infractions, addInfraction, deleteInfraction,
        infractionTypes,
        entities, entityTypes, licenseEntities, associateEntityToLicense, dissociateEntityFromLicense
    } = useData();


    const [license, setLicense] = useState<LicenseType | null>(null);

    useEffect(() => {
        if (id) {
            const licenseData = getLicenseTypeById(parseInt(id));
            if (licenseData) {
                setLicense(licenseData);
            }
        }
    }, [id, getLicenseTypeById]);

    const [newLegislation, setNewLegislation] = useState({ name: '', legislationTypeId: 0, publicationDate: '' });
    const [newFee, setNewFee] = useState({ process: '', value: 0, status: 'Activo' as 'Activo' | 'Inactivo' });
    const [newInfraction, setNewInfraction] = useState({ name: '', infractionTypeId: 0, minFine: 0, maxFine: 0 });
    const [selectedEntityId, setSelectedEntityId] = useState('');
    const [selectedProcessTypeId, setSelectedProcessTypeId] = useState('');

    const getLegislationTypeName = (id: number) => legislationTypes.find(lt => lt.id === id)?.name || 'N/A';
    const getInfractionTypeName = (id: number) => infractionTypes.find(it => it.id === id)?.name || 'N/A';
    const getEntityTypeName = (id: number) => entityTypes.find(et => et.id === id)?.name || 'N/A';

    const licenseLegislations = id ? legislations.filter(l => l.licenseTypeId === parseInt(id)) : [];
    const licenseFees = id ? fees.filter(f => f.licenseTypeId === parseInt(id)) : [];
    const licenseInfractions = id ? infractions.filter(i => i.licenseTypeId === parseInt(id)) : [];

    const associatedEntities = id ? licenseEntities
        .filter(assoc => assoc.licenseTypeId === parseInt(id))
        .map(assoc => ({ ...assoc, entity: entities.find(e => e.id === assoc.entityId) }))
        .filter(assoc => assoc.entity) : [];

    const associatedEntityIds = new Set(associatedEntities.map(assoc => assoc.entity.id));
    const availableEntities = entities.filter(e => !associatedEntityIds.has(e.id));

    const associatedProcesses = id ? licenseProcesses
        .filter(assoc => assoc.licenseTypeId === parseInt(id))
        .map(assoc => ({ ...assoc, process: processTypes.find(p => p.id === assoc.processTypeId) }))
        .filter(assoc => assoc.process) : [];

    const associatedProcessIds = new Set(associatedProcesses.map(assoc => assoc.process.id));
    const availableProcesses = processTypes.filter(p => !associatedProcessIds.has(p.id));


    const handleGeneralDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (!license) return;
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setLicense({ ...license, [name]: checked });
        } else {
            setLicense({ ...license, [name]: value });
        }
    };

    const handleGeneralDataSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (license) {
            updateLicenseType(license);
            alert('Dados gerais atualizados com sucesso!');
        }
    };

    if (!license) {
        return <Card><CardHeader><CardTitle>A Carregar...</CardTitle></CardHeader><CardContent>A carregar dados da licença...</CardContent></Card>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Dossiê do Tipo de Licença</CardTitle>
                <CardDescription>{license.name}</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="geral">
                    <TabsList>
                        <TabsTrigger value="geral">Dados Gerais</TabsTrigger>
                        <TabsTrigger value="legislacao">Legislações</TabsTrigger>
                        <TabsTrigger value="taxas">Taxas</TabsTrigger>
                        <TabsTrigger value="infracoes">Infrações</TabsTrigger>
                        <TabsTrigger value="entidades">Entidades</TabsTrigger>
                        <TabsTrigger value="processos">Processos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="geral">
                        <form onSubmit={handleGeneralDataSubmit}>
                            <Card>
                                <CardHeader><CardTitle>Informações Gerais</CardTitle></CardHeader>
                                <CardContent className="space-y-4">
                                     <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                                        <textarea id="description" name="description" value={license.description || ''} onChange={handleGeneralDataChange} rows={3} className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="licensingModelId" className="block text-sm font-medium text-gray-700 mb-1">Modelo de Licenciamento</label>
                                            <Select id="licensingModelId" name="licensingModelId" value={license.licensingModelId || ''} onChange={handleGeneralDataChange}>
                                                <option value={0} disabled>Selecione um modelo</option>
                                                {licensingModels.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
                                            </Select>
                                        </div>
                                        <div className="flex items-end">
                                            <div className="flex items-center h-full">
                                                <Checkbox id="isLifetime" name="isLifetime" checked={license.isLifetime || false} onChange={handleGeneralDataChange} />
                                                <label htmlFor="isLifetime" className="ml-2 block text-sm font-medium text-gray-700">Licença Vitalícia?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <div>
                                            <label htmlFor="validityValue" className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                                            <Input type="number" id="validityValue" name="validityValue" value={license.validityValue || ''} onChange={handleGeneralDataChange} disabled={license.isLifetime} />
                                        </div>
                                        <div>
                                            <label htmlFor="validityUnitId" className="block text-sm font-medium text-gray-700 mb-1">Unidade de Validade</label>
                                            <Select id="validityUnitId" name="validityUnitId" value={license.validityUnitId || ''} onChange={handleGeneralDataChange} disabled={license.isLifetime}>
                                                <option value={0} disabled>Selecione uma unidade</option>
                                                {validityUnits.map(unit => <option key={unit.id} value={unit.id}>{unit.name}</option>)}
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-end">
                                    <Button type="submit">Gravar Alterações</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </TabsContent>

                    <TabsContent value="legislacao">
                        <Card>
                            <CardHeader><CardTitle>Legislações Associadas</CardTitle></CardHeader>
                            <CardContent>
                                {licenseLegislations.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Nome</TableHead>
                                                <TableHead>Tipo</TableHead>
                                                <TableHead>Data Publicação</TableHead>
                                                <TableHead className="text-right">Ações</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {licenseLegislations.map(leg => (
                                                <TableRow key={leg.id}>
                                                    <TableCell>{leg.name}</TableCell>
                                                    <TableCell>{getLegislationTypeName(leg.legislationTypeId)}</TableCell>
                                                    <TableCell>{leg.publicationDate}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" onClick={() => deleteLegislation(leg.id)}>
                                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <p className="p-4 text-center text-gray-500">Nenhuma legislação associada.</p>
                                )}
                            </CardContent>
                            <CardFooter className="border-t pt-4">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (!newLegislation.legislationTypeId) {
                                        alert('Por favor, selecione um tipo de legislação.');
                                        return;
                                    }
                                    addLegislation({ ...newLegislation, licenseTypeId: license.id });
                                    setNewLegislation({ name: '', legislationTypeId: 0, publicationDate: '' });
                                }} className="flex items-end space-x-4 w-full">
                                    <div className="flex-grow">
                                        <label className="text-sm font-medium">Nome</label>
                                        <Input value={newLegislation.name} onChange={(e) => setNewLegislation({...newLegislation, name: e.target.value})} placeholder="Ex: Decreto-Lei n.º 1/2025" required/>
                                    </div>
                                     <div className="flex-grow">
                                        <label className="text-sm font-medium">Tipo</label>
                                        <Select value={newLegislation.legislationTypeId} onChange={(e) => setNewLegislation({...newLegislation, legislationTypeId: parseInt(e.target.value)})} required>
                                            <option value={0} disabled>Selecione um tipo</option>
                                            {legislationTypes.map(lt => <option key={lt.id} value={lt.id}>{lt.name}</option>)}
                                        </Select>
                                    </div>
                                     <div className="flex-grow">
                                        <label className="text-sm font-medium">Data Publicação</label>
                                        <Input type="date" value={newLegislation.publicationDate} onChange={(e) => setNewLegislation({...newLegislation, publicationDate: e.target.value})} required/>
                                    </div>
                                    <Button type="submit">Adicionar</Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                     <TabsContent value="taxas">
                        <Card>
                             <CardHeader><CardTitle>Taxas Associadas</CardTitle></CardHeader>
                             <CardContent>
                                {licenseFees.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Processo</TableHead>
                                                <TableHead>Valor (CVE)</TableHead>
                                                <TableHead>Estado</TableHead>
                                                <TableHead className="text-right">Ações</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {licenseFees.map(fee => (
                                                <TableRow key={fee.id}>
                                                    <TableCell>{fee.process}</TableCell>
                                                    <TableCell>{fee.value.toLocaleString('pt-CV')} CVE</TableCell>
                                                    <TableCell>
                                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${fee.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                            {fee.status}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" onClick={() => deleteFee(fee.id)}>
                                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <p className="p-4 text-center text-gray-500">Nenhuma taxa associada.</p>
                                )}
                             </CardContent>
                             <CardFooter className="border-t pt-4">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    addFee({ ...newFee, licenseTypeId: license.id });
                                    setNewFee({ process: '', value: 0, status: 'Activo' });
                                }} className="flex items-end space-x-4 w-full">
                                    <div className="flex-grow">
                                        <label className="text-sm font-medium">Processo</label>
                                        <Input value={newFee.process} onChange={(e) => setNewFee({...newFee, process: e.target.value})} placeholder="Ex: Emissão de Licença" required/>
                                    </div>
                                     <div style={{flexBasis: '150px'}}>
                                        <label className="text-sm font-medium">Valor (CVE)</label>
                                        <Input type="number" value={newFee.value} onChange={(e) => setNewFee({...newFee, value: parseInt(e.target.value)})} required/>
                                    </div>
                                     <div style={{flexBasis: '150px'}}>
                                        <label className="text-sm font-medium">Estado</label>
                                        <Select value={newFee.status} onChange={(e) => setNewFee({...newFee, status: e.target.value as any})} required>
                                            <option value="Activo">Activo</option>
                                            <option value="Inactivo">Inactivo</option>
                                        </Select>
                                    </div>
                                    <Button type="submit">Adicionar</Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="infracoes">
                        <Card>
                            <CardHeader><CardTitle>Infrações e Coimas</CardTitle></CardHeader>
                            <CardContent>
                                {licenseInfractions.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Infração</TableHead>
                                                <TableHead>Tipo</TableHead>
                                                <TableHead>Coima Mínima (CVE)</TableHead>
                                                <TableHead>Coima Máxima (CVE)</TableHead>
                                                <TableHead className="text-right">Ações</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {licenseInfractions.map(inf => (
                                                <TableRow key={inf.id}>
                                                    <TableCell>{inf.name}</TableCell>
                                                    <TableCell>{getInfractionTypeName(inf.infractionTypeId)}</TableCell>
                                                    <TableCell>{inf.minFine.toLocaleString('pt-CV')} CVE</TableCell>
                                                    <TableCell>{inf.maxFine.toLocaleString('pt-CV')} CVE</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" onClick={() => deleteInfraction(inf.id)}>
                                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <p className="p-4 text-center text-gray-500">Nenhuma infração associada.</p>
                                )}
                            </CardContent>
                             <CardFooter className="border-t pt-4">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (!newInfraction.infractionTypeId) {
                                        alert('Por favor, selecione um tipo de infração.');
                                        return;
                                    }
                                    addInfraction({ ...newInfraction, licenseTypeId: license.id });
                                    setNewInfraction({ name: '', infractionTypeId: 0, minFine: 0, maxFine: 0 });
                                }} className="flex items-end space-x-4 w-full">
                                    <div className="flex-grow">
                                        <label className="text-sm font-medium">Nome da Infração</label>
                                        <Input value={newInfraction.name} onChange={(e) => setNewInfraction({...newInfraction, name: e.target.value})} placeholder="Ex: Exploração sem licença" required/>
                                    </div>
                                    <div style={{flexBasis: '200px'}}>
                                        <label className="text-sm font-medium">Tipo</label>
                                        <Select value={newInfraction.infractionTypeId} onChange={(e) => setNewInfraction({...newInfraction, infractionTypeId: parseInt(e.target.value)})} required>
                                            <option value={0} disabled>Selecione um tipo</option>
                                            {infractionTypes.map(it => <option key={it.id} value={it.id}>{it.name}</option>)}
                                        </Select>
                                    </div>
                                     <div style={{flexBasis: '200px'}}>
                                        <label className="text-sm font-medium">Coima Mínima (CVE)</label>
                                        <Input type="number" value={newInfraction.minFine} onChange={(e) => setNewInfraction({...newInfraction, minFine: parseInt(e.target.value)})} required/>
                                    </div>
                                     <div style={{flexBasis: '200px'}}>
                                        <label className="text-sm font-medium">Coima Máxima (CVE)</label>
                                        <Input type="number" value={newInfraction.maxFine} onChange={(e) => setNewInfraction({...newInfraction, maxFine: parseInt(e.target.value)})} required/>
                                    </div>
                                    <Button type="submit">Adicionar</Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="entidades">
                        <Card>
                            <CardHeader><CardTitle>Entidades Associadas</CardTitle></CardHeader>
                            <CardContent>
                                {associatedEntities.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Nome da Entidade</TableHead>
                                                <TableHead>Tipo</TableHead>
                                                <TableHead className="text-right">Ações</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {associatedEntities.map(assoc => (
                                                <TableRow key={assoc.id}>
                                                    <TableCell>{assoc.entity.name}</TableCell>
                                                    <TableCell>{getEntityTypeName(assoc.entity.entityTypeId)}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" onClick={() => dissociateEntityFromLicense(assoc.id)}>
                                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <p className="p-4 text-center text-gray-500">Nenhuma entidade associada.</p>
                                )}
                            </CardContent>
                            <CardFooter className="border-t pt-4">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (selectedEntityId) {
                                        associateEntityToLicense(license.id, parseInt(selectedEntityId));
                                        setSelectedEntityId('');
                                    }
                                }} className="flex items-end space-x-4 w-full">
                                    <div className="flex-grow">
                                        <label htmlFor="entity-select" className="text-sm font-medium">Associar Nova Entidade</label>
                                        <Select id="entity-select" value={selectedEntityId} onChange={(e) => setSelectedEntityId(e.target.value)} required>
                                            <option value="" disabled>Selecione uma entidade</option>
                                            {availableEntities.map(entity => (
                                                <option key={entity.id} value={entity.id}>{entity.name}</option>
                                            ))}
                                        </Select>
                                    </div>
                                    <Button type="submit" disabled={!selectedEntityId}>Associar</Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="processos">
                        <Card>
                            <CardHeader><CardTitle>Processos Associados</CardTitle></CardHeader>
                            <CardContent>
                                {associatedProcesses.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Nome do Processo</TableHead>
                                                <TableHead>Chave BPMN</TableHead>
                                                <TableHead className="text-right">Ações</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {associatedProcesses.map(assoc => (
                                                <TableRow key={assoc.id}>
                                                    <TableCell>{assoc.process.name}</TableCell>
                                                    <TableCell className="font-mono">{assoc.process.bpmnProcessKey}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" onClick={() => dissociateProcessFromLicense(assoc.id)}>
                                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <p className="p-4 text-center text-gray-500">Nenhum processo associado.</p>
                                )}
                            </CardContent>
                            <CardFooter className="border-t pt-4">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (selectedProcessTypeId) {
                                        associateProcessToLicense(license.id, parseInt(selectedProcessTypeId));
                                        setSelectedProcessTypeId('');
                                    }
                                }} className="flex items-end space-x-4 w-full">
                                    <div className="flex-grow">
                                        <label htmlFor="process-select" className="text-sm font-medium">Associar Novo Processo</label>
                                        <Select id="process-select" value={selectedProcessTypeId} onChange={(e) => setSelectedProcessTypeId(e.target.value)} required>
                                            <option value="" disabled>Selecione um processo</option>
                                            {availableProcesses.map(proc => (
                                                <option key={proc.id} value={proc.id}>{proc.name}</option>
                                            ))}
                                        </Select>
                                    </div>
                                    <Button type="submit" disabled={!selectedProcessTypeId}>Associar</Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};