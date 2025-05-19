import type { PaletteMode } from "@mui/material"

export const light = {
  alternate: {
    main: "#f7f9fa", // White
    dark: "#e8eaf6", // White touch of blue
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  type: "light" as PaletteMode,
  primary: {
    main: "#e91e63",
    light: "#f48fb1",
    dark: "#c2185b",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#2e7d32", // Changed from bright green to a more balanced green
    light: "#60ad5e",
    dark: "#005005",
    contrastText: "#ffffff",
  },
  success: {
    main: "#4caf50",
    light: "#80e27e",
    dark: "#087f23",
  },
  warning: {
    main: "#ff9800",
    light: "#ffc947",
    dark: "#c66900",
  },
  error: {
    main: "#f44336",
    light: "#ff7961",
    dark: "#ba000d",
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#0069c0",
  },
  text: {
    primary: "#2d3748",
    secondary: "#718096",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#f8f9fa",
    level2: "#f5f5f5",
    level1: "#fff",
    footer: "#f7f9fa",
  },
}

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
  type: "dark" as PaletteMode,
  primary: {
    main: "#e91e63",
    light: "#f48fb1",
    dark: "#c2185b",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#4caf50", // Changed from bright green to a more balanced green
    light: "#80e27e",
    dark: "#087f23",
    contrastText: "#ffffff",
  },
  success: {
    main: "#4caf50",
    light: "#80e27e",
    dark: "#087f23",
  },
  warning: {
    main: "#ff9800",
    light: "#ffc947",
    dark: "#c66900",
  },
  error: {
    main: "#f44336",
    light: "#ff7961",
    dark: "#ba000d",
  },
  info: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#0069c0",
  },
  text: {
    primary: "#EEEEEF",
    secondary: "#AEB0B4",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#1e1e1e",
    default: "#121212",
    level2: "#333",
    level1: "#2e2e2e",
  },
}
