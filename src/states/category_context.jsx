import React, { createContext, useState, useContext, useEffect } from 'react';
import CategoryService from "../services/animal_services/category";

const CategoryContext = createContext(undefined);

export const useCategory = () => {
    return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState(null); // Initialiser avec null ou une valeur par défaut

    useEffect(() => {
        const fetchInitialCategory = () => {
            const response = CategoryService.haveCategory();
            response.then((result)=>{
                setCategory(result)
            }) // Mettre à jour l'état une fois les données récupérées
        };

        fetchInitialCategory()
    }, []); // Le tableau vide signifie que cet effet ne s'exécutera qu'une seule fois après le premier rendu

    const value = {
        category,
        setCategory,
    };

    return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
