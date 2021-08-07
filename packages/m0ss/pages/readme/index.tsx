import React from "react";
import Head from "next/head";

import ProjectReadme from "../../src/pages/ProjectReadMe";
import { getText } from "../../src/utils/getData";
import withPage from "../../src/components/withPage";
import {  metaData } from "../../src/data";

export async function getStaticProps(context: any) {
    const md = await getText(
        "https://raw.githubusercontent.com/agmoss/m0ss/master/README.md"
    );
    return {
        props: { md: md },
    };
}

interface IProjectReadMe {
    md: string;
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
