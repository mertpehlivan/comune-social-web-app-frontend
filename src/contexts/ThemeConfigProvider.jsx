import { ThemeContext } from '@emotion/react'
import React, { createContext, useContext, useState } from 'react'

const ThemeConfigContext = createContext()

const ThemeConfigProvider = ({children}) => {
  const [themeConfig,setThemeConfig] = useState(
    {
      communityBar:{
        bgColor:"white"
      }
    }
  )
  const saveThemeConfig = () =>{
    console.log("saved theme!")
  }
  return (
    <ThemeConfigContext.Provider value={{themeConfig,setThemeConfig}}>
      {children}
    </ThemeConfigContext.Provider>
  )
}

export const useThemeConfig = ()=>{ return(useContext(ThemeConfigContext));}

export default ThemeConfigProvider;