import React, { createContext, useState, useContext, useEffect } from 'react';

const TopicsContext = createContext(undefined);

export const useTopicSocket = () => {
    return useContext(TopicsContext);
};

export const TopicsProvider = ({ children }) => {
    const [topics, setTopics] = useState(null); // Initialiser avec null ou une valeur par défaut

    const value = {
        topics,
        setTopics,
    };

    return <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>;
};
