import Head from "next/head";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import Date from "../../components/Date";
import Delimit from "../../components/Delimit";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  // console.log("allPostsData", allPostsData);
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className="text-3xl font-bold mb-4">Welcome to my Blogs</h1>
        <p className="text-gray-700 text-lg leading-7 mb-6">
          Hello there, <br /> I write about{" "}
          <Delimit> ML | React | React Native | Mathematics </Delimit>
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
