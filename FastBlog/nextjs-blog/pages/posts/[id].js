import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostsId, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
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
      postData,
    },
  };
}

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel="stylesheet"
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <article
          className="prose lg:prose-l m-auto my-1 sm:my-10"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  */}
      </article>
    </Layout>
  );
};

export default Post;
