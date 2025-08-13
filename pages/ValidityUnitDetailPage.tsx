import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ValidityUnit } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ValidityUnitDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getValidityUnitById, addValidityUnit, updateValidityUnit } = useData();
    const isNew = id === undefined;

    const [item, setItem] = useState<Omit<ValidityUnit, 'id'>>({
        name: '',
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = getValidityUnitById(parseInt(id));
            if (existing) {
                setItem(existing);
            }
        }
    }, [id, isNew, getValidityUnitById]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            addValidityUnit(item);
            alert(`Unidade '${item.name}' foi criada com sucesso!`);
        } else {
            updateValidityUnit({ ...item, id: parseInt(id!) });
            alert(`Unidade '${item.name}' foi atualizada com sucesso!`);
        }
        navigate('/parametrizacao/unidades-validade');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Nova Unidade de Validade' : 'Detalhe da Unidade de Validade'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha a informação para registar uma nova unidade.' : 'Visualize ou edite a informação da unidade.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome da Unidade <span className="text-cv-red">*</span></label>
                        <Input id="name" name="name" value={item.name} onChange={handleChange} required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/parametrizacao/unidades-validade')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
