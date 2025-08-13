import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/Table';
import { Link } from 'react-router-dom';

export const LicenseRequestsListPage = () => {
    const { licenseRequests, getLicenseTypeById } = useData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = licenseRequests.filter(item =>
        item.requesterName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Pendente': return 'bg-yellow-100 text-yellow-800';
            case 'Em Análise': return 'bg-blue-100 text-blue-800';
            case 'Aprovado': return 'bg-green-100 text-green-800';
            case 'Concluído': return 'bg-gray-100 text-gray-800';
            case 'Recusado': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Pedidos de Licença</CardTitle>
                        <CardDescription>Acompanhe e gira todos os pedidos de licenciamento submetidos.</CardDescription>
                    </div>
                    <Button asLink to="/pedidos/novo">
                        <PlusIcon className="w-4 h-4 mr-2" />
                        Novo Pedido
                    </Button>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                    <Input
                        placeholder="Pesquisar por requerente..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm"
                    />
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nº Pedido</TableHead>
                            <TableHead>Requerente</TableHead>
                            <TableHead>Tipo de Licença</TableHead>
                            <TableHead>Data de Entrada</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">#{item.id}</TableCell>
                                <TableCell>{item.requesterName}</TableCell>
                                <TableCell>{getLicenseTypeById(item.licenseTypeId)?.name || 'N/A'}</TableCell>
                                <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(item.status)}`}>
                                        {item.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button asLink to={`/pedidos/${item.id}`} variant="primary" size="sm">
                                        Ver Processo
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {filteredItems.length === 0 && (
                    <p className="text-center text-gray-500 py-8">Nenhum pedido encontrado.</p>
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
