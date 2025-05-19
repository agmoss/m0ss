// @ts-nocheck
import "aos/dist/aos.css";

import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../createEmotionCache";

import { metaData, orgSchema, personSchema, websiteSchema } from "../data";
import { Main } from "../layouts/main";
import { withLayout } from "../layouts/main/withLayout";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>{metaData.name}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `${JSON.stringify(websiteSchema).trim()}`,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `${JSON.stringify(personSchema).trim()}`,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `${JSON.stringify(orgSchema).trim()}`,
                    }}
                />
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
            <Component {...pageProps} />
        </CacheProvider>
    );
};

export default withLayout({ Layout: Main })(App);
