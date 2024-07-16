import React, { useContext } from "react";
import ThemeContext from "./Themecontext";
import '../style.css'

const Theme = () => {
    const { theme, toogle } = useContext(ThemeContext)

    return(
        <div className={`container ${theme}`}>
            <h1>Componente</h1>
            <button onClick={toogle}>Alterar tema</button>
        </div>
    )
}

export default Theme;