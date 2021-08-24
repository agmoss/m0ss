import {
    TextField as MuiTextField,
    Theme,
    withStyles,
} from "@material-ui/core";

export const TextField = withStyles((theme: Theme) => ({
    root: {
        "& label.Mui-focused": {
            color: theme.palette.primary.main,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: theme.palette.primary.main,
        },
    },
}))(MuiTextField);
