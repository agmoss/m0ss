// @ts-nocheck
import { PaletteMode, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import React, { ComponentType, useEffect } from "react";

import { getTheme } from "@m0ss/theme";
import { useDarkMode } from "./useDarkMode";

export interface ILayout {
    themeToggler: () => void;
    themeMode: PaletteMode;
}

interface IWithLayout {
    Layout<T extends ILayout>(_: T): JSX.Element;
}

export const withLayout =
    ({ Layout }: IWithLayout) =>
    <T extends Record<string, unknown>>(
        WrappedComponent: ComponentType<T>
    ): React.FC<T> =>
    // eslint-disable-next-line react/display-name
    ({ ...props }) => {
        useEffect(() => {
            AOS.init({
                once: true,
                delay: 50,
                duration: 500,
                easing: "ease-in-out",
            });
        }, []);

        const mode = useDarkMode();

        const theme = getTheme(mode.themeMode);

        useEffect(() => {
            AOS.refresh();
        }, [mode.mountedComponent]);

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout
                    themeMode={mode.themeMode}
                    themeToggler={mode.themeToggler}
                >
                    <WrappedComponent
                        themeMode={mode.themeMode}
                        {...(props as T)}
                    />
                </Layout>
            </ThemeProvider>
        );
    };
