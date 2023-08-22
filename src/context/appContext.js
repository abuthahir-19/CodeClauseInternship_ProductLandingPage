import { createContext, useContext, useState } from "react";

const StateContext = createContext ();

export const ContextProvider = ({ children }) => {
    const [isClicked, setisClicked] = useState (false);

    const handleClick = () => {
        setisClicked (prev => !prev);
    };

    return (
        <StateContext.Provider value={{ isClicked, handleClick }}>
            { children }
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext (StateContext);