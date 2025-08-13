
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardPage } from './pages/DashboardPage';
import { SectorsListPage } from './pages/SectorsListPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { CategoriesListPage } from './pages/CategoriesListPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { LicensesListPage } from './pages/LicensesListPage';
import { LicenseDetailPage } from './pages/LicenseDetailPage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return (
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
        <Route path="/licencas/:id" element={<LicenseDetailPage />} />
        <Route path="/parametrizacao" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
