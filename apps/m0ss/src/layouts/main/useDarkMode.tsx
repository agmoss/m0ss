import { PaletteType } from "@material-ui/core";
import AOS from "aos";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [themeMode, setTheme] = useState<PaletteType>("light");
    const [mountedComponent, setMountedComponent] = useState(false);

    const setMode = (mode: PaletteType) => {
        window.localStorage.setItem("themeMode", mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        themeMode === "light" ? setMode("dark") : setMode("light");
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem(
            "themeMode"
        ) as PaletteType;
        localTheme ? setTheme(localTheme) : setMode("light");
        setMountedComponent(true);
        AOS.refresh();
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [themeMode]);

    return {
        themeMode: themeMode,
        themeToggler: themeToggler,
        mountedComponent: mountedComponent,
    };
};
