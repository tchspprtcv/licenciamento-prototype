
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { SectorsListPage } from './pages/SectorsListPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { CategoriesListPage } from './pages/CategoriesListPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { LicensesListPage } from './pages/LicensesListPage';
import { LicenseDetailPage } from './pages/LicenseDetailPage';
import { LicenseDossierPage } from './pages/LicenseDossierPage';
import { SettingsPage } from './pages/SettingsPage';
import { EntitiesListPage } from './pages/EntitiesListPage';
import { EntityDetailPage } from './pages/EntityDetailPage';

function App() {
  return (
    <DataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/setores" element={<SectorsListPage />} />
          <Route path="/setores/novo" element={<SectorDetailPage />} />
          <Route path="/setores/:id" element={<SectorDetailPage />} />
          <Route path="/categorias" element={<CategoriesListPage />} />
          <Route path="/categorias/novo" element={<CategoryDetailPage />} />
          <Route path="/categorias/:id" element={<CategoryDetailPage />} />
          <Route path="/licencas" element={<LicensesListPage />} />
          <Route path="/licencas/novo" element={<LicenseDetailPage />} />
          <Route path="/licencas/:id" element={<LicenseDetailPage />} />
          <Route path="/licencas/dossier/:id" element={<LicenseDossierPage />} />
          <Route path="/entidades" element={<EntitiesListPage />} />
          <Route path="/entidades/novo" element={<EntityDetailPage />} />
          <Route path="/entidades/:id" element={<EntityDetailPage />} />
          <Route path="/parametrizacao" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </DataProvider>
  );
}

export default App;
