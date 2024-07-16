import React, { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toogle = () => {
        // === = Condição
        // ? = Seta o valor
        // : = Senão seta esse valor
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <ThemeContext.Provider value={{ theme, toogle }}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeContext;