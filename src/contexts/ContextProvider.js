import React, { useContext,createContext,useState } from "react";
const StateContext=createContext();
const initialState={
    chat:false,
    cart:false,
    useProfile:false,
    notification:false,
}
export const ContextProvider =({children})=>{
    const [activeMenu,setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState(initialState);
    const [screen,setScreen]=useState(undefined);
    const [currentMode,setCurrentMode]=useState('light');
    const [currentColor,setCurrentColor]=useState('#03C9D7');
    const [themeSetting,setThemeSetting]=useState(false);
    const handleClick=(click)=>{
        setIsClicked({...initialState,[click]:true});

    }
    const SetMode=(e)=>{
        setCurrentMode(e);
        localStorage.setItem('themeMode',e);
        setThemeSetting(false)
    }
    const SetColor=(color)=>{
        setCurrentColor(color)
        localStorage.setItem('themeColor',color);
        setThemeSetting(false);
    }
return(
    
    <StateContext.Provider value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screen,
        setScreen,
        currentColor,
        currentMode,
        SetColor,
        SetMode,
        themeSetting,
        setThemeSetting,
        setCurrentColor,
        setCurrentMode}}>
        {children}
    </StateContext.Provider>
    )
}
export const useStateContext =()=>useContext(StateContext);
