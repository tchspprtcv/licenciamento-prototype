import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Sector, Category, LicenseType, SectorType } from '../types';
import {
    SECTORS as initialSectors,
    CATEGORIES as initialCategories,
    LICENSE_TYPES as initialLicenseTypes,
    LEGISLATIONS as initialLegislations,
    FEES as initialFees,
    INFRACTIONS as initialInfractions,
    ENTITIES as initialEntities
} from '../constants';

interface DataContextType {
    sectors: Sector[];
    categories: Category[];
    licenseTypes: LicenseType[];
    legislations: Legislation[];
    fees: Fee[];
    infractions: Infraction[];
    entities: Entity[];
    getSectorById: (id: number) => Sector | undefined;
    addSector: (sector: Omit<Sector, 'id' | 'categoryCount' | 'licenseCount' | 'createdAt'>) => void;
    updateSector: (sector: Sector) => void;
    deleteSector: (id: number) => boolean;
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
    addFee: (fee: Omit<Fee, 'id'>) => void;
    deleteFee: (id: number) => void;
    addInfraction: (infraction: Omit<Infraction, 'id'>) => void;
    deleteInfraction: (id: number) => void;
    getEntityById: (id: number) => Entity | undefined;
    addEntity: (entity: Omit<Entity, 'id' | 'createdAt'>) => void;
    updateEntity: (entity: Entity) => void;
    deleteEntity: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [sectors, setSectors] = useState<Sector[]>(initialSectors);
    const [categories, setCategories] = useState<Category[]>(initialCategories);
    const [licenseTypes, setLicenseTypes] = useState<LicenseType[]>(initialLicenseTypes);
    const [legislations, setLegislations] = useState<Legislation[]>(initialLegislations);
    const [fees, setFees] = useState<Fee[]>(initialFees);
    const [infractions, setInfractions] = useState<Infraction[]>(initialInfractions);
    const [entities, setEntities] = useState<Entity[]>(initialEntities);

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

    const value = {
        sectors,
        categories,
        licenseTypes,
        legislations,
        fees,
        infractions,
        entities,
        getSectorById,
        addSector,
        updateSector,
        deleteSector,
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
        addFee,
        deleteFee,
        addInfraction,
        deleteInfraction,
        getEntityById,
        addEntity,
        updateEntity,
        deleteEntity
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
