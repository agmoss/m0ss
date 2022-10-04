import { withPage } from "@src/components/withPage";
import { articleSchema, postData, PostDataWithContent } from "@src/data";
import { Post as PostPage } from "@src/pages";
import { getPostData, isPostData } from "@src/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

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

export const getStaticPaths: GetStaticPaths = async () => {
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

type IParams = {
    params: { slug: string };
};

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const str = await getPostData({ str: context.params!!.slug as string });
        return {
            props: {
                str,
            },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

export default withPage(Post);
