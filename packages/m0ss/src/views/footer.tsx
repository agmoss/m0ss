import {
    Button,
    Container,
    CssBaseline,
    Grid,
    Theme,
    Typography,
    createStyles,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            marginTop: "auto",
            width: "100%",
        },
        container: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10),
        },
        list: {
            margin: 0,
            listStyle: "none",
            paddingLeft: 0,
        },
        button: {
            "&:hover": {
                background: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
            },
        },
    })
);

export const Footer = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <CssBaseline />
            <Typography component="footer" className={classes.root}>
                <Container className={classes.container}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                alignContent="center"
                                spacing={6}
                            >
                                <Grid item>
                                    <Typography
                                        component="h3"
                                        variant="h3"
                                        color="inherit"
                                        noWrap
                                    >
                                        m0ss
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ul className={classes.list}>
                                        <li>
                                            <Button
                                                size="large"
                                                className={classes.button}
                                                href="https://github.com/agmoss/m0ss"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Source
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                size="large"
                                                className={classes.button}
                                                onClick={() =>
                                                    history.push("/README")
                                                }
                                                role="link"
                                            >
                                                README
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                size="large"
                                                className={classes.button}
                                                onClick={() =>
                                                    history.push("/signin")
                                                }
                                                role="link"
                                            >
                                                SIGNIN
                                            </Button>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Typography>
        </>
    );
};
