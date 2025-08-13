
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
                        title="Tipos de Setor"
                        description="Gerir as classificações de setores (ex: Primário, Secundário, Terciário)."
                        linkTo="/parametrizacao/tipos-setor"
                        icon={<LayersIcon className="w-8 h-8" />}
                    />
                     <SettingsCard
                        title="Tipos de Entidade"
                        description="Gerir os papéis que as entidades podem ter num processo (ex: Decisão, Parecer)."
                        linkTo="/parametrizacao/tipos-entidade"
                        icon={<MilestoneIcon className="w-8 h-8" />}
                    />
                     <SettingsCard
                        title="Tipos de Legislação"
                        description="Gerir os tipos de documentos legais que podem ser associados (ex: Lei, Decreto)."
                        linkTo="/parametrizacao/tipos-legislacao"
                        icon={<BookMarkedIcon className="w-8 h-8" />}
                    />
                     <SettingsCard
                        title="Tipos de Infração"
                        description="Gerir as categorias ou classificações para as infrações."
                        linkTo="/parametrizacao/tipos-infracao"
                        icon={<AlertTriangleIcon className="w-8 h-8" />}
                    />
                    <SettingsCard
                        title="Modelos de Licenciamento"
                        description="Gerir os modelos de licenciamento (ex: Definitivo, Provisório)."
                        linkTo="/parametrizacao/modelos-licenciamento"
                        icon={<FileCheckIcon className="w-8 h-8" />}
                    />
                     <SettingsCard
                        title="Unidades de Validade"
                        description="Gerir as unidades de tempo para a validade das licenças (dias, meses, anos)."
                        linkTo="/parametrizacao/unidades-validade"
                        icon={<ClockIcon className="w-8 h-8" />}
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
                     <SettingsCard
                        title="Tipos de Processo"
                        description="Gerir os tipos de processo de licenciamento e a sua ligação a fluxos BPMN."
                        linkTo="/parametrizacao/tipos-processo"
                        icon={<WorkflowIcon className="w-8 h-8" />}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

// Icons
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
);

const MilestoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V2" />
        <path d="M18 6l-6 6-6-6" />
    </svg>
);

const BookMarkedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 13V7" />
        <path d="m9 10 3-3 3 3" />
    </svg>
);

const AlertTriangleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
    </svg>
);

const FileCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
    </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

const WorkflowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
);
