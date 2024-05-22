import { ThemeContext } from '@emotion/react'
import React, { createContext, useContext, useState } from 'react'

const ThemeConfigContext = createContext()

const ThemeConfigProvider = ({ children }) => {
  const [themeConfig, setThemeConfig] = useState(
    {
      background:{
        bgColor:"#FFFFFF"
      },
      communityBar: {
        bgColor: "#FFFFFF",
        textColor: "black",
        joinButtonColor: "#ee6c4d",
        joinButtonTextColor: "#FFFFFF",
        borderColor: "#ee6c4d",
        border: 0
      },
      aboutBar: {
        aboutBgColor: "#FFFFFF",
        aboutTextColor: "#000000",
        aboutBorderSize: 0,
        aboutBorderColor: "#FFFFFFF"
      },
      calenderBar:{
        calenderBgColor:"#FFFFFF",
        calenderTextColor:"#000000",
        calenderBorderColor:"#000000",
        calenderBorderSize:0,
        calenderBoxBgColor:"#FFFFFF",
        calenderBoxTextColor:"#000000",
        calenderBoxBorderSize:0,
        calenderBoxBorderColor:"#FFFFFFF"

      },
      shareBar:{
        shareBgColor:"#FFFFFF",
        shareTextColor:"#00000",
        shareButtonColor:"#ee6c4d",
        shareButtonTextColor:"#FFFFFF",
        shareBorderColor:"#ee6c4d",
        shareBorderSize:0
      },
      postBar:{
        postBgColor:"#FFFFFF",
        postTextColor:"#00000",
        postButtonColor:"#ee6c4d",
        postButtonTextColor:"#000000",
        postBorderColor:"#FFFFFF",
        postBorderSize:0
      }
    }
  )
  const saveThemeConfig = () => {
    console.log("saved theme!")
  }
  return (
    <ThemeConfigContext.Provider value={{ themeConfig, setThemeConfig }}>
      {children}
    </ThemeConfigContext.Provider>
  )
}

export const useThemeConfig = () => { return (useContext(ThemeConfigContext)); }

export default ThemeConfigProvider;