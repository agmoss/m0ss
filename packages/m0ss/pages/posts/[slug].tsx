import withPage from "../../src/components/withPage";
import { getPostData } from "../../src/utils/getData";
import PostPage from "../../src/pages/Post";
import { IStr, postData } from "../../src/data";

const Post = ({ str }: IStr) => <PostPage str={str} />;

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
    params: {slug:string};
}

export const getStaticProps = async ({ params }: IParams) => {
    const str = await getPostData({str:params.slug});
    return {
        props: {
            str,
        },
    };
};

export default withPage(Post);
