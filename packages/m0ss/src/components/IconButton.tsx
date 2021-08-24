import {
    IconButton as MuiIconButton,
    Theme,
    withStyles,
} from "@material-ui/core";

export const IconButton = withStyles((theme: Theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
    },
    colorSecondary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.contrastText,
        },
    },
}))(MuiIconButton);
