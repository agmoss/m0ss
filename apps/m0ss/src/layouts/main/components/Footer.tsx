"use client";

import {
    Button,
    Container,
    Grid,
    Typography,
    Box,
    Link,
    Divider,
    TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { GitHub, LinkedIn, Twitter, Send } from "@mui/icons-material";
import { StyledIconButton } from "@m0ss/core";

const Root = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginTop: "auto",
    width: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(6),
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    "&:hover": {
        background: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    },
}));

const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    transition: "color 0.2s",
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover": {
        color: theme.palette.secondary.main,
        textDecoration: "none",
    },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(3),
    fontWeight: 600,
}));

const FooterTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: theme.shape.borderRadius,
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "transparent",
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.contrastText,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.contrastText,
        },
    },
    "& input": {
        color: theme.palette.primary.contrastText,
    },
}));

export const Footer = () => {
    const router = useRouter();
    const currentYear = new Date().getFullYear();

    return (
        <Root>
            <Container>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography
                            component="h3"
                            variant="h4"
                            color="primary.contrastText"
                            sx={{ fontWeight: 700, mb: 3 }}
                        >
                            m0ss
                        </Typography>
                        <Typography
                            color="primary.contrastText"
                            variant="body2"
                            sx={{ mb: 3, opacity: 0.8 }}
                        >
                            Software developer with a focus on web applications,
                            infrastructure, data visualization, and creative
                            programming.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Link
                                href="https://github.com/agmoss"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledIconButton
                                    sx={{ color: "primary.contrastText" }}
                                >
                                    <GitHub />
                                </StyledIconButton>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/agmoss/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledIconButton
                                    sx={{ color: "primary.contrastText" }}
                                >
                                    <LinkedIn />
                                </StyledIconButton>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <StyledIconButton
                                    sx={{ color: "primary.contrastText" }}
                                >
                                    <Twitter />
                                </StyledIconButton>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Typography
                        color="primary.contrastText"
                        variant="body2"
                        sx={{ opacity: 0.8 }}
                    >
                        © {currentYear} Andrew Moss. All rights reserved.
                    </Typography>
                    <Box>
                        <Link
                            href="https://github.com/agmoss/m0ss"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: "none" }}
                        >
                            <StyledButton
                                variant="outlined"
                                size="small"
                                sx={{ mr: 1 }}
                            >
                                View Source
                            </StyledButton>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Root>
    );
};
