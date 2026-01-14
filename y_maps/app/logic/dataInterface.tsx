"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react'

// Define data type
interface SharedData {
	addressInfo?: string | string[] | undefined;
	spinner?: boolean;
}

// Define context type
interface DataContextType {
	data: SharedData;
	updateData: (newData: Partial<SharedData>) => void;
	resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataInterface: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [data, setData] = useState<SharedData>({ addressInfo: undefined, spinner: false });

	const updateData = (updates: Partial<SharedData>) => {
		setData(prev => ({
			...prev,
			...updates
		}));
	};

	const resetData = () => {
		setData({ addressInfo: undefined });
	};

	return (
		<DataContext.Provider value={{ data, updateData, resetData }}>
			{children}
		</DataContext.Provider>
	);
};

// Custom hook
export const useDataContext = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error('useDataContext must be used within DataProvider');
	}
	return context;
};
