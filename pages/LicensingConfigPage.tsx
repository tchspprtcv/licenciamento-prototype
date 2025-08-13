import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { SectorsList } from '../components/lists/SectorsList';
import { CategoriesList } from '../components/lists/CategoriesList';
import { LicenseTypesList } from '../components/lists/LicenseTypesList';

type ActiveTab = 'setores' | 'categorias' | 'licencas';

export const LicensingConfigPage = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('setores');

    const newButtonConfig = {
        setores: { text: 'Novo Setor', to: '/setores/novo' },
        categorias: { text: 'Nova Categoria', to: '/categorias/novo' },
        licencas: { text: 'Novo Tipo de Licença', to: '/licencas/novo' },
    };

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Configuração de Licenciamento</CardTitle>
                        <CardDescription>Gira os elementos base para o processo de licenciamento.</CardDescription>
                    </div>
                    <Button asLink to={newButtonConfig[activeTab].to}>
                        <PlusIcon className="w-4 h-4 mr-2" />
                        {newButtonConfig[activeTab].text}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="setores" onValueChange={(value) => setActiveTab(value as ActiveTab)}>
                    <TabsList>
                        <TabsTrigger value="setores">Setores</TabsTrigger>
                        <TabsTrigger value="categorias">Categorias</TabsTrigger>
                        <TabsTrigger value="licencas">Tipos de Licença</TabsTrigger>
                    </TabsList>
                    <TabsContent value="setores">
                        <SectorsList />
                    </TabsContent>
                    <TabsContent value="categorias">
                        <CategoriesList />
                    </TabsContent>
                    <TabsContent value="licencas">
                        <LicenseTypesList />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

// Icon
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);
