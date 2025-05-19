// @ts-nocheck
import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import React from "react";

import { Paths } from "../../../utils";

const Root = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginTop: "auto",
    width: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
    "&:hover": {
        background: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    },
}));

export const Footer = () => {
    const router = useRouter();
    return (
        <Root as="footer">
            <Container sx={{ mt: 10, mb: 10 }}>
                <Grid container>
                    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                            spacing={6}
                        >
                            <Grid>
                                <Typography
                                    component="h3"
                                    variant="h3"
                                    color="inherit"
                                    noWrap
                                >
                                    m0ss
                                </Typography>
                            </Grid>
                            <Grid>
                                <ul
                                    style={{
                                        margin: 0,
                                        listStyle: "none",
                                        paddingLeft: 0,
                                    }}
                                >
                                    <li>
                                        <StyledButton
                                            size="large"
                                            href="https://github.com/agmoss/m0ss"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Source
                                        </StyledButton>
                                    </li>
                                    <li>
                                        <StyledButton
                                            size="large"
                                            onClick={() =>
                                                router.push(Paths.README)
                                            }
                                            role="link"
                                        >
                                            README
                                        </StyledButton>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Root>
    );
};
