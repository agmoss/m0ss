import { ThemeProvider } from "@material-ui/core";
import React, { ComponentType } from "react";

import CustomTheme from "./theme";

export const withTheme = <T extends object>(
    WrappedComponent: ComponentType<T>
): React.FC<T> => ({ ...props }) => (
    <ThemeProvider theme={CustomTheme}>
        <WrappedComponent {...(props as T)} />
    </ThemeProvider>
);
