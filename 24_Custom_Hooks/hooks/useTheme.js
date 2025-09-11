import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export function useTheme(){
    const [isDark, setIsDark] = useContext(themeContext);
    return [isDark, setIsDark]
}