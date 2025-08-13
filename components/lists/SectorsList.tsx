import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../ui/Table';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

export const SectorsList = () => {
    const { sectors, deleteSector, sectorTypes } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<number | 'all'>('all');

    const getSectorTypeName = (id: number) => sectorTypes.find(st => st.id === id)?.name || 'N/A';

    const filteredSectors = sectors.filter(sector => {
        const matchesSearch = sector.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || sector.sectorTypeId === selectedType;
        return matchesSearch && matchesType;
    });

    const handleDelete = (id: number) => {
        if (window.confirm('Tem a certeza que deseja eliminar este setor?')) {
            const success = deleteSector(id);
            if (success) {
                alert('Setor eliminado com sucesso.');
            }
        }
    }

    return (
        <div>
            <div className="flex items-center space-x-4 pt-4 mb-6">
                <Input
                    placeholder="Pesquisar por nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
                <Select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                    className="max-w-xs"
                >
                    <option value="all">Todos os Tipos</option>
                    {sectorTypes.map(type => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </Select>
            </div>
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
                            <TableCell>{getSectorTypeName(sector.sectorTypeId)}</TableCell>
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
        </div>
    );
};

// Icons need to be re-added here or imported from a shared file. For now, re-adding.
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
