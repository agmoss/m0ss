import { IPageMeta, PostData, metaData, postData } from "@src/data";

import Head from "next/head";
import { Posts } from "@src/pages";
import React from "react";
import { withPage } from "@src/components";

export const getStaticProps = async (context: any) => {
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
    meta: IPageMeta;
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

export default withPage(PostsWithMeta);
