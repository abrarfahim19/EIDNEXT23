import Layout from "../../components/Layout";
import { getAllPostsId, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
    const paths = getAllPostsId();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

const Post = ({ postData }) => {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    );
}

export default Post;