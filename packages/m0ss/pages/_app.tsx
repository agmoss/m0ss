import React, { useEffect, useState } from "react";
import { orgSchema, personSchema, websiteSchema } from "../src/data/schemas";

import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { metaData } from "../src/data";
import theme from "../src/theme";

export default function App({ Component, pageProps }: AppProps) {

    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(1);
    }, []);

    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>{metaData.name}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                {/* prettier-ignore */}
                <script type="application/ld+json">{`${JSON.stringify(websiteSchema).trim()}`}</script>
                {/* prettier-ignore */}
                <script type="application/ld+json">{`${JSON.stringify(personSchema).trim()}`}</script>
                {/* prettier-ignore */}
                <script type="application/ld+json">{`${JSON.stringify(orgSchema).trim()}`}</script>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    property="og:title"
                    content={metaData.homePage.title}
                    key="title"
                />
                <meta name="og:type" property="og:type" content={"website"} />
                <meta
                    property="og:image:url"
                    content={metaData.logo}
                    name="og:image:url"
                />
                <meta
                    property="og:image:alt"
                    content={metaData.logo}
                    name="og:image:alt"
                />
                <meta property="og:image" content={metaData.logo} />
                <meta name="og:url" property="og:url" content={metaData.url} />
                <meta
                    name="title"
                    property="title"
                    content={metaData.homePage.title}
                />
                <meta
                    name="og:description"
                    property="og:description"
                    content={metaData.homePage.description}
                />
                <meta
                    name="description"
                    property="description"
                    content={metaData.homePage.description}
                />
            </Head>
            <ThemeProvider theme={theme} key={key}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}
