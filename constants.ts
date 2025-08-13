import { Sector, Category, LicenseType, SectorType, Legislation, Fee, Infraction, LicensingModel, ValidityUnit, Entity, EntityType, LicenseEntity } from './types';

export const LICENSE_ENTITIES: LicenseEntity[] = [
    { id: 1, licenseTypeId: 1, entityId: 1 }, // Licença de Hotel -> IGAE
    { id: 2, licenseTypeId: 1, entityId: 4 }, // Licença de Hotel -> Bombeiros
    { id: 3, licenseTypeId: 2, entityId: 1 }, // Alvará de Restauração -> IGAE
    { id: 4, licenseTypeId: 2, entityId: 5 }, // Alvará de Restauração -> Delegacia de Saúde
    { id: 5, licenseTypeId: 4, entityId: 3 }, // Alvará de Comércio -> Câmara Municipal da Praia
];

export const ENTITIES: Entity[] = [
  { id: 1, name: 'IGAE', type: EntityType.Decisao, email: 'geral@igae.cv', phone: '123456789', createdAt: Date.now() - 50000 },
  { id: 2, name: 'Polícia Nacional', type: EntityType.Parecer, email: 'pn@gov.cv', phone: '123456789', createdAt: Date.now() - 40000 },
  { id: 3, name: 'Câmara Municipal da Praia', type: EntityType.Decisao, email: 'cmp@cm-praia.cv', phone: '123456789', createdAt: Date.now() - 30000 },
  { id: 4, name: 'Bombeiros', type: EntityType.Vistoria, email: 'bombeiros@gov.cv', phone: '123456789', createdAt: Date.now() - 20000 },
  { id: 5, name: 'Delegacia de Saúde', type: EntityType.Parecer, email: 'ds@gov.cv', phone: '123456789', createdAt: Date.now() - 10000 },
];

export const SECTORS: Sector[] = [
  { id: 1, name: 'Agricultura e Pecuária', type: SectorType.Primario, description: 'Atividades de cultivo e criação de animais.', categoryCount: 3, licenseCount: 5, createdAt: Date.now() - 100000 },
  { id: 2, name: 'Pescas', type: SectorType.Primario, description: 'Atividades de pesca industrial e artesanal.', cae: '031', categoryCount: 2, licenseCount: 2, createdAt: Date.now() - 90000 },
  { id: 3, name: 'Indústrias Transformadoras', type: SectorType.Secundario, description: 'Transformação de matérias-primas.', categoryCount: 4, licenseCount: 8, createdAt: Date.now() - 80000 },
  { id: 4, name: 'Construção Civil e Obras Públicas', type: SectorType.Secundario, description: 'Construção de edifícios e infraestruturas.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 70000 },
  { id: 5, name: 'Turismo', type: SectorType.Terciario, description: 'Alojamento, restauração e agências de viagens.', cae: '55, 56, 79', categoryCount: 9, licenseCount: 8, createdAt: Date.now() - 60000 },
  { id: 6, name: 'Comércio', type: SectorType.Terciario, description: 'Comércio a grosso e a retalho.', categoryCount: 2, licenseCount: 1, createdAt: Date.now() - 50000 },
  { id: 7, name: 'Indústrias Extrativas', type: SectorType.Primario, description: 'Extração de inertes, etc.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 40000 },
  { id: 8, name: 'Produção e Distribuição de Energia e Água', type: SectorType.Secundario, description: 'Produção e distribuição de eletricidade e água potável.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 30000 },
  { id: 9, name: 'Transportes', type: SectorType.Terciario, description: 'Transporte marítimo e aéreo de passageiros e carga.', categoryCount: 1, licenseCount: 0, createdAt: Date.now() - 20000 },
  { id: 10, name: 'Serviços Financeiros', type: SectorType.Terciario, description: 'Bancos, seguros e outras atividades financeiras.', categoryCount: 0, licenseCount: 0, createdAt: Date.now() - 10000 },
  { id: 11, name: 'Tecnologias de Informação e Comunicação (TIC)', type: SectorType.Terciario, description: 'Serviços de software, telecomunicações, etc.', categoryCount: 0, licenseCount: 0, createdAt: Date.now() },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Alojamento Turístico', sectorId: 5, licenseCount: 3, createdAt: Date.now() - 180000 },
  { id: 2, name: 'Empreendimentos Hoteleiros', sectorId: 5, parentId: 1, codCAE: '55.1', licenseCount: 1, createdAt: Date.now() - 170000 },
  { id: 3, name: 'Restauração e Bebidas', sectorId: 5, licenseCount: 2, createdAt: Date.now() - 160000 },
  { id: 4, name: 'Pesca Industrial', sectorId: 2, codCAE: '03.11', licenseCount: 1, createdAt: Date.now() - 150000 },
  { id: 5, name: 'Comércio a Retalho', sectorId: 6, licenseCount: 1, createdAt: Date.now() - 140000 },
  { id: 6, name: 'Indústria Alimentar', sectorId: 3, licenseCount: 2, createdAt: Date.now() - 130000 },
  { id: 7, name: 'Aldeamentos Turísticos', sectorId: 5, parentId: 1, codCAE: '55.2', licenseCount: 1, createdAt: Date.now() - 120000 },
  { id: 8, name: 'Alojamento Local', sectorId: 5, parentId: 1, codCAE: '55.3', licenseCount: 1, createdAt: Date.now() - 110000 },
  { id: 9, name: 'Restaurantes', sectorId: 5, parentId: 3, licenseCount: 1, createdAt: Date.now() - 100000 },
  { id: 10, name: 'Bares e similares', sectorId: 5, parentId: 3, licenseCount: 1, createdAt: Date.now() - 90000 },
  { id: 11, name: 'Agências de Viagens e Turismo', sectorId: 5, codCAE: '79.1', licenseCount: 1, createdAt: Date.now() - 80000 },
  { id: 12, name: 'Animação Turística', sectorId: 5, codCAE: '79.9', licenseCount: 1, createdAt: Date.now() - 70000 },
  { id: 13, name: 'Construção de Edifícios', sectorId: 4, codCAE: '41', licenseCount: 1, createdAt: Date.now() - 60000 },
  { id: 14, name: 'Pesca Artesanal', sectorId: 2, codCAE: '03.12', licenseCount: 1, createdAt: Date.now() - 50000 },
  { id: 15, name: 'Extração de Inertes', sectorId: 7, licenseCount: 1, createdAt: Date.now() - 40000 },
  { id: 16, name: 'Produção de Energia Elétrica', sectorId: 8, licenseCount: 1, createdAt: Date.now() - 30000 },
  { id: 17, name: 'Transporte Marítimo', sectorId: 9, licenseCount: 1, createdAt: Date.now() - 20000 },
  { id: 18, name: 'Comércio por Grosso', sectorId: 6, licenseCount: 1, createdAt: Date.now() - 10000 },
];

export const LICENSE_TYPES: LicenseType[] = [
  { id: 1, name: 'Licença de Utilização Turística (Hotel)', sectorId: 5, categoryId: 2, createdAt: Date.now() - 15000, description: 'Licença para hotéis e similares.', licensingModel: LicensingModel.ProvisorioDefinitivo, validityUnit: ValidityUnit.Anos, validityValue: 5, isLifetime: false },
  { id: 2, name: 'Alvará de Licença de Funcionamento (Restauração)', sectorId: 5, categoryId: 3, createdAt: Date.now() - 14000, description: 'Alvará para restaurantes e bares.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 3, name: 'Licença de Pesca Industrial', sectorId: 2, categoryId: 4, createdAt: Date.now() - 13000, description: 'Licença para pesca em alto mar.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 2, isLifetime: false },
  { id: 4, name: 'Alvará de Licença de Funcionamento (Comércio)', sectorId: 6, categoryId: 5, createdAt: Date.now() - 12000, description: 'Alvará para lojas e estabelecimentos comerciais.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 5, name: 'Licença de Atividade Industrial', sectorId: 3, categoryId: 6, createdAt: Date.now() - 11000, description: 'Licença para unidades industriais.', licensingModel: LicensingModel.ProvisorioDefinitivo, validityUnit: ValidityUnit.Anos, validityValue: 3, isLifetime: false },
  { id: 6, name: 'Licença de Utilização Turística (Aldeamento)', sectorId: 5, categoryId: 7, createdAt: Date.now() - 10000, description: 'Licença para aldeamentos turísticos.', licensingModel: LicensingModel.ProvisorioDefinitivo, validityUnit: ValidityUnit.Anos, validityValue: 5, isLifetime: false },
  { id: 7, name: 'Registo de Alojamento Local', sectorId: 5, categoryId: 8, createdAt: Date.now() - 9000, description: 'Registo para exploração de alojamento local.', licensingModel: LicensingModel.Definitivo, isLifetime: true },
  { id: 8, name: 'Alvará de Funcionamento (Restaurante)', sectorId: 5, categoryId: 9, createdAt: Date.now() - 8000, description: 'Alvará para restaurantes.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 9, name: 'Alvará de Funcionamento (Bar)', sectorId: 5, categoryId: 10, createdAt: Date.now() - 7000, description: 'Alvará para bares e similares.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 10, name: 'Licença de Agência de Viagens e Turismo', sectorId: 5, categoryId: 11, createdAt: Date.now() - 6000, description: 'Licença para agências de viagens.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 2, isLifetime: false },
  { id: 11, name: 'Licença de Animação Turística', sectorId: 5, categoryId: 12, createdAt: Date.now() - 5000, description: 'Licença para empresas de animação turística.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 2, isLifetime: false },
  { id: 12, name: 'Licença de Construção', sectorId: 4, categoryId: 13, createdAt: Date.now() - 4000, description: 'Licença de construção de obras.', licensingModel: LicensingModel.ProvisorioDefinitivo, validityUnit: ValidityUnit.Meses, validityValue: 12, isLifetime: false },
  { id: 13, name: 'Licença de Pesca Artesanal', sectorId: 2, categoryId: 14, createdAt: Date.now() - 3000, description: 'Licença para pesca costeira.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 14, name: 'Licença de Extração de Inertes', sectorId: 7, categoryId: 15, createdAt: Date.now() - 2000, description: 'Licença para extração de areia, burgau, etc.', licensingModel: LicensingModel.Definitivo, validityUnit: ValidityUnit.Anos, validityValue: 1, isLifetime: false },
  { id: 15, name: 'Licença de Produção de Energia', sectorId: 8, categoryId: 16, createdAt: Date.now() - 1000, description: 'Licença para produção de energia.', licensingModel: LicensingModel.ProvisorioDefinitivo, validityUnit: ValidityUnit.Anos, validityValue: 10, isLifetime: false },
];

export const LEGISLATIONS: Legislation[] = [
    // Turismo
    { id: 1, licenseTypeId: 1, name: 'Lei n.º 100/VIII/2015', type: 'Lei de Bases', publicationDate: '2015-08-10' },
    // Comércio e Serviços
    { id: 2, licenseTypeId: 2, name: 'Decreto-Lei n.º 24/2015', type: 'Decreto-Lei', publicationDate: '2015-05-20', documentUrl: '#' },
    // Indústria
    { id: 3, licenseTypeId: 5, name: 'Decreto-Lei nº 53/2015', type: 'Decreto-Lei', publicationDate: '2015-10-01' },
    // Comércio
    { id: 4, licenseTypeId: 4, name: 'Decreto-Lei n.º 24/2015', type: 'Decreto-Lei', publicationDate: '2015-05-20', documentUrl: '#' },
    // Ambiente para Construção
    { id: 5, licenseTypeId: 12, name: 'Lei n.º 47/VIII/2014', type: 'Lei de Bases do Ambiente', publicationDate: '2014-06-15' },
    // Ambiente para Indústria
    { id: 6, licenseTypeId: 5, name: 'Lei n.º 47/VIII/2014', type: 'Lei de Bases do Ambiente', publicationDate: '2014-06-15' },
     // Agências de Viagens
    { id: 7, licenseTypeId: 10, name: 'Decreto-Lei n.º 24/2015', type: 'Decreto-Lei', publicationDate: '2015-05-20' },
    // Turismo - Alojamento Local
    { id: 8, licenseTypeId: 7, name: 'Lei n.º 100/VIII/2015', type: 'Lei de Bases', publicationDate: '2015-08-10' },
];

export const FEES: Fee[] = [
    { id: 1, licenseTypeId: 1, name: 'Emissão de Licença de Utilização Turística', process: 'Emissão de Licença de Utilização Turística', value: 25000, status: 'Activo' },
    { id: 2, licenseTypeId: 1, name: 'Vistoria Técnica', process: 'Vistoria Técnica', value: 10000, status: 'Activo' },
    { id: 3, licenseTypeId: 1, name: 'Renovação Anual', process: 'Renovação Anual', value: 15000, status: 'Inactivo' },
    { id: 4, licenseTypeId: 4, name: 'Emissão de Alvará (Comércio)', process: 'Emissão de Alvará de Funcionamento', value: 5000, status: 'Activo' },
    { id: 5, licenseTypeId: 4, name: 'Vistoria da IGAE (Comércio)', process: 'Vistoria da IGAE', value: 7500, status: 'Activo' },
    { id: 6, licenseTypeId: 5, name: 'Taxa de Recursos Hídricos (Indústria)', process: 'Análise de Impacto Ambiental', value: 50000, status: 'Activo' },
    { id: 7, licenseTypeId: 12, name: 'Emissão Licença de Construção', process: 'Emissão de Licença', value: 15000, status: 'Activo' },
    { id: 8, licenseTypeId: 3, name: 'Taxa Anual de Pesca Industrial', process: 'Renovação Anual', value: 100000, status: 'Activo' },
    { id: 9, licenseTypeId: 10, name: 'Emissão Licença Agência de Viagens', process: 'Emissão de Licença', value: 20000, status: 'Activo' },
];

export const INFRACTIONS: Infraction[] = [
    { id: 1, licenseTypeId: 1, name: 'Exploração de empreendimento turístico sem a devida licença', minFine: 50000, maxFine: 200000 },
    { id: 2, licenseTypeId: 1, name: 'Publicidade enganosa sobre a classificação do estabelecimento', minFine: 20000, maxFine: 80000 },
    { id: 3, licenseTypeId: 4, name: 'Exercício de atividade comercial sem o alvará de licença', minFine: 30000, maxFine: 150000 },
    { id: 4, licenseTypeId: 4, name: 'Violação das normas de higiene e segurança alimentar', minFine: 15000, maxFine: 75000 },
    { id: 5, licenseTypeId: 5, name: 'Funcionamento de estabelecimento industrial da Classe 1 sem licença', minFine: 100000, maxFine: 500000 },
    { id: 6, licenseTypeId: 12, name: 'Realização de obra sem licença de construção', minFine: 80000, maxFine: 400000 },
    { id: 7, licenseTypeId: 5, name: 'Descarga de efluentes não tratados', minFine: 200000, maxFine: 1000000 },
    { id: 8, licenseTypeId: 3, name: 'Pesca em período de defeso', minFine: 50000, maxFine: 250000 },
];
