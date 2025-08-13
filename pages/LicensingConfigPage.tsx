import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { SectorsList } from '../components/lists/SectorsList';
import { CategoriesList } from '../components/lists/CategoriesList';
import { LicenseTypesList } from '../components/lists/LicenseTypesList';

export const LicensingConfigPage = () => {
    return (
        <Tabs defaultValue="setores" className="space-y-4">
            <div className="flex items-center justify-between space-x-4">
                <TabsList>
                    <TabsTrigger value="setores">Setores</TabsTrigger>
                    <TabsTrigger value="categorias">Categorias</TabsTrigger>
                    <TabsTrigger value="licencas">Tipos de Licença</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="setores">
                <Card>
                    <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                            <CardTitle>Setores de Atividade</CardTitle>
                            <CardDescription>Pesquise, visualize e gira os setores económicos.</CardDescription>
                        </div>
                        <Button asLink to="/setores/novo">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Novo Setor
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <SectorsList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="categorias">
                 <Card>
                    <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                            <CardTitle>Categorias de Atividade</CardTitle>
                            <CardDescription>Pesquise, visualize e gira as categorias de atividades económicas.</CardDescription>
                        </div>
                        <Button asLink to="/categorias/novo">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Nova Categoria
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <CategoriesList />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="licencas">
                 <Card>
                    <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                            <CardTitle>Tipos de Licença</CardTitle>
                            <CardDescription>Pesquise, visualize e gira os tipos de licença.</CardDescription>
                        </div>
                        <Button asLink to="/licencas/novo">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Novo Tipo de Licença
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <LicenseTypesList />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

// Icon
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);
