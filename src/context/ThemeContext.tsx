import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react"

interface ThemeContextType {
    themeValue: "light" | "dark"
    setThemeValue: Dispatch<SetStateAction<'light' | 'dark'>>
}

export const ThemeContext = createContext<ThemeContextType>({
    themeValue: "light",
    setThemeValue: () => {}
})

interface Props {
    children: ReactNode
    initial?: 'light' | 'dark'
}

export const ThemeContextProvider: FC<Props> = ({children, initial = 'light'}) => {
    const [themeValue, setThemeValue] = useState(initial)

    return (
        <ThemeContext.Provider value={{themeValue, setThemeValue}}>
            {children}
        </ThemeContext.Provider>
    )
}