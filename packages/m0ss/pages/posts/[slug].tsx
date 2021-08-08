import withPage from "../../src/components/withPage";
import { getPostData, isPostData } from "../../src/utils/getData";
import PostPage from "../../src/pages/Post";
import { postData, PostDataWithContent } from "../../src/data";
import React from "react";
import Head from "next/head";
import { articleSchema } from "../../src/data/schemas";

const Post = ({ str }: { str: PostDataWithContent | string }) => {
    if (isPostData(str)) {
        return (
            <React.Fragment>
                <Head>
                    <title>{str.slug}</title>
                    {/* prettier-ignore */}
                    <script type="application/ld+json">{`${JSON.stringify(articleSchema(str)).trim()}`}</script>
                    <link rel="icon" href="/favicon.ico" />
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
