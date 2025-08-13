import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Sector, Category, LicenseType, SectorType, Legislation, Fee, Infraction, LicensingModel, ValidityUnit, Entity, EntityType, LicenseEntity, LegislationType, InfractionType, ProcessType, LicenseProcess, LicenseRequest, Zone, LicenseZone, Period, Species, Instrument } from '../types';
import {
    SECTORS as initialSectors,
    SECTOR_TYPES as initialSectorTypes,
    CATEGORIES as initialCategories,
    LICENSE_TYPES as initialLicenseTypes,
    LICENSING_MODELS as initialLicensingModels,
    VALIDITY_UNITS as initialValidityUnits,
    LEGISLATIONS as initialLegislations,
    LEGISLATION_TYPES as initialLegislationTypes,
    FEES as initialFees,
    INFRACTIONS as initialInfractions,
    INFRACTION_TYPES as initialInfractionTypes,
    ENTITIES as initialEntities,
    ENTITY_TYPES as initialEntityTypes,
    LICENSE_ENTITIES as initialLicenseEntities,
    PROCESS_TYPES as initialProcessTypes,
    LICENSE_PROCESSES as initialLicenseProcesses,
    LICENSE_REQUESTS as initialLicenseRequests,
    ZONES as initialZones,
    LICENSE_ZONES as initialLicenseZones,
    PERIODS as initialPeriods,
    SPECIES as initialSpecies,
    INSTRUMENTS as initialInstruments
} from '../constants';

interface DataContextType {
    sectors: Sector[];
    sectorTypes: SectorType[];
    categories: Category[];
    licenseTypes: LicenseType[];
    licensingModels: LicensingModel[];
    validityUnits: ValidityUnit[];
    processTypes: ProcessType[];
    licenseProcesses: LicenseProcess[];
    licenseRequests: LicenseRequest[];
    legislations: Legislation[];
    legislationTypes: LegislationType[];
    fees: Fee[];
    infractions: Infraction[];
    infractionTypes: InfractionType[];
    entities: Entity[];
    entityTypes: EntityType[];
    licenseEntities: LicenseEntity[];
    zones: Zone[];
    licenseZones: LicenseZone[];
    periods: Period[];
    species: Species[];
    instruments: Instrument[];
    getSectorById: (id: number) => Sector | undefined;
    addSector: (sector: Omit<Sector, 'id' | 'categoryCount' | 'licenseCount' | 'createdAt'>) => void;
    updateSector: (sector: Sector) => void;
    deleteSector: (id: number) => boolean;
    getSectorTypeById: (id: number) => SectorType | undefined;
    addSectorType: (sectorType: Omit<SectorType, 'id'>) => void;
    updateSectorType: (sectorType: SectorType) => void;
    deleteSectorType: (id: number) => void;
    getLicensingModelById: (id: number) => LicensingModel | undefined;
    addLicensingModel: (licensingModel: Omit<LicensingModel, 'id'>) => void;
    updateLicensingModel: (licensingModel: LicensingModel) => void;
    deleteLicensingModel: (id: number) => void;
    getValidityUnitById: (id: number) => ValidityUnit | undefined;
    addValidityUnit: (validityUnit: Omit<ValidityUnit, 'id'>) => void;
    updateValidityUnit: (validityUnit: ValidityUnit) => void;
    deleteValidityUnit: (id: number) => void;
    getCategoryById: (id: number) => Category | undefined;
    addCategory: (category: Omit<Category, 'id' | 'licenseCount' | 'createdAt'>) => void;
    updateCategory: (category: Category) => void;
    deleteCategory: (id: number) => boolean;
    getLicenseTypeById: (id: number) => LicenseType | undefined;
    addLicenseType: (licenseType: Omit<LicenseType, 'id' | 'createdAt'>) => void;
    updateLicenseType: (licenseType: LicenseType) => void;
    deleteLicenseType: (id: number) => boolean;
    addLegislation: (legislation: Omit<Legislation, 'id'>) => void;
    deleteLegislation: (id: number) => void;
    getLegislationTypeById: (id: number) => LegislationType | undefined;
    addLegislationType: (legislationType: Omit<LegislationType, 'id'>) => void;
    updateLegislationType: (legislationType: LegislationType) => void;
    deleteLegislationType: (id: number) => void;
    addFee: (fee: Omit<Fee, 'id'>) => void;
    deleteFee: (id: number) => void;
    addInfraction: (infraction: Omit<Infraction, 'id'>) => void;
    deleteInfraction: (id: number) => void;
    getInfractionTypeById: (id: number) => InfractionType | undefined;
    addInfractionType: (infractionType: Omit<InfractionType, 'id'>) => void;
    updateInfractionType: (infractionType: InfractionType) => void;
    deleteInfractionType: (id: number) => void;
    getEntityById: (id: number) => Entity | undefined;
    addEntity: (entity: Omit<Entity, 'id' | 'createdAt'>) => void;
    updateEntity: (entity: Entity) => void;
    deleteEntity: (id: number) => void;
    getEntityTypeById: (id: number) => EntityType | undefined;
    addEntityType: (entityType: Omit<EntityType, 'id'>) => void;
    updateEntityType: (entityType: EntityType) => void;
    deleteEntityType: (id: number) => void;
    getProcessTypeById: (id: number) => ProcessType | undefined;
    addProcessType: (processType: Omit<ProcessType, 'id'>) => void;
    updateProcessType: (processType: ProcessType) => void;
    deleteProcessType: (id: number) => void;
    associateEntityToLicense: (licenseTypeId: number, entityId: number) => void;
    dissociateEntityFromLicense: (associationId: number) => void;
    associateProcessToLicense: (licenseTypeId: number, processTypeId: number) => void;
    dissociateProcessFromLicense: (associationId: number) => void;
    getLicenseRequestById: (id: number) => LicenseRequest | undefined;
    addLicenseRequest: (request: Omit<LicenseRequest, 'id' | 'createdAt' | 'status' | 'currentStep' | 'steps'>) => void;
    updateLicenseRequest: (request: LicenseRequest) => void;
    associateZoneToLicense: (licenseTypeId: number, zoneId: number) => void;
    dissociateZoneFromLicense: (associationId: number) => void;
    addPeriod: (period: Omit<Period, 'id'>) => void;
    deletePeriod: (id: number) => void;
    addSpecies: (species: Omit<Species, 'id'>) => void;
    deleteSpecies: (id: number) => void;
    addInstrument: (instrument: Omit<Instrument, 'id'>) => void;
    deleteInstrument: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [sectors, setSectors] = useState<Sector[]>(initialSectors);
    const [sectorTypes, setSectorTypes] = useState<SectorType[]>(initialSectorTypes);
    const [categories, setCategories] = useState<Category[]>(initialCategories);
    const [licenseTypes, setLicenseTypes] = useState<LicenseType[]>(initialLicenseTypes);
    const [licensingModels, setLicensingModels] = useState<LicensingModel[]>(initialLicensingModels);
    const [validityUnits, setValidityUnits] = useState<ValidityUnit[]>(initialValidityUnits);
    const [processTypes, setProcessTypes] = useState<ProcessType[]>(initialProcessTypes);
    const [licenseProcesses, setLicenseProcesses] = useState<LicenseProcess[]>(initialLicenseProcesses);
    const [licenseRequests, setLicenseRequests] = useState<LicenseRequest[]>(initialLicenseRequests);
    const [legislations, setLegislations] = useState<Legislation[]>(initialLegislations);
    const [legislationTypes, setLegislationTypes] = useState<LegislationType[]>(initialLegislationTypes);
    const [fees, setFees] = useState<Fee[]>(initialFees);
    const [infractions, setInfractions] = useState<Infraction[]>(initialInfractions);
    const [infractionTypes, setInfractionTypes] = useState<InfractionType[]>(initialInfractionTypes);
    const [entities, setEntities] = useState<Entity[]>(initialEntities);
    const [entityTypes, setEntityTypes] = useState<EntityType[]>(initialEntityTypes);
    const [licenseEntities, setLicenseEntities] = useState<LicenseEntity[]>(initialLicenseEntities);
    const [zones, setZones] = useState<Zone[]>(initialZones);
    const [licenseZones, setLicenseZones] = useState<LicenseZone[]>(initialLicenseZones);
    const [periods, setPeriods] = useState<Period[]>(initialPeriods);
    const [species, setSpecies] = useState<Species[]>(initialSpecies);
    const [instruments, setInstruments] = useState<Instrument[]>(initialInstruments);

    // --- Sector Management ---
    const getSectorById = (id: number) => {
        return sectors.find(s => s.id === id);
    };

    const addSector = (sectorData: Omit<Sector, 'id' | 'categoryCount' | 'licenseCount' | 'createdAt'>) => {
        const newSector: Sector = {
            ...sectorData,
            id: Date.now(), // Simple way to generate a unique ID for mock data
            categoryCount: 0,
            licenseCount: 0,
            createdAt: Date.now(),
        };
        setSectors(prevSectors => [...prevSectors, newSector]);
    };

    const updateSector = (updatedSector: Sector) => {
        setSectors(prevSectors =>
            prevSectors.map(s => s.id === updatedSector.id ? updatedSector : s)
        );
    };

    const deleteSector = (id: number) => {
        const hasCategories = categories.some(c => c.sectorId === id);
        const hasLicenses = licenseTypes.some(l => l.sectorId === id);

        if (hasCategories || hasLicenses) {
            alert('Erro: Este setor não pode ser eliminado pois tem categorias ou licenças associadas.');
            return false;
        }

        setSectors(prevSectors => prevSectors.filter(s => s.id !== id));
        return true;
    };

    // --- Category Management ---
    const getCategoryById = (id: number) => {
        return categories.find(c => c.id === id);
    };

    const addCategory = (categoryData: Omit<Category, 'id' | 'licenseCount' | 'createdAt'>) => {
        const newCategory: Category = {
            ...categoryData,
            id: Date.now(),
            licenseCount: 0,
            createdAt: Date.now(),
        };
        setCategories(prev => [...prev, newCategory]);
        // Also update category count in the parent sector
        setSectors(prevSectors => prevSectors.map(s =>
            s.id === newCategory.sectorId ? { ...s, categoryCount: s.categoryCount + 1 } : s
        ));
    };

    const updateCategory = (updatedCategory: Category) => {
        setCategories(prev => prev.map(c => c.id === updatedCategory.id ? updatedCategory : c));
    };

    const deleteCategory = (id: number) => {
        const categoryToDelete = categories.find(c => c.id === id);
        if (!categoryToDelete) return false;

        const hasLicenses = licenseTypes.some(l => l.categoryId === id);
        if (hasLicenses) {
            alert('Erro: Esta categoria não pode ser eliminada pois tem tipos de licença associados.');
            return false;
        }

        setCategories(prev => prev.filter(c => c.id !== id));
        // Also update category count in the parent sector
        setSectors(prevSectors => prevSectors.map(s =>
            s.id === categoryToDelete.sectorId ? { ...s, categoryCount: Math.max(0, s.categoryCount - 1) } : s
        ));
        return true;
    };


    // --- License Type Management ---
    const getLicenseTypeById = (id: number) => {
        return licenseTypes.find(l => l.id === id);
    };

    const addLicenseType = (licenseTypeData: Omit<LicenseType, 'id' | 'createdAt'>) => {
        const newLicenseType: LicenseType = {
            ...licenseTypeData,
            id: Date.now(),
            createdAt: Date.now(),
        };
        setLicenseTypes(prev => [...prev, newLicenseType]);
        // Update license count on parent sector and category
        setSectors(prev => prev.map(s => s.id === newLicenseType.sectorId ? { ...s, licenseCount: s.licenseCount + 1 } : s));
        setCategories(prev => prev.map(c => c.id === newLicenseType.categoryId ? { ...c, licenseCount: c.licenseCount + 1 } : c));
    };

    const updateLicenseType = (updatedLicenseType: LicenseType) => {
        setLicenseTypes(prev => prev.map(l => l.id === updatedLicenseType.id ? updatedLicenseType : l));
    };

    const deleteLicenseType = (id: number) => {
        const licenseTypeToDelete = licenseTypes.find(l => l.id === id);
        if (!licenseTypeToDelete) return false;

        // In a real app, check for usage before deleting. Here we just delete.
        setLicenseTypes(prev => prev.filter(l => l.id !== id));
        // Update license count on parent sector and category
        setSectors(prev => prev.map(s => s.id === licenseTypeToDelete.sectorId ? { ...s, licenseCount: Math.max(0, s.licenseCount - 1) } : s));
        setCategories(prev => prev.map(c => c.id === licenseTypeToDelete.categoryId ? { ...c, licenseCount: Math.max(0, c.licenseCount - 1) } : c));
        return true;
    };

    // --- Legislation Management for Dossier ---
    const addLegislation = (legislationData: Omit<Legislation, 'id'>) => {
        const newLegislation: Legislation = {
            ...legislationData,
            id: Date.now(),
        };
        setLegislations(prev => [...prev, newLegislation]);
    };

    const deleteLegislation = (id: number) => {
        setLegislations(prev => prev.filter(l => l.id !== id));
    };

    // --- Legislation Type Management ---
    const getLegislationTypeById = (id: number) => {
        return legislationTypes.find(lt => lt.id === id);
    };

    const addLegislationType = (legislationTypeData: Omit<LegislationType, 'id'>) => {
        const newLegislationType: LegislationType = {
            ...legislationTypeData,
            id: Date.now(),
        };
        setLegislationTypes(prev => [...prev, newLegislationType]);
    };

    const updateLegislationType = (updatedLegislationType: LegislationType) => {
        setLegislationTypes(prev => prev.map(lt => lt.id === updatedLegislationType.id ? updatedLegislationType : lt));
    };

    const deleteLegislationType = (id: number) => {
        // In a real app, check for associations before deleting
        setLegislationTypes(prev => prev.filter(lt => lt.id !== id));
    };

    // --- Fee Management for Dossier ---
    const addFee = (feeData: Omit<Fee, 'id'>) => {
        const newFee: Fee = {
            ...feeData,
            id: Date.now(),
        };
        setFees(prev => [...prev, newFee]);
    };

    const deleteFee = (id: number) => {
        setFees(prev => prev.filter(f => f.id !== id));
    };

    // --- Infraction Management for Dossier ---
    const addInfraction = (infractionData: Omit<Infraction, 'id'>) => {
        const newInfraction: Infraction = {
            ...infractionData,
            id: Date.now(),
        };
        setInfractions(prev => [...prev, newInfraction]);
    };

    const deleteInfraction = (id: number) => {
        setInfractions(prev => prev.filter(i => i.id !== id));
    };

    // --- Infraction Type Management ---
    const getInfractionTypeById = (id: number) => {
        return infractionTypes.find(it => it.id === id);
    };

    const addInfractionType = (infractionTypeData: Omit<InfractionType, 'id'>) => {
        const newInfractionType: InfractionType = {
            ...infractionTypeData,
            id: Date.now(),
        };
        setInfractionTypes(prev => [...prev, newInfractionType]);
    };

    const updateInfractionType = (updatedInfractionType: InfractionType) => {
        setInfractionTypes(prev => prev.map(it => it.id === updatedInfractionType.id ? updatedInfractionType : it));
    };

    const deleteInfractionType = (id: number) => {
        setInfractionTypes(prev => prev.filter(it => it.id !== id));
    };

    // --- Entity Management ---
    const getEntityById = (id: number) => {
        return entities.find(e => e.id === id);
    };

    const addEntity = (entityData: Omit<Entity, 'id' | 'createdAt'>) => {
        const newEntity: Entity = {
            ...entityData,
            id: Date.now(),
            createdAt: Date.now(),
        };
        setEntities(prev => [...prev, newEntity]);
    };

    const updateEntity = (updatedEntity: Entity) => {
        setEntities(prev => prev.map(e => e.id === updatedEntity.id ? updatedEntity : e));
    };

    const deleteEntity = (id: number) => {
        // In a real app, check for associations before deleting
        setEntities(prev => prev.filter(e => e.id !== id));
    };

    // --- License-Entity Association Management ---
    const associateEntityToLicense = (licenseTypeId: number, entityId: number) => {
        const newAssociation: LicenseEntity = {
            id: Date.now(),
            licenseTypeId,
            entityId,
        };
        setLicenseEntities(prev => [...prev, newAssociation]);
    };

    const dissociateEntityFromLicense = (associationId: number) => {
        setLicenseEntities(prev => prev.filter(assoc => assoc.id !== associationId));
    };

    // --- Entity Type Management ---
    const getEntityTypeById = (id: number) => {
        return entityTypes.find(et => et.id === id);
    };

    const addEntityType = (entityTypeData: Omit<EntityType, 'id'>) => {
        const newEntityType: EntityType = {
            ...entityTypeData,
            id: Date.now(),
        };
        setEntityTypes(prev => [...prev, newEntityType]);
    };

    const updateEntityType = (updatedEntityType: EntityType) => {
        setEntityTypes(prev => prev.map(et => et.id === updatedEntityType.id ? updatedEntityType : et));
    };

    const deleteEntityType = (id: number) => {
        setEntityTypes(prev => prev.filter(et => et.id !== id));
    };

    // --- Sector Type Management ---
    const getSectorTypeById = (id: number) => {
        return sectorTypes.find(st => st.id === id);
    };

    const addSectorType = (sectorTypeData: Omit<SectorType, 'id'>) => {
        const newSectorType: SectorType = {
            ...sectorTypeData,
            id: Date.now(),
        };
        setSectorTypes(prev => [...prev, newSectorType]);
    };

    const updateSectorType = (updatedSectorType: SectorType) => {
        setSectorTypes(prev => prev.map(st => st.id === updatedSectorType.id ? updatedSectorType : st));
    };

    const deleteSectorType = (id: number) => {
        setSectorTypes(prev => prev.filter(st => st.id !== id));
    };

    // --- Licensing Model Management ---
    const getLicensingModelById = (id: number) => {
        return licensingModels.find(lm => lm.id === id);
    };

    const addLicensingModel = (licensingModelData: Omit<LicensingModel, 'id'>) => {
        const newLicensingModel: LicensingModel = {
            ...licensingModelData,
            id: Date.now(),
        };
        setLicensingModels(prev => [...prev, newLicensingModel]);
    };

    const updateLicensingModel = (updatedLicensingModel: LicensingModel) => {
        setLicensingModels(prev => prev.map(lm => lm.id === updatedLicensingModel.id ? updatedLicensingModel : lm));
    };

    const deleteLicensingModel = (id: number) => {
        setLicensingModels(prev => prev.filter(lm => lm.id !== id));
    };

    // --- Validity Unit Management ---
    const getValidityUnitById = (id: number) => {
        return validityUnits.find(vu => vu.id === id);
    };

    const addValidityUnit = (validityUnitData: Omit<ValidityUnit, 'id'>) => {
        const newValidityUnit: ValidityUnit = {
            ...validityUnitData,
            id: Date.now(),
        };
        setValidityUnits(prev => [...prev, newValidityUnit]);
    };

    const updateValidityUnit = (updatedValidityUnit: ValidityUnit) => {
        setValidityUnits(prev => prev.map(vu => vu.id === updatedValidityUnit.id ? updatedValidityUnit : vu));
    };

    const deleteValidityUnit = (id: number) => {
        setValidityUnits(prev => prev.filter(vu => vu.id !== id));
    };

    // --- Process Type Management ---
    const getProcessTypeById = (id: number) => {
        return processTypes.find(pt => pt.id === id);
    };

    const addProcessType = (processTypeData: Omit<ProcessType, 'id'>) => {
        const newProcessType: ProcessType = {
            ...processTypeData,
            id: Date.now(),
        };
        setProcessTypes(prev => [...prev, newProcessType]);
    };

    const updateProcessType = (updatedProcessType: ProcessType) => {
        setProcessTypes(prev => prev.map(pt => pt.id === updatedProcessType.id ? updatedProcessType : pt));
    };

    const deleteProcessType = (id: number) => {
        setProcessTypes(prev => prev.filter(pt => pt.id !== id));
    };

    // --- License-Process Association Management ---
    const associateProcessToLicense = (licenseTypeId: number, processTypeId: number) => {
        const newAssociation: LicenseProcess = {
            id: Date.now(),
            licenseTypeId,
            processTypeId,
        };
        setLicenseProcesses(prev => [...prev, newAssociation]);
    };

    const dissociateProcessFromLicense = (associationId: number) => {
        setLicenseProcesses(prev => prev.filter(assoc => assoc.id !== associationId));
    };

    // --- License Request Management ---
    const getLicenseRequestById = (id: number) => {
        return licenseRequests.find(req => req.id === id);
    };

    const addLicenseRequest = (requestData: Omit<LicenseRequest, 'id' | 'createdAt' | 'status' | 'currentStep' | 'steps'>) => {
        const newRequest: LicenseRequest = {
            ...requestData,
            id: Date.now(),
            createdAt: Date.now(),
            status: RequestStatus.Pendente,
            currentStep: 1,
            steps: {
                pedido: { status: StepStatus.Concluido, date: new Date().toISOString().split('T')[0] },
                vistorias: { status: StepStatus.Pendente, items: [] }, // This would be populated based on the license type
                pagamento: { status: StepStatus.Pendente },
                emissao: { status: StepStatus.Pendente },
            }
        };
        setLicenseRequests(prev => [...prev, newRequest]);
    };

    const updateLicenseRequest = (updatedRequest: LicenseRequest) => {
        setLicenseRequests(prev => prev.map(req => req.id === updatedRequest.id ? updatedRequest : req));
    };

    // --- Zone Management ---
    const associateZoneToLicense = (licenseTypeId: number, zoneId: number) => {
        const newAssociation: LicenseZone = { id: Date.now(), licenseTypeId, zoneId };
        setLicenseZones(prev => [...prev, newAssociation]);
    };
    const dissociateZoneFromLicense = (associationId: number) => {
        setLicenseZones(prev => prev.filter(assoc => assoc.id !== associationId));
    };

    // --- Period Management ---
    const addPeriod = (periodData: Omit<Period, 'id'>) => {
        const newPeriod: Period = { ...periodData, id: Date.now() };
        setPeriods(prev => [...prev, newPeriod]);
    };
    const deletePeriod = (id: number) => {
        setPeriods(prev => prev.filter(p => p.id !== id));
    };

    // --- Species Management ---
    const addSpecies = (speciesData: Omit<Species, 'id'>) => {
        const newSpecies: Species = { ...speciesData, id: Date.now() };
        setSpecies(prev => [...prev, newSpecies]);
    };
    const deleteSpecies = (id: number) => {
        setSpecies(prev => prev.filter(s => s.id !== id));
    };

    // --- Instrument Management ---
    const addInstrument = (instrumentData: Omit<Instrument, 'id'>) => {
        const newInstrument: Instrument = { ...instrumentData, id: Date.now() };
        setInstruments(prev => [...prev, newInstrument]);
    };
    const deleteInstrument = (id: number) => {
        setInstruments(prev => prev.filter(i => i.id !== id));
    };

    const value = {
        sectors,
        sectorTypes,
        categories,
        licenseTypes,
        licensingModels,
        validityUnits,
        processTypes,
        licenseProcesses,
        licenseRequests,
        legislations,
        legislationTypes,
        fees,
        infractions,
        infractionTypes,
        entities,
        entityTypes,
        licenseEntities,
        zones,
        licenseZones,
        periods,
        species,
        instruments,
        getSectorById,
        addSector,
        updateSector,
        deleteSector,
        getSectorTypeById,
        addSectorType,
        updateSectorType,
        deleteSectorType,
        getCategoryById,
        addCategory,
        updateCategory,
        deleteCategory,
        getLicenseTypeById,
        addLicenseType,
        updateLicenseType,
        deleteLicenseType,
        addLegislation,
        deleteLegislation,
        getLegislationTypeById,
        addLegislationType,
        updateLegislationType,
        deleteLegislationType,
        getLicensingModelById,
        addLicensingModel,
        updateLicensingModel,
        deleteLicensingModel,
        getValidityUnitById,
        addValidityUnit,
        updateValidityUnit,
        deleteValidityUnit,
        addFee,
        deleteFee,
        addInfraction,
        deleteInfraction,
        getInfractionTypeById,
        addInfractionType,
        updateInfractionType,
        deleteInfractionType,
        getProcessTypeById,
        addProcessType,
        updateProcessType,
        deleteProcessType,
        getEntityById,
        addEntity,
        updateEntity,
        deleteEntity,
        getEntityTypeById,
        addEntityType,
        updateEntityType,
        deleteEntityType,
        associateEntityToLicense,
        dissociateEntityFromLicense,
        associateProcessToLicense,
        dissociateProcessFromLicense,
        getLicenseRequestById,
        addLicenseRequest,
        updateLicenseRequest,
        associateZoneToLicense,
        dissociateZoneFromLicense,
        addPeriod,
        deletePeriod,
        addSpecies,
        deleteSpecies,
        addInstrument,
        deleteInstrument
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
