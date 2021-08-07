import * as E from "fp-ts/lib/Either";

import ProjectReadme, { IProjectReadMe } from "../../src/pages/ProjectReadMe";

import Head from "next/head";
import React from "react";
import { getText } from "../../src/utils/getData";
import { metaData } from "../../src/data";
import { pipe } from "fp-ts/lib/function";
import withPage from "../../src/components/withPage";

export async function getStaticProps(context: any) {

    const md = pipe(
        await getText(metaData.readmeLink),
        E.fold(
            (_l) => "error",
            (r) => r
        )
    );

    return {
        props: { md: md },
    };
}

function ReadmePage({ md }: IProjectReadMe) {
    return (
        <React.Fragment>
            <Head>
                <title>{metaData.readme.title}</title>
                <meta property="og:title" content={metaData.readme.title} key="title" />
                <meta name="title" property="title" content={metaData.readme.title} />
                <meta
                    name="og:description"
                    property="og:description"
                    content={metaData.readme.description}
                />
                <meta
                    name="description"
                    property="description"
                    content={metaData.readme.description}
                />
            </Head>
            <ProjectReadme md={md} />
        </React.Fragment>
    );
}

export default withPage(ReadmePage);
