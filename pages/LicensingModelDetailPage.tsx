import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { LicensingModel } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const LicensingModelDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getLicensingModelById, addLicensingModel, updateLicensingModel } = useData();
    const isNew = id === undefined;

    const [item, setItem] = useState<Omit<LicensingModel, 'id'>>({
        name: '',
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = getLicensingModelById(parseInt(id));
            if (existing) {
                setItem(existing);
            }
        }
    }, [id, isNew, getLicensingModelById]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            addLicensingModel(item);
            alert(`Modelo '${item.name}' foi criado com sucesso!`);
        } else {
            updateLicensingModel({ ...item, id: parseInt(id!) });
            alert(`Modelo '${item.name}' foi atualizado com sucesso!`);
        }
        navigate('/parametrizacao/modelos-licenciamento');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Novo Modelo de Licenciamento' : 'Detalhe do Modelo de Licenciamento'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha a informação para registar um novo modelo.' : 'Visualize ou edite a informação do modelo.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Modelo <span className="text-cv-red">*</span></label>
                        <Input id="name" name="name" value={item.name} onChange={handleChange} required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/parametrizacao/modelos-licenciamento')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
