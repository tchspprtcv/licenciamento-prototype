import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Entity } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const EntityDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getEntityById, addEntity, updateEntity, entityTypes } = useData();
    const isNew = id === undefined;

    const [entity, setEntity] = useState<Omit<Entity, 'id' | 'createdAt'>>({
        name: '',
        entityTypeId: 0,
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
        const { name, value } = e.target;
        setEntity({ ...entity, [name]: name === 'name' || name === 'email' || name === 'phone' ? value : parseInt(value) });
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
                            <label htmlFor="entityTypeId" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Entidade <span className="text-cv-red">*</span></label>
                            <Select id="entityTypeId" name="entityTypeId" value={entity.entityTypeId} onChange={handleChange} required>
                                <option value={0} disabled>Selecione um tipo</option>
                                {entityTypes.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
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
