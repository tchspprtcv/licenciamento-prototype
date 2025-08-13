
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';

export const SettingsPage = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Parametrização do Sistema</CardTitle>
                <CardDescription>
                    Gestão de parâmetros globais e configurações do sistema.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Destinos de Receitas</h3>
                        <p className="text-gray-600 mt-1">
                            Configurar as entidades que recebem as receitas das taxas e coimas. (Funcionalidade em desenvolvimento)
                        </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Gestão de Utilizadores</h3>
                        <p className="text-gray-600 mt-1">
                            Adicionar, editar e remover utilizadores do sistema. (Funcionalidade em desenvolvimento)
                        </p>
                    </div>
                     <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">Modelos de Documentos</h3>
                        <p className="text-gray-600 mt-1">
                           Fazer upload e gerir modelos para alvarás e outros documentos. (Funcionalidade em desenvolvimento)
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
