import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

import { metaData, PageMeta, PostData, postData } from "../../data";
import { Main } from "../../layouts/main";
import { withLayout } from "../../layouts/main/withLayout";
import { Posts } from "../../views";

export const getStaticProps: GetStaticProps = async (_context) => {
    return Promise.resolve({
        props: {
            data: postData,
            meta: metaData.posts,
        },
    });
};

const PostsWithMeta = ({
    data,
    meta,
}: {
    data: PostData[];
    meta: PageMeta;
}) => {
    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>
                <meta property="og:title" content={meta.title} key="title" />
                <meta name="title" property="title" content={meta.title} />
                <meta
                    name="og:description"
                    property="og:description"
                    content={meta.description}
                />
                <meta
                    name="description"
                    property="description"
                    content={meta.description}
                />
            </Head>
            <Posts data={data} />
        </React.Fragment>
    );
};

export default withLayout({ Layout: Main })(PostsWithMeta);
