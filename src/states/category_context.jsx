import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext(undefined);

export const useCategory = () => {
    return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(1);

    const value = {
        category,
        setCategory,
    };

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
