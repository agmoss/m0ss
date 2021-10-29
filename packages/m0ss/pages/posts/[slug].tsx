import { PostDataWithContent, articleSchema, postData } from "@src/data";
import { getPostData, isPostData } from "@src/utils";

import Head from "next/head";
import { Post as PostPage } from "@src/pages";
import React from "react";
import { withPage } from "@src/components/withPage";

const Post = ({ str }: { str: PostDataWithContent | string }) => {
    if (isPostData(str)) {
        return (
            <React.Fragment>
                <Head>
                    <title>{str.slug}</title>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `${JSON.stringify(
                                articleSchema(str)
                            ).trim()}`,
                        }}
                    />
                    <meta property="og:title" content={str.slug} key="title" />
                    <meta name="title" property="title" content={str.slug} />
                    <meta
                        name="og:description"
                        property="og:description"
                        content={str.description}
                    />
                    <meta
                        name="description"
                        property="description"
                        content={str.description}
                    />
                </Head>
                <PostPage str={str.content} />
            </React.Fragment>
        );
    } else {
        throw Error("Not Post Data");
    }
};

export const getStaticPaths = async () => {
    const paths = postData.map((p) => {
        return {
            params: {
                slug: p.slug,
            },
        };
    });

    return Promise.resolve({
        paths,
        fallback: false,
    });
};

interface IParams {
    params: { slug: string };
}

export const getStaticProps = async ({ params }: IParams) => {
    const str = await getPostData({ str: params.slug });
    return {
        props: {
            str,
        },
    };
};

export default withPage(Post);
