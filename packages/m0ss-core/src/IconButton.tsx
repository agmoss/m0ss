// @ts-nocheck
import MuiIconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
    },
    "&.MuiIconButton-colorSecondary": {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.contrastText,
        },
    },
}));
