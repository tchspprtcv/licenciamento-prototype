
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
}

export interface Category {
  id: number;
  name: string;
  sectorId: number;
  parentId?: number;
  codCAE?: string;
  licenseCount: number;
}

export interface LicenseType {
  id: number;
  name: string;
  sectorId: number;
  categoryId: number;
  subcategoryId?: number;
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
