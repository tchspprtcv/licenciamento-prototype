import { Sector, Category, LicenseType, SectorType, Legislation, Fee, Infraction, LicensingModel, ValidityUnit, Entity, EntityType, LicenseEntity, LegislationType, InfractionType, ProcessType, LicenseProcess } from './types';

export const LICENSE_PROCESSES: LicenseProcess[] = [
    { id: 1, licenseTypeId: 12, processTypeId: 1 }, // Licença de Construção -> Licenciamento de Obras
    { id: 2, licenseTypeId: 2, processTypeId: 2 }, // Alvará de Restauração -> Licenciamento de Restauração
    { id: 3, licenseTypeId: 8, processTypeId: 2 }, // Alvará de Restaurante -> Licenciamento de Restauração
    { id: 4, licenseTypeId: 5, processTypeId: 3 }, // Licença Industrial -> Licenciamento Industrial
];

export const PROCESS_TYPES: ProcessType[] = [
    { id: 1, name: 'Licenciamento de Obras', description: 'Processo para licenciamento de construção de obras particulares.', bpmnProcessKey: 'proc_lic_obras_v1' },
    { id: 2, name: 'Licenciamento de Restauração', description: 'Processo para licenciamento de restaurantes e similares.', bpmnProcessKey: 'proc_lic_rest_v2' },
    { id: 3, name: 'Licenciamento Industrial', description: 'Processo para licenciamento de atividade industrial.', bpmnProcessKey: 'proc_lic_ind_v1.2' },
];

export const LICENSING_MODELS: LicensingModel[] = [
    { id: 1, name: 'Provisório + Definitivo' },
    { id: 2, name: 'Definitivo' },
];

export const VALIDITY_UNITS: ValidityUnit[] = [
    { id: 1, name: 'dias' },
    { id: 2, name: 'meses' },
    { id: 3, name: 'anos' },
];

export const SECTOR_TYPES: SectorType[] = [
    { id: 1, name: 'Primário' },
    { id: 2, name: 'Secundário' },
    { id: 3, name: 'Terciário' },
];

export const ENTITY_TYPES: EntityType[] = [
    { id: 1, name: 'Decisão' },
    { id: 2, name: 'Parecer' },
    { id: 3, name: 'Vistoria' },
];

export const INFRACTION_TYPES: InfractionType[] = [
    { id: 1, name: 'Leve' },
    { id: 2, name: 'Grave' },
    { id: 3, name: 'Muito Grave' },
];

export const LEGISLATION_TYPES: LegislationType[] = [
    { id: 1, name: 'Decreto-Lei' },
    { id: 2, name: 'Lei de Bases' },
    { id: 3, name: 'Regulamento' },
    { id: 4, name: 'Postura Municipal' },
];

export const LICENSE_ENTITIES: LicenseEntity[] = [
    { id: 1, licenseTypeId: 1, entityId: 1 }, // Licença de Hotel -> IGAE
    { id: 2, licenseTypeId: 1, entityId: 4 }, // Licença de Hotel -> Bombeiros
    { id: 3, licenseTypeId: 2, entityId: 1 }, // Alvará de Restauração -> IGAE
    { id: 4, licenseTypeId: 2, entityId: 5 }, // Alvará de Restauração -> Delegacia de Saúde
    { id: 5, licenseTypeId: 4, entityId: 3 }, // Alvará de Comércio -> Câmara Municipal da Praia
];

export const ENTITIES: Entity[] = [
  { id: 1, name: 'IGAE', entityTypeId: 1, email: 'geral@igae.cv', phone: '123456789', createdAt: Date.now() - 50000 },
  { id: 2, name: 'Polícia Nacional', entityTypeId: 2, email: 'pn@gov.cv', phone: '123456789', createdAt: Date.now() - 40000 },
  { id: 3, name: 'Câmara Municipal da Praia', entityTypeId: 1, email: 'cmp@cm-praia.cv', phone: '123456789', createdAt: Date.now() - 30000 },
  { id: 4, name: 'Bombeiros', entityTypeId: 3, email: 'bombeiros@gov.cv', phone: '123456789', createdAt: Date.now() - 20000 },
  { id: 5, name: 'Delegacia de Saúde', entityTypeId: 2, email: 'ds@gov.cv', phone: '123456789', createdAt: Date.now() - 10000 },
];

export const SECTORS: Sector[] = [
  { id: 1, name: 'Agricultura e Pecuária', sectorTypeId: 1, description: 'Atividades de cultivo e criação de animais.', categoryCount: 3, licenseCount: 5, createdAt: Date.now() - 100000 },
  { id: 2, name: 'Pescas', sectorTypeId: 1, description: 'Atividades de pesca industrial e artesanal.', cae: '031', categoryCount: 2, licenseCount: 2, createdAt: Date.now() - 90000 },
  { id: 3, name: 'Indústrias Transformadoras', sectorTypeId: 2, description: 'Transformação de matérias-primas.', categoryCount: 4, licenseCount: 8, createdAt: Date.now() - 80000 },
  { id: 4, name: 'Construção Civil e Obras Públicas', sectorTypeId: 2, description: 'Construção de edifícios e infraestruturas.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 70000 },
  { id: 5, name: 'Turismo', sectorTypeId: 3, description: 'Alojamento, restauração e agências de viagens.', cae: '55, 56, 79', categoryCount: 9, licenseCount: 8, createdAt: Date.now() - 60000 },
  { id: 6, name: 'Comércio', sectorTypeId: 3, description: 'Comércio a grosso e a retalho.', categoryCount: 2, licenseCount: 1, createdAt: Date.now() - 50000 },
  { id: 7, name: 'Indústrias Extrativas', sectorTypeId: 1, description: 'Extração de inertes, etc.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 40000 },
  { id: 8, name: 'Produção e Distribuição de Energia e Água', sectorTypeId: 2, description: 'Produção e distribuição de eletricidade e água potável.', categoryCount: 1, licenseCount: 1, createdAt: Date.now() - 30000 },
  { id: 9, name: 'Transportes', sectorTypeId: 3, description: 'Transporte marítimo e aéreo de passageiros e carga.', categoryCount: 1, licenseCount: 0, createdAt: Date.now() - 20000 },
  { id: 10, name: 'Serviços Financeiros', sectorTypeId: 3, description: 'Bancos, seguros e outras atividades financeiras.', categoryCount: 0, licenseCount: 0, createdAt: Date.now() - 10000 },
  { id: 11, name: 'Tecnologias de Informação e Comunicação (TIC)', sectorTypeId: 3, description: 'Serviços de software, telecomunicações, etc.', categoryCount: 0, licenseCount: 0, createdAt: Date.now() },
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
  { id: 1, name: 'Licença de Utilização Turística (Hotel)', sectorId: 5, categoryId: 2, createdAt: Date.now() - 15000, description: 'Licença para hotéis e similares.', licensingModelId: 1, validityUnitId: 3, validityValue: 5, isLifetime: false },
  { id: 2, name: 'Alvará de Licença de Funcionamento (Restauração)', sectorId: 5, categoryId: 3, createdAt: Date.now() - 14000, description: 'Alvará para restaurantes e bares.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 3, name: 'Licença de Pesca Industrial', sectorId: 2, categoryId: 4, createdAt: Date.now() - 13000, description: 'Licença para pesca em alto mar.', licensingModelId: 2, validityUnitId: 3, validityValue: 2, isLifetime: false },
  { id: 4, name: 'Alvará de Licença de Funcionamento (Comércio)', sectorId: 6, categoryId: 5, createdAt: Date.now() - 12000, description: 'Alvará para lojas e estabelecimentos comerciais.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 5, name: 'Licença de Atividade Industrial', sectorId: 3, categoryId: 6, createdAt: Date.now() - 11000, description: 'Licença para unidades industriais.', licensingModelId: 1, validityUnitId: 3, validityValue: 3, isLifetime: false },
  { id: 6, name: 'Licença de Utilização Turística (Aldeamento)', sectorId: 5, categoryId: 7, createdAt: Date.now() - 10000, description: 'Licença para aldeamentos turísticos.', licensingModelId: 1, validityUnitId: 3, validityValue: 5, isLifetime: false },
  { id: 7, name: 'Registo de Alojamento Local', sectorId: 5, categoryId: 8, createdAt: Date.now() - 9000, description: 'Registo para exploração de alojamento local.', licensingModelId: 2, isLifetime: true },
  { id: 8, name: 'Alvará de Funcionamento (Restaurante)', sectorId: 5, categoryId: 9, createdAt: Date.now() - 8000, description: 'Alvará para restaurantes.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 9, name: 'Alvará de Funcionamento (Bar)', sectorId: 5, categoryId: 10, createdAt: Date.now() - 7000, description: 'Alvará para bares e similares.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 10, name: 'Licença de Agência de Viagens e Turismo', sectorId: 5, categoryId: 11, createdAt: Date.now() - 6000, description: 'Licença para agências de viagens.', licensingModelId: 2, validityUnitId: 3, validityValue: 2, isLifetime: false },
  { id: 11, name: 'Licença de Animação Turística', sectorId: 5, categoryId: 12, createdAt: Date.now() - 5000, description: 'Licença para empresas de animação turística.', licensingModelId: 2, validityUnitId: 3, validityValue: 2, isLifetime: false },
  { id: 12, name: 'Licença de Construção', sectorId: 4, categoryId: 13, createdAt: Date.now() - 4000, description: 'Licença de construção de obras.', licensingModelId: 1, validityUnitId: 2, validityValue: 12, isLifetime: false },
  { id: 13, name: 'Licença de Pesca Artesanal', sectorId: 2, categoryId: 14, createdAt: Date.now() - 3000, description: 'Licença para pesca costeira.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 14, name: 'Licença de Extração de Inertes', sectorId: 7, categoryId: 15, createdAt: Date.now() - 2000, description: 'Licença para extração de areia, burgau, etc.', licensingModelId: 2, validityUnitId: 3, validityValue: 1, isLifetime: false },
  { id: 15, name: 'Licença de Produção de Energia', sectorId: 8, categoryId: 16, createdAt: Date.now() - 1000, description: 'Licença para produção de energia.', licensingModelId: 1, validityUnitId: 3, validityValue: 10, isLifetime: false },
];

export const LEGISLATIONS: Legislation[] = [
    // Turismo
    { id: 1, licenseTypeId: 1, name: 'Lei n.º 100/VIII/2015', legislationTypeId: 2, publicationDate: '2015-08-10' },
    // Comércio e Serviços
    { id: 2, licenseTypeId: 2, name: 'Decreto-Lei n.º 24/2015', legislationTypeId: 1, publicationDate: '2015-05-20', documentUrl: '#' },
    // Indústria
    { id: 3, licenseTypeId: 5, name: 'Decreto-Lei nº 53/2015', legislationTypeId: 1, publicationDate: '2015-10-01' },
    // Comércio
    { id: 4, licenseTypeId: 4, name: 'Decreto-Lei n.º 24/2015', legislationTypeId: 1, publicationDate: '2015-05-20', documentUrl: '#' },
    // Ambiente para Construção
    { id: 5, licenseTypeId: 12, name: 'Lei n.º 47/VIII/2014', legislationTypeId: 2, publicationDate: '2014-06-15' },
    // Ambiente para Indústria
    { id: 6, licenseTypeId: 5, name: 'Lei n.º 47/VIII/2014', legislationTypeId: 2, publicationDate: '2014-06-15' },
     // Agências de Viagens
    { id: 7, licenseTypeId: 10, name: 'Decreto-Lei n.º 24/2015', legislationTypeId: 1, publicationDate: '2015-05-20' },
    // Turismo - Alojamento Local
    { id: 8, licenseTypeId: 7, name: 'Lei n.º 100/VIII/2015', legislationTypeId: 2, publicationDate: '2015-08-10' },
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
    { id: 1, licenseTypeId: 1, name: 'Exploração de empreendimento turístico sem a devida licença', infractionTypeId: 3, minFine: 50000, maxFine: 200000 },
    { id: 2, licenseTypeId: 1, name: 'Publicidade enganosa sobre a classificação do estabelecimento', infractionTypeId: 2, minFine: 20000, maxFine: 80000 },
    { id: 3, licenseTypeId: 4, name: 'Exercício de atividade comercial sem o alvará de licença', infractionTypeId: 3, minFine: 30000, maxFine: 150000 },
    { id: 4, licenseTypeId: 4, name: 'Violação das normas de higiene e segurança alimentar', infractionTypeId: 2, minFine: 15000, maxFine: 75000 },
    { id: 5, licenseTypeId: 5, name: 'Funcionamento de estabelecimento industrial da Classe 1 sem licença', infractionTypeId: 3, minFine: 100000, maxFine: 500000 },
    { id: 6, licenseTypeId: 12, name: 'Realização de obra sem licença de construção', infractionTypeId: 3, minFine: 80000, maxFine: 400000 },
    { id: 7, licenseTypeId: 5, name: 'Descarga de efluentes não tratados', infractionTypeId: 3, minFine: 200000, maxFine: 1000000 },
    { id: 8, licenseTypeId: 3, name: 'Pesca em período de defeso', infractionTypeId: 2, minFine: 50000, maxFine: 250000 },
];
