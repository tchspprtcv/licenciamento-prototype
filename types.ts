
export interface SectorType {
  id: number;
  name: string;
}

export interface Sector {
  id: number;
  name: string;
  sectorTypeId: number;
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

export interface LegislationType {
    id: number;
    name: string;
}

export interface Legislation {
    id: number;
    licenseTypeId: number;
    name:string;
    legislationTypeId: number;
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

export interface InfractionType {
    id: number;
    name: string;
}

export interface Infraction {
    id: number;
    licenseTypeId: number;
    name: string;
    infractionTypeId: number;
    minFine: number;
    maxFine: number;
}

export interface EntityType {
    id: number;
    name: string;
}

export interface Entity {
    id: number;
    name: string;
    entityTypeId: number;
    email?: string;
    phone?: string;
    createdAt: number;
}

export interface LicenseEntity {
    id: number;
    licenseTypeId: number;
    entityId: number;
}
