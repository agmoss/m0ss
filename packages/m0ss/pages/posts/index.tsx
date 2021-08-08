import withPage from "../../src/components/withPage";
import { postData } from "../../src/data";
import Posts from "../../src/pages/Posts";

export const getStaticProps = async (context: any) => {
    return Promise.resolve({
        props: {
            data: postData,
        },
    });
};

export default withPage(Posts);
