import React from 'react';
import { useLocation, Link, useNavigationType } from 'react-router-dom';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const translations: { [key: string]: string } = {
    'setores': 'Setores',
    'categorias': 'Categorias',
    'licencas': 'Licenças',
    'novo': 'Novo',
    'parametrizacao': 'Parametrização',
};

const singularTranslations: { [key: string]: string } = {
    'setores': 'Setor',
    'categorias': 'Categoria',
    'licencas': 'Licença',
};

const translatePath = (path: string): string => {
    return translations[path] || capitalize(path);
}

export const Breadcrumb = () => {
  // Check if we're in a Router context
  let location;
  let pathnames = [];
  
  try {
    // This will throw an error if not in a Router context
    location = useLocation();
    pathnames = location.pathname.split('/').filter(x => x);
  } catch (error) {
    // If not in a Router context, return a simple title
    return <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>;
  }

  if (pathnames.length === 0) {
    return <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>;
  }
  
  const lastPath = pathnames[pathnames.length - 1];
  const parentPath = pathnames[pathnames.length - 2];
  const isNumericLastPath = !isNaN(Number(lastPath));

  const pageTitle = isNumericLastPath && parentPath
    ? `Detalhe do ${singularTranslations[parentPath] || 'Item'}`
    : lastPath === 'novo' && parentPath
    ? `Novo ${singularTranslations[parentPath] || 'Item'}`
    : translatePath(lastPath);


  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">{pageTitle}</h2>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        <Link to="/" className="hover:text-cv-blue">Home</Link>
        {pathnames.map((value, index) => {
          const isLast = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          if (isLast && (isNumericLastPath || value === 'novo')) {
              return (
                <React.Fragment key={to}>
                  <span className="mx-2">/</span>
                  <span className="text-gray-700">{isNumericLastPath ? 'Detalhe' : 'Novo'}</span>
                </React.Fragment>
              );
          }
          
          if (isLast) {
              return (
                  <React.Fragment key={to}>
                     <span className="mx-2">/</span>
                     <span className="text-gray-700">{translatePath(value)}</span>
                  </React.Fragment>
              )
          }

          return (
            <React.Fragment key={to}>
              <span className="mx-2">/</span>
              <Link to={to} className="hover:text-cv-blue">
                {translatePath(value)}
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};