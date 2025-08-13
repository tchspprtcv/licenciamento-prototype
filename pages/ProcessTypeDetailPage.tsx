import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ProcessType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const ProcessTypeDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { getProcessTypeById, addProcessType, updateProcessType } = useData();
    const isNew = id === undefined;

    const [item, setItem] = useState<Omit<ProcessType, 'id'>>({
        name: '',
        description: '',
        bpmnProcessKey: '',
    });

    useEffect(() => {
        if (!isNew && id) {
            const existing = getProcessTypeById(parseInt(id));
            if (existing) {
                setItem(existing);
            }
        }
    }, [id, isNew, getProcessTypeById]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            addProcessType(item);
            alert(`Tipo de processo '${item.name}' foi criado com sucesso!`);
        } else {
            updateProcessType({ ...item, id: parseInt(id!) });
            alert(`Tipo de processo '${item.name}' foi atualizado com sucesso!`);
        }
        navigate('/parametrizacao/tipos-processo');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Novo Tipo de Processo' : 'Detalhe do Tipo de Processo'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha a informação para registar um novo tipo de processo.' : 'Visualize ou edite a informação do tipo de processo.'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome <span className="text-cv-red">*</span></label>
                        <Input id="name" name="name" value={item.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                        <textarea id="description" name="description" value={item.description} onChange={handleChange} rows={3} className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cv-blue focus:ring-offset-2" />
                    </div>
                     <div>
                        <label htmlFor="bpmnProcessKey" className="block text-sm font-medium text-gray-700 mb-1">Chave do Processo BPMN <span className="text-cv-red">*</span></label>
                        <Input id="bpmnProcessKey" name="bpmnProcessKey" value={item.bpmnProcessKey} onChange={handleChange} required className="font-mono"/>
                        <p className="text-xs text-gray-500 mt-1">Este é o identificador técnico do processo no motor de BPMN.</p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/parametrizacao/tipos-processo')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
