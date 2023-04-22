import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Determination to beat resistence and love for craft</p>
        <p>
          A machine learning engineer and web developer from Bangladesh trying to make my dent in the world.
        </p>
        <Link href='/posts/first-post'>My First Blog</Link>
      </section>
    </Layout>
  );
}