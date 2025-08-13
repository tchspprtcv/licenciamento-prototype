
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SECTORS } from '../constants';
import { Sector, SectorType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const SectorDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isNew = id === undefined;

    const [sector, setSector] = useState<Partial<Sector>>({
        name: '',
        type: SectorType.Primario,
        description: '',
        cae: ''
    });

    useEffect(() => {
        if (!isNew && id) {
            const existingSector = SECTORS.find(s => s.id === parseInt(id));
            if (existingSector) {
                setSector(existingSector);
            }
        }
    }, [id, isNew]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setSector({ ...sector, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to an API
        alert(`(Simulação) Setor '${sector.name}' foi ${isNew ? 'criado' : 'atualizado'} com sucesso!`);
        navigate('/setores');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Novo Setor' : 'Detalhe do Setor'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha as informações para registar um novo setor.' : 'Visualize ou edite as informações do setor.'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Setor <span className="text-cv-red">*</span></label>
                            <Input id="name" name="name" value={sector.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Setor <span className="text-cv-red">*</span></label>
                            <Select id="type" name="type" value={sector.type} onChange={handleChange} required>
                                {Object.values(SectorType).map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                        <textarea 
                            id="description" 
                            name="description" 
                            value={sector.description} 
                            onChange={handleChange}
                            rows={4}
                            className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="cae" className="block text-sm font-medium text-gray-700 mb-1">CAE (Classificação de Atividades Económicas)</label>
                        <Input id="cae" name="cae" value={sector.cae} onChange={handleChange} placeholder="Ex: 55, 56"/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/setores')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
