import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { IStr, metaData } from "../../data";
import { getText } from "@m0ss/utils";
import { _ProjectReadme } from "../../views";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            str: pipe(
                await getText(metaData.readmeLink),
                E.fold(
                    (_l) => "error",
                    (r) => r
                )
            ),
        },
    };
};

const ReadmePage = ({ str }: IStr) => {
    return (
        <React.Fragment>
            <Head>
                <title>{metaData.readme.title}</title>
                <meta
                    property="og:title"
                    content={metaData.readme.title}
                    key="title"
                />
                <meta
                    name="title"
                    property="title"
                    content={metaData.readme.title}
                />
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
            <_ProjectReadme str={str} />
        </React.Fragment>
    );
};

export default ReadmePage;
