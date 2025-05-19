// @ts-nocheck
import MuiSwitch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export const Switch = styled(MuiSwitch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
        color: theme.palette.primary.main,
        "&.Mui-checked": {
            color: theme.palette.primary.main,
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));
