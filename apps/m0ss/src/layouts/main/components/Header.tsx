import { IconButton } from "@m0ss/core";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import {
    Apps,
    Brightness4,
    Brightness7,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import { PaletteMode } from "@mui/material";

interface IHeader {
    themeToggler: () => void;
    themeMode: PaletteMode;
}

export const Header = ({ themeMode, themeToggler }: IHeader) => {
    const router = useRouter();

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <div
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => {
                            router.push("/");
                        }}
                        onKeyPress={() => {
                            router.push("/");
                        }}
                        style={{
                            flex: 1,
                            textDecoration: "none",
                            outline: 0,
                            cursor: "pointer",
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h4"
                            noWrap
                            sx={{ color: "primary.main" }}
                        >
                            m0ss
                        </Typography>
                    </div>
                    <IconButton onClick={() => themeToggler()}>
                        {themeMode === "dark" ? (
                            <Brightness7 />
                        ) : (
                            <Brightness4 />
                        )}
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            router.push("/posts");
                        }}
                    >
                        <Apps />
                    </IconButton>
                    <Link
                        href="https://github.com/agmoss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/agmoss/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
