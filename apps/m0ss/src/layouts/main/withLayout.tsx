import { PaletteType } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import AOS from "aos";
import React, { ComponentType, useEffect } from "react";

import { getTheme } from "../../theme/index";
import { useDarkMode } from "./useDarkMode";

export interface ILayout {
    themeToggler: () => void;
    themeMode: PaletteType;
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
            const jssStyles = document.querySelector("#jss-server-side");
            if (jssStyles && jssStyles.parentElement) {
                jssStyles.parentElement.removeChild(jssStyles);
            }

            AOS.init({
                once: true,
                delay: 50,
                duration: 500,
                easing: "ease-in-out",
            });
        }, []);

        const mode = useDarkMode();

        useEffect(() => {
            AOS.refresh();
        }, [mode.mountedComponent]);

        return (
            <ThemeProvider theme={getTheme(mode.themeMode)}>
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
