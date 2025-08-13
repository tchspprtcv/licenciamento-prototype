import React from 'react';
import { useData } from '../context/DataContext';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { SectorChart } from '../components/charts/SectorChart';
import { RecentActivity } from '../components/RecentActivity';

const StatCard = ({ title, value, icon, color }: { title: string; value: number; icon: React.ReactElement<React.SVGProps<SVGSVGElement>>; color: string }) => (
    <Card className="shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
            {React.cloneElement(icon, { className: `h-5 w-5 ${color}`})}
        </CardHeader>
        <CardContent>
            <div className="text-3xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">Total registado no sistema</p>
        </CardContent>
    </Card>
);

export const DashboardPage = () => {
  const { sectors, categories, licenseTypes, entities } = useData();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Setores Económicos" value={sectors.length} icon={<LayersIcon />} color="text-cv-blue" />
        <StatCard title="Categorias de Atividade" value={categories.length} icon={<GridIcon />} color="text-cv-red" />
        <StatCard title="Tipos de Licença" value={licenseTypes.length} icon={<FileTextIcon />} color="text-cv-yellow" />
        <StatCard title="Entidades" value={entities.length} icon={<UsersIcon />} color="text-green-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectorChart />
        <RecentActivity />
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Bem-vindo ao Gestor de Licenciamento</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600">
            Este sistema permite a gestão completa dos setores de atividade económica, categorias e tipos de licença em Cabo Verde. Utilize o menu à esquerda para navegar pelas diferentes secções.
            </p>
            <p className="text-gray-600 mt-4">
            Cada país organiza as suas atividades económicas em setores, que por sua vez se subdividem em atividades e categorias específicas. Em Cabo Verde, para obter o direito de exploração de uma atividade económica, é fundamental obter a licença ou alvará correspondente. O processo de licenciamento é regido por um conjunto de leis nacionais e complementado por posturas e regulamentos municipais.
            </p>
        </CardContent>
      </Card>
    </div>
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

const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
);
  
const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 12h18" />
          <path d="M12 3v18" />
      </svg>
);
  
const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
);