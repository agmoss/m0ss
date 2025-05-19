import { IconButton } from "@m0ss/core";
import {
    AppBar,
    Container,
    Link,
    SvgIcon,
    Toolbar,
    Typography,
} from "@mui/material";
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
        <div>
            <AppBar
                sx={{ bgcolor: "background.default", pb: 2 }}
                position="fixed"
                elevation={0}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ mb: 2 }}>
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
                                color: "primary.main",
                                flex: 1,
                                textDecoration: "none",
                                outline: 0,
                                cursor: "pointer",
                            }}
                        >
                            <Typography component="h1" variant="h4" noWrap>
                                m0ss
                            </Typography>
                        </div>
                        <IconButton onClick={() => themeToggler()}>
                            {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                router.push("/posts");
                            }}
                        >
                            <Apps />
                        </IconButton>
                        <Link
                            href="https://www.npmjs.com/~agmoss"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                "& button:hover rect": { fill: "white" },
                                "& button:hover polygon": { fill: "primary.main" },
                            }}
                        >
                            <IconButton>
                                <SvgIcon>
                                    <svg viewBox="0 0 27.23 27.23">
                                        <rect fill="#fff" width="27.23" height="27.23" rx="2" />
                                        <polygon
                                            fill="rgba(0, 0, 0, 0.54)"
                                            points="5.8 21.75 13.66 21.75 13.679.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
                                        />
                                    </svg>
                                </SvgIcon>
                            </IconButton>
                        </Link>
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
            <Toolbar />
        </div>
    );
};
