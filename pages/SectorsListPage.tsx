
import React, { useState } from 'react';
import { SECTORS } from '../constants';
import { Sector, SectorType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Link } from 'react-router-dom';

export const SectorsListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<SectorType | 'all'>('all');
    
    const filteredSectors = SECTORS.filter(sector => {
        const matchesSearch = sector.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || sector.type === selectedType;
        return matchesSearch && matchesType;
    });

    const handleDelete = (id: number) => {
        alert(`(Simulação) Setor com ID ${id} seria eliminado, se não tivesse categorias ou licenças associadas.`);
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Setores de Atividade</CardTitle>
                        <CardDescription>Pesquise, visualize e gira os setores económicos.</CardDescription>
                    </div>
                    <Button asLink to="/setores/novo">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Novo Setor
                    </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                    <Input 
                        placeholder="Pesquisar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                    <Select 
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value as SectorType | 'all')}
                        className="max-w-xs"
                    >
                        <option value="all">Todos os Tipos</option>
                        {Object.values(SectorType).map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome do Setor</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Categorias</TableHead>
                            <TableHead>Licenças</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredSectors.map((sector) => (
                            <TableRow key={sector.id}>
                                <TableCell className="font-medium">{sector.name}</TableCell>
                                <TableCell>{sector.type}</TableCell>
                                <TableCell>{sector.categoryCount}</TableCell>
                                <TableCell>{sector.licenseCount}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end space-x-2">
                                        <Button asLink to={`/setores/${sector.id}`} variant="ghost" size="sm">
                                            <PencilIcon className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => handleDelete(sector.id)}>
                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {filteredSectors.length === 0 && (
                    <p className="text-center text-gray-500 py-8">Nenhum setor encontrado.</p>
                )}
            </CardContent>
        </Card>
    );
};

// Icons
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
);

const Trash2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
);
