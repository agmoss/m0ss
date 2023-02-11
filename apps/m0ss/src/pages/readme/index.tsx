import { withPage } from "../../components/withPage";
import { IStr, metaData } from "../../data";
import { ProjectReadme } from "../../views";
import { getText } from "../../utils";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

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
            <ProjectReadme str={str} />
        </React.Fragment>
    );
};

export default withPage(ReadmePage);
