
export enum SectorType {
  Primario = 'Primário',
  Secundario = 'Secundário',
  Terciario = 'Terciário',
}

export interface Sector {
  id: number;
  name: string;
  type: SectorType;
  description: string;
  cae?: string;
  categoryCount: number;
  licenseCount: number;
  createdAt: number;
}

export interface Category {
  id: number;
  name: string;
  sectorId: number;
  parentId?: number;
  codCAE?: string;
  licenseCount: number;
  createdAt: number;
}

export enum LicensingModel {
    ProvisorioDefinitivo = 'Provisório + Definitivo',
    Definitivo = 'Definitivo',
}

export enum ValidityUnit {
    Dias = 'dias',
    Meses = 'meses',
    Anos = 'anos',
}

export interface LicenseType {
  id: number;
  name: string;
  sectorId: number;
  categoryId: number;
  subcategoryId?: number;
  createdAt: number;
  // Fields for Dossier -> Dados Gerais
  description?: string;
  licensingModel?: LicensingModel;
  validityUnit?: ValidityUnit;
  validityValue?: number;
  isLifetime?: boolean;
}

export interface Legislation {
    id: number;
    licenseTypeId: number;
    name: string;
    type: string;
    publicationDate: string;
    documentUrl?: string;
}

export interface Fee {
    id: number;
    licenseTypeId: number;
    name: string;
    process: string;
    value: number;
    status: 'Activo' | 'Inactivo';
}

export interface Infraction {
    id: number;
    licenseTypeId: number;
    name: string;
    minFine: number;
    maxFine: number;
}

export enum EntityType {
    Decisao = 'Decisão',
    Parecer = 'Parecer',
    Vistoria = 'Vistoria',
}

export interface Entity {
    id: number;
    name: string;
    type: EntityType;
    email?: string;
    phone?: string;
    createdAt: number;
}
