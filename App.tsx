
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
import { LegislationTypesListPage } from './pages/LegislationTypesListPage';
import { LegislationTypeDetailPage } from './pages/LegislationTypeDetailPage';
import { InfractionTypesListPage } from './pages/InfractionTypesListPage';
import { InfractionTypeDetailPage } from './pages/InfractionTypeDetailPage';
import { EntityTypesListPage } from './pages/EntityTypesListPage';
import { EntityTypeDetailPage } from './pages/EntityTypeDetailPage';
import { SectorTypesListPage } from './pages/SectorTypesListPage';
import { SectorTypeDetailPage } from './pages/SectorTypeDetailPage';
import { LicensingModelsListPage } from './pages/LicensingModelsListPage';
import { LicensingModelDetailPage } from './pages/LicensingModelDetailPage';
import { ValidityUnitsListPage } from './pages/ValidityUnitsListPage';
import { ValidityUnitDetailPage } from './pages/ValidityUnitDetailPage';
import { ProcessTypesListPage } from './pages/ProcessTypesListPage';
import { ProcessTypeDetailPage } from './pages/ProcessTypeDetailPage';
import { LicenseRequestsListPage } from './pages/LicenseRequestsListPage';
import { NewLicenseRequestPage } from './pages/NewLicenseRequestPage';
import { LicenseRequestDetailPage } from './pages/LicenseRequestDetailPage';

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
          <Route path="/parametrizacao/tipos-legislacao" element={<LegislationTypesListPage />} />
          <Route path="/parametrizacao/tipos-legislacao/novo" element={<LegislationTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-legislacao/:id" element={<LegislationTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-infracao" element={<InfractionTypesListPage />} />
          <Route path="/parametrizacao/tipos-infracao/novo" element={<InfractionTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-infracao/:id" element={<InfractionTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-entidade" element={<EntityTypesListPage />} />
          <Route path="/parametrizacao/tipos-entidade/novo" element={<EntityTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-entidade/:id" element={<EntityTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-setor" element={<SectorTypesListPage />} />
          <Route path="/parametrizacao/tipos-setor/novo" element={<SectorTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-setor/:id" element={<SectorTypeDetailPage />} />
          <Route path="/parametrizacao/modelos-licenciamento" element={<LicensingModelsListPage />} />
          <Route path="/parametrizacao/modelos-licenciamento/novo" element={<LicensingModelDetailPage />} />
          <Route path="/parametrizacao/modelos-licenciamento/:id" element={<LicensingModelDetailPage />} />
          <Route path="/parametrizacao/unidades-validade" element={<ValidityUnitsListPage />} />
          <Route path="/parametrizacao/unidades-validade/novo" element={<ValidityUnitDetailPage />} />
          <Route path="/parametrizacao/unidades-validade/:id" element={<ValidityUnitDetailPage />} />
          <Route path="/parametrizacao/tipos-processo" element={<ProcessTypesListPage />} />
          <Route path="/parametrizacao/tipos-processo/novo" element={<ProcessTypeDetailPage />} />
          <Route path="/parametrizacao/tipos-processo/:id" element={<ProcessTypeDetailPage />} />
          <Route path="/pedidos" element={<LicenseRequestsListPage />} />
          <Route path="/pedidos/novo" element={<NewLicenseRequestPage />} />
          <Route path="/pedidos/:id" element={<LicenseRequestDetailPage />} />
        </Routes>
      </Layout>
    </DataProvider>
  );
}

export default App;
