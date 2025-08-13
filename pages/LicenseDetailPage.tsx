import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { LicenseType } from '../types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

export const LicenseDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const {
        sectors,
        categories,
        getLicenseTypeById,
        addLicenseType,
        updateLicenseType
    } = useData();
    const isNew = id === undefined;

    const [licenseType, setLicenseType] = useState<Omit<LicenseType, 'id'>>({
        name: '',
        sectorId: sectors[0]?.id || 0,
        categoryId: 0,
    });
    const [availableCategories, setAvailableCategories] = useState(categories.filter(c => c.sectorId === licenseType.sectorId));

    useEffect(() => {
        if (!isNew && id) {
            const existing = getLicenseTypeById(parseInt(id));
            if (existing) {
                setLicenseType(existing);
            }
        }
    }, [id, isNew, getLicenseTypeById]);

    useEffect(() => {
        const newAvailableCategories = categories.filter(c => c.sectorId === licenseType.sectorId);
        setAvailableCategories(newAvailableCategories);
        // If the current category is not in the new list, reset it
        if (!newAvailableCategories.some(c => c.id === licenseType.categoryId)) {
            setLicenseType(lt => ({ ...lt, categoryId: newAvailableCategories[0]?.id || 0 }));
        }
    }, [licenseType.sectorId, categories]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLicenseType({ ...licenseType, [name]: name === 'name' ? value : parseInt(value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!licenseType.categoryId) {
            alert('Por favor, selecione uma categoria.');
            return;
        }
        if (isNew) {
            addLicenseType(licenseType);
            alert(`Tipo de Licença '${licenseType.name}' foi criado com sucesso!`);
        } else {
            updateLicenseType({ ...licenseType, id: parseInt(id!) });
            alert(`Tipo de Licença '${licenseType.name}' foi atualizado com sucesso!`);
        }
        navigate('/licencas');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{isNew ? 'Novo Tipo de Licença' : 'Detalhe do Tipo de Licença'}</CardTitle>
                    <CardDescription>
                        {isNew ? 'Preencha as informações para registar um novo tipo de licença.' : 'Visualize ou edite as informações do tipo de licença.'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome do Tipo de Licença <span className="text-cv-red">*</span></label>
                        <Input id="name" name="name" value={licenseType.name} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="sectorId" className="block text-sm font-medium text-gray-700 mb-1">Setor <span className="text-cv-red">*</span></label>
                            <Select id="sectorId" name="sectorId" value={licenseType.sectorId} onChange={handleChange} required>
                                {sectors.map(sector => (
                                    <option key={sector.id} value={sector.id}>{sector.name}</option>
                                ))}
                            </Select>
                        </div>
                        <div>
                           <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">Categoria <span className="text-cv-red">*</span></label>
                           <Select id="categoryId" name="categoryId" value={licenseType.categoryId} onChange={handleChange} required disabled={availableCategories.length === 0}>
                               {availableCategories.length > 0 ? (
                                   availableCategories.map(cat => (
                                       <option key={cat.id} value={cat.id}>{cat.name}</option>
                                   ))
                               ) : (
                                   <option>Selecione um setor com categorias</option>
                               )}
                           </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4">
                    <Button type="button" variant="secondary" onClick={() => navigate('/licencas')}>Cancelar</Button>
                    <Button type="submit">Gravar</Button>
                </CardFooter>
            </Card>
        </form>
    );
};
