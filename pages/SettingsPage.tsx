
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const SettingsCard = ({ title, description, linkTo, icon }: { title: string, description: string, linkTo: string, icon: React.ReactElement }) => (
    <div className="p-6 border rounded-lg flex items-start space-x-6">
        <div className="flex-shrink-0 text-cv-blue">
            {icon}
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2">
                {description}
            </p>
            <Button asLink to={linkTo} className="mt-4">
                Gerir
            </Button>
        </div>
    </div>
);

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <SettingsCard
                        title="Gestão de Entidades"
                        description="Adicionar, editar e remover as entidades que participam nos processos de licenciamento (ex: IGAE, Bombeiros)."
                        linkTo="/entidades"
                        icon={<UsersIcon className="w-8 h-8" />}
                    />
                    <SettingsCard
                        title="Gestão de Utilizadores"
                        description="Adicionar, editar e remover utilizadores do sistema e gerir as suas permissões."
                        linkTo="#"
                        icon={<UserCogIcon className="w-8 h-8" />}
                    />
                    <SettingsCard
                        title="Modelos de Documentos"
                        description="Fazer upload e gerir modelos para alvarás, certidões e outros documentos oficiais."
                        linkTo="#"
                        icon={<FileUpIcon className="w-8 h-8" />}
                    />
                     <SettingsCard
                        title="Destinos de Receitas"
                        description="Configurar as entidades que recebem as receitas das taxas e coimas."
                        linkTo="#"
                        icon={<BanknoteIcon className="w-8 h-8" />}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

// Icons
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const UserCogIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="15" r="3" />
        <circle cx="9" cy="7" r="4" />
        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
        <path d="m21.7 16.4-.9-.3" />
        <path d="m15.2 13.9-.9-.3" />
        <path d="m16.6 18.7.3-.9" />
        <path d="m19.1 12.2.3-.9" />
        <path d="m19.6 18.7-.4-1" />
        <path d="m16.8 12.3-.4-1" />
        <path d="m14.3 16.6 1-.4" />
        <path d="m20.7 13.8 1-.4" />
    </svg>
);

const FileUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 12v-6" />
        <path d="m15 9-3-3-3 3" />
    </svg>
);

const BanknoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="12" x="2" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01" />
        <path d="M18 12h.01" />
    </svg>
);
