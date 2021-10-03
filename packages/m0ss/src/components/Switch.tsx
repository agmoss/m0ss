import { Switch as MuiSwitch, Theme, withStyles } from "@material-ui/core";

export const Switch = withStyles((theme: Theme) => ({
    switchBase: {
        color: theme.palette.primary.main,
        "&$checked": {
            color: theme.palette.primary.main,
        },
        "&$checked + $track": {
            backgroundColor: theme.palette.primary.main,
        },
    },
    checked: {},
    track: {},
}))(MuiSwitch);
