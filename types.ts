
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

export interface LicensingModel {
    id: number;
    name: string;
}

export interface ValidityUnit {
    id: number;
    name: string;
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
  licensingModelId?: number;
  validityUnitId?: number;
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

export interface ProcessType {
    id: number;
    name: string;
    description: string;
    bpmnProcessKey: string; // To link to the external BPMN engine
}

export interface LicenseProcess {
    id: number;
    licenseTypeId: number;
    processTypeId: number;
}

// --- License Request Process ---

export enum RequestStatus {
    Pendente = 'Pendente',
    EmAnalise = 'Em Análise',
    Aprovado = 'Aprovado',
    Recusado = 'Recusado',
    Concluido = 'Concluído',
}

export enum StepStatus {
    Pendente = 'Pendente',
    Concluido = 'Concluído',
    AprovadoComRessalvas = 'Aprovado com Ressalvas',
}

export interface Vistoria {
    entityName: string;
    status: StepStatus;
    date?: string;
}

export interface LicenseRequest {
    id: number;
    requesterName: string;
    licenseTypeId: number;
    status: RequestStatus;
    currentStep: number; // 1 to 4
    createdAt: number;
    steps: {
        pedido: {
            status: StepStatus;
            date?: string;
        };
        vistorias: {
            status: StepStatus;
            items: Vistoria[];
        };
        pagamento: {
            status: StepStatus;
            date?: string;
        };
        emissao: {
            status: StepStatus;
            date?: string;
        };
    };
}
