import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color:
        theme.palette.mode === "dark"
            ? theme.palette.common.white
            : theme.palette.text.primary,
    "&:hover": {
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : theme.palette.primary.main,
        color:
            theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.primary.contrastText,
    },
}));
