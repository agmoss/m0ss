import { PaletteType } from "@material-ui/core";
export const light = {
    alternate: {
        main: "#f7f9fa", // White
        dark: "#e8eaf6", // White touch of blue
    },
    cardShadow: "rgba(23, 70, 161, .11)",
    type: "light" as PaletteType,
    primary: {
        main: "#e91e63",
    },
    secondary: {
        main: "#54f542",
    },
    text: {
        primary: "#2d3748",
        secondary: "#718096",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
        paper: "#fff",
        default: "#fff",
        level2: "#f5f5f5",
        level1: "#fff",
        footer: "#f7f9fa",
    },
};

export const dark = {
    alternate: {
        main: "#2D3748",
        dark: "#24242b",
    },
    cardShadow: "rgba(0, 0, 0, .11)",
    common: {
        black: "#000",
        white: "#fff",
    },
    type: "dark" as PaletteType,
    primary: {
        main: "#e91e63",
    },
    secondary: {
        main: "#54f542",
    },
    text: {
        primary: "#EEEEEF",
        secondary: "#AEB0B4",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
        paper: "#454545",
        default: "#303030",
    },
};
