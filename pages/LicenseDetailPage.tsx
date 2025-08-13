import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LICENSE_TYPES, LEGISLATIONS, FEES, INFRACTIONS } from '../constants';
import { LicenseType, Legislation, Fee, Infraction } from '../types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Button } from '../components/ui/Button';

export const LicenseDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [license, setLicense] = useState<LicenseType | null>(null);
    const [legislations, setLegislations] = useState<Legislation[]>([]);
    const [fees, setFees] = useState<Fee[]>([]);
    const [infractions, setInfractions] = useState<Infraction[]>([]);

    useEffect(() => {
        if (id) {
            const licenseId = parseInt(id);
            const foundLicense = LICENSE_TYPES.find(l => l.id === licenseId);
            if (foundLicense) {
                setLicense(foundLicense);
                setLegislations(LEGISLATIONS.filter(l => l.licenseTypeId === licenseId));
                setFees(FEES.filter(f => f.licenseTypeId === licenseId));
                setInfractions(INFRACTIONS.filter(i => i.licenseTypeId === licenseId));
            } else {
                navigate('/licencas');
            }
        }
    }, [id, navigate]);

    if (!license) {
        return <div>A carregar...</div>;
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
                        <Card>
                            <CardHeader><CardTitle>Informações Gerais</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                <p><strong>Validade:</strong> 1 Ano</p>
                                <p><strong>Renovação:</strong> Automática (requer pagamento)</p>
                                <p><strong>Licença Vitalícia:</strong> Não</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    
                    <TabsContent value="legislacao">
                        {legislations.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>Tipo</TableHead>
                                        <TableHead>Data Publicação</TableHead>
                                        <TableHead>Documento</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {legislations.map(leg => (
                                        <TableRow key={leg.id}>
                                            <TableCell>{leg.name}</TableCell>
                                            <TableCell>{leg.type}</TableCell>
                                            <TableCell>{leg.publicationDate}</TableCell>
                                            <TableCell>
                                                {leg.documentUrl && <Button size="sm" variant="secondary" asLink to={leg.documentUrl}>Ver</Button>}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p className="p-4 text-center text-gray-500">Nenhuma legislação associada a este tipo de licença.</p>
                        )}
                    </TabsContent>

                     <TabsContent value="taxas">
                        {fees.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Processo</TableHead>
                                        <TableHead>Valor (CVE)</TableHead>
                                        <TableHead>Estado</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {fees.map(fee => (
                                        <TableRow key={fee.id}>
                                            <TableCell>{fee.process}</TableCell>
                                            <TableCell>{fee.value.toLocaleString('pt-CV')} CVE</TableCell>
                                            <TableCell>
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${fee.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {fee.status}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p className="p-4 text-center text-gray-500">Nenhuma taxa associada a este tipo de licença.</p>
                        )}
                    </TabsContent>

                    <TabsContent value="infracoes">
                        {infractions.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Infração</TableHead>
                                        <TableHead>Coima Mínima (CVE)</TableHead>
                                        <TableHead>Coima Máxima (CVE)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {infractions.map(inf => (
                                        <TableRow key={inf.id}>
                                            <TableCell>{inf.name}</TableCell>
                                            <TableCell>{inf.minFine.toLocaleString('pt-CV')} CVE</TableCell>
                                            <TableCell>{inf.maxFine.toLocaleString('pt-CV')} CVE</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <p className="p-4 text-center text-gray-500">Nenhuma infração associada a este tipo de licença.</p>
                        )}
                    </TabsContent>
                    
                    <TabsContent value="entidades">
                        <p className="p-4 text-gray-500">Funcionalidade de gestão de Entidades ainda não implementada.</p>
                    </TabsContent>
                    
                    <TabsContent value="processos">
                         <p className="p-4 text-gray-500">Funcionalidade de gestão de Processos ainda não implementada.</p>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};