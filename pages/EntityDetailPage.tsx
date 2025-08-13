import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Entity, EntityType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const EntityDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getEntityById, addEntity, updateEntity } = useData();
    const isNew = id === undefined;

    const [entity, setEntity] = useState<Omit<Entity, 'id' | 'createdAt'>>({
        name: '',
        type: EntityType.Decisao,
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = getEntityById(parseInt(id));
            if (existing) {
                setEntity(existing);
            }
        }
    }, [id, isNew, getEntityById]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEntity({ ...entity, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            addEntity(entity);
            alert(`Entidade '${entity.name}' foi criada com sucesso!`);
        } else {
            updateEntity({ ...entity, id: parseInt(id!) } as Entity);
            alert(`Entidade '${entity.name}' foi atualizada com sucesso!`);
        }
        navigate('/entidades');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Nova Entidade' : 'Detalhe da Entidade'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha as informações para registar uma nova entidade.' : 'Visualize ou edite as informações da entidade.'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome da Entidade <span className="text-cv-red">*</span></label>
                            <Input id="name" name="name" value={entity.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Entidade <span className="text-cv-red">*</span></label>
                            <Select id="type" name="type" value={entity.type} onChange={handleChange} required>
                                {Object.values(EntityType).map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input type="email" id="email" name="email" value={entity.email || ''} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                            <Input id="phone" name="phone" value={entity.phone || ''} onChange={handleChange} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/entidades')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
