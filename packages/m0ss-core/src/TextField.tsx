// @ts-nocheck
import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const TextField = styled(MuiTextField)(({ theme }) => ({
    "& label.Mui-focused": {
        color: theme.palette.primary.main,
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.primary.main,
    },
}));
