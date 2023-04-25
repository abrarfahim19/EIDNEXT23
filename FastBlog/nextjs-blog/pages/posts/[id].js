import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostsId, getPostData } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css';
import Date from "../../components/Date";

export async function getStaticPaths() {
    const paths = getAllPostsId();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

const Post = ({ postData }) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export default Post;