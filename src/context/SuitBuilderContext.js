import React, {createContext, useEffect, useState} from 'react';

const AppContext = createContext({});

const AppProvider = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTab, setCurrentTab] = useState(0)


    useEffect(() => {
        if (currentSlide !== currentTab) {
            setCurrentTab(currentSlide);
        }
    }, [currentSlide]);

    useEffect(() => {
        if (currentTab !== currentSlide) {
            setCurrentSlide(currentTab);
        }
    }, [currentTab]);

    const contextValue = {
        currentTab,
        currentSlide,
        setCurrentTab,
        setCurrentSlide
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};
