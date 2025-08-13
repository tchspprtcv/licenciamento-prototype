import React from 'react';
import { useData } from '../context/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Link } from 'react-router-dom';

export const RecentActivity = () => {
    const { sectors, categories, licenseTypes, entities } = useData();

    const allItems = [
        ...sectors.map(item => ({ ...item, type: 'Setor', path: `/setores/${item.id}` })),
        ...categories.map(item => ({ ...item, type: 'Categoria', path: `/categorias/${item.id}` })),
        ...licenseTypes.map(item => ({ ...item, type: 'Tipo de Licença', path: `/licencas/${item.id}` })),
        ...entities.map(item => ({ ...item, type: 'Entidade', path: `/entidades/${item.id}` })),
    ];

    const recentItems = allItems.sort((a, b) => b.createdAt - a.createdAt).slice(0, 5);

    const getIcon = (type: string) => {
        switch (type) {
            case 'Setor': return <LayersIcon className="h-5 w-5 text-cv-blue" />;
            case 'Categoria': return <GridIcon className="h-5 w-5 text-cv-red" />;
            case 'Tipo de Licença': return <FileTextIcon className="h-5 w-5 text-cv-yellow" />;
            case 'Entidade': return <UsersIcon className="h-5 w-5 text-green-500" />;
            default: return null;
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {recentItems.map(item => (
                        <li key={`${item.type}-${item.id}`} className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-full">
                                {getIcon(item.type)}
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">Novo {item.type} adicionado</p>
                            </div>
                            <Link to={item.path} className="text-sm text-cv-blue hover:underline">
                                Ver
                            </Link>
                        </li>
                    ))}
                </ul>
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
