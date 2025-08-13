import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { SectorType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const SectorTypeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getSectorTypeById, addSectorType, updateSectorType } = useData();
    const isNew = id === undefined;

    const [item, setItem] = useState<Omit<SectorType, 'id'>>({
        name: '',
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = getSectorTypeById(parseInt(id));
            if (existing) {
                setItem(existing);
            }
        }
    }, [id, isNew, getSectorTypeById]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            addSectorType(item);
            alert(`Tipo '${item.name}' foi criado com sucesso!`);
        } else {
            updateSectorType({ ...item, id: parseInt(id!) });
            alert(`Tipo '${item.name}' foi atualizado com sucesso!`);
        }
        navigate('/parametrizacao/tipos-setor');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Novo Tipo de Setor' : 'Detalhe do Tipo de Setor'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha a informação para registar um novo tipo.' : 'Visualize ou edite a informação do tipo.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Tipo <span className="text-cv-red">*</span></label>
                        <Input id="name" name="name" value={item.name} onChange={handleChange} required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/parametrizacao/tipos-setor')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
