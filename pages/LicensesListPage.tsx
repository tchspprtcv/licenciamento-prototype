
import React, { useState } from 'react';
import { LICENSE_TYPES, SECTORS, CATEGORIES } from '../constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Button } from '../components/ui/Button';

export const LicensesListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSector, setSelectedSector] = useState<number | 'all'>('all');

    const getSectorName = (sectorId: number) => SECTORS.find(s => s.id === sectorId)?.name || 'N/A';
    const getCategoryName = (categoryId: number) => CATEGORIES.find(c => c.id === categoryId)?.name || 'N/A';

    const filteredLicenses = LICENSE_TYPES.filter(license => {
        const matchesSearch = license.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === 'all' || license.sectorId === selectedSector;
        return matchesSearch && matchesSector;
    });

    return (
        <Card>
            <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Tipos de Licença</CardTitle>
                        <CardDescription>Pesquise e visualize os tipos de licença parametrizados.</CardDescription>
                    </div>
                    {/* A criação de licenças pode ser complexa, então um botão "Novo" aqui pode não ser ideal sem um wizard. Direcionando para o detalhe para visualização. */}
                </div>
                <div className="flex items-center space-x-4 pt-4">
                    <Input 
                        placeholder="Pesquisar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                    <Select 
                        value={selectedSector}
                        onChange={(e) => setSelectedSector(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="max-w-xs"
                    >
                        <option value="all">Todos os Setores</option>
                        {SECTORS.map(sector => (
                            <option key={sector.id} value={sector.id}>{sector.name}</option>
                        ))}
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome da Licença</TableHead>
                            <TableHead>Setor</TableHead>
                            <TableHead>Categoria</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredLicenses.map((license) => (
                            <TableRow key={license.id}>
                                <TableCell className="font-medium">{license.name}</TableCell>
                                <TableCell>{getSectorName(license.sectorId)}</TableCell>
                                <TableCell>{getCategoryName(license.categoryId)}</TableCell>
                                <TableCell className="text-right">
                                    <Button asLink to={`/licencas/${license.id}`} variant="primary" size="sm">
                                        Ver Dossiê
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {filteredLicenses.length === 0 && (
                    <p className="text-center text-gray-500 py-8">Nenhum tipo de licença encontrado.</p>
                )}
            </CardContent>
        </Card>
    );
};
