import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const NewLicenseRequestPage = () => {
    const navigate = useNavigate();
    const { licenseTypes, addLicenseRequest } = useData();
    const [requesterName, setRequesterName] = useState('');
    const [licenseTypeId, setLicenseTypeId] = useState<number | undefined>(undefined);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!licenseTypeId) {
            alert('Por favor, selecione um tipo de licença.');
            return;
        }
        addLicenseRequest({ requesterName, licenseTypeId });
        alert('Pedido de licença submetido com sucesso!');
        navigate('/pedidos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>Novo Pedido de Licença</CardTitle>
                    <CardDescription>
                        Preencha os dados para submeter um novo pedido de licenciamento.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label htmlFor="requesterName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Requerente <span className="text-cv-red">*</span></label>
                        <Input
                            id="requesterName"
                            name="requesterName"
                            value={requesterName}
                            onChange={(e) => setRequesterName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="licenseTypeId" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Licença Pretendido <span className="text-cv-red">*</span></label>
                        <Select
                            id="licenseTypeId"
                            name="licenseTypeId"
                            value={licenseTypeId || ''}
                            onChange={(e) => setLicenseTypeId(parseInt(e.target.value))}
                            required
                        >
                            <option value="" disabled>Selecione o tipo de licença</option>
                            {licenseTypes.map(lt => (
                                <option key={lt.id} value={lt.id}>{lt.name}</option>
                            ))}
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/pedidos')}>Cancelar</Button>
                    <Button type="submit">Submeter Pedido</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
