
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';

export const CategoriesListPage = () => {
    const { categories, sectors, deleteCategory } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSector, setSelectedSector] = useState<number | 'all'>('all');

    const getSectorName = (sectorId: number) => sectors.find(s => s.id === sectorId)?.name || 'N/A';
    const getParentName = (parentId?: number) => parentId ? categories.find(c => c.id === parentId)?.name : '-';

    const filteredCategories = categories.filter(category => {
        const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === 'all' || category.sectorId === selectedSector;
        return matchesSearch && matchesSector;
    });

    const handleDelete = (id: number) => {
        if (window.confirm('Tem a certeza que deseja eliminar esta categoria?')) {
            const success = deleteCategory(id);
            if (success) {
                alert('Categoria eliminada com sucesso.');
            }
        }
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Categorias de Atividade</CardTitle>
                        <CardDescription>Pesquise, visualize e gira as categorias de atividades económicas.</CardDescription>
                    </div>
                    <Button asLink to="/categorias/novo">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Nova Categoria
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
                        value={selectedSector}
                        onChange={(e) => setSelectedSector(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="max-w-xs"
                    >
                        <option value="all">Todos os Setores</option>
                        {sectors.map(sector => (
                            <option key={sector.id} value={sector.id}>{sector.name}</option>
                        ))}
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome da Categoria</TableHead>
                            <TableHead>Setor</TableHead>
                            <TableHead>Categoria Pai</TableHead>
                            <TableHead>Cód. CAE</TableHead>
                            <TableHead>Licenças</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredCategories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell className="font-medium">{category.name}</TableCell>
                                <TableCell>{getSectorName(category.sectorId)}</TableCell>
                                <TableCell>{getParentName(category.parentId)}</TableCell>
                                <TableCell>{category.codCAE || '-'}</TableCell>
                                <TableCell>{category.licenseCount}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end space-x-2">
                                        <Button asLink to={`/categorias/${category.id}`} variant="ghost" size="sm">
                                            <PencilIcon className="w-4 h-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm" onClick={() => handleDelete(category.id)}>
                                            <Trash2Icon className="w-4 h-4 text-cv-red" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {filteredCategories.length === 0 && (
                    <p className="text-center text-gray-500 py-8">Nenhuma categoria encontrada.</p>
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
