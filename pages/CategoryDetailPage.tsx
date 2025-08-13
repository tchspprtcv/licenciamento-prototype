import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CATEGORIES, SECTORS } from '../constants';
import { Category } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const CategoryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isNew = id === undefined;

    const [category, setCategory] = useState<Partial<Category>>({
        name: '',
        sectorId: SECTORS[0]?.id,
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = CATEGORIES.find(c => c.id === parseInt(id));
            if (existing) {
                setCategory(existing);
            }
        }
    }, [id, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const intValue = parseInt(value, 10);

        if (name === 'sectorId') {
            // Reset parentId when sector changes to ensure consistency
            setCategory({ ...category, sectorId: intValue, parentId: undefined });
        } else if (name === 'parentId') {
            // Set parentId to undefined if "Nenhuma" is selected
            setCategory({ ...category, parentId: value ? intValue : undefined });
        } else {
            setCategory({ ...category, [name]: value });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`(Simulação) Categoria '${category.name}' foi ${isNew ? 'criada' : 'atualizada'} com sucesso!`);
        navigate('/categorias');
    };
    
    const potentialParents = CATEGORIES.filter(c => c.sectorId === category.sectorId && c.id !== category.id);

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Nova Categoria' : 'Detalhe da Categoria'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha as informações para registar uma nova categoria.' : 'Visualize ou edite as informações da categoria.'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="sectorId" className="block text-sm font-medium text-gray-700 mb-1">Setor <span className="text-cv-red">*</span></label>
                            <Select id="sectorId" name="sectorId" value={category.sectorId} onChange={handleChange} required>
                                {SECTORS.map(sector => (
                                    <option key={sector.id} value={sector.id}>{sector.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                           <label htmlFor="parentId" className="block text-sm font-medium text-gray-700 mb-1">Categoria Pai</label>
                           <Select id="parentId" name="parentId" value={category.parentId || ''} onChange={handleChange} disabled={!category.sectorId}>
                               <option value="">Nenhuma</option>
                               {potentialParents.map(parent => (
                                   <option key={parent.id} value={parent.id}>{parent.name}</option>
                               ))}
                           </Select>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome da Categoria <span className="text-cv-red">*</span></label>
                            <Input id="name" name="name" value={category.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="codCAE" className="block text-sm font-medium text-gray-700 mb-1">Cód. CAE</label>
                            <Input id="codCAE" name="codCAE" value={category.codCAE || ''} onChange={handleChange} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/categorias')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};