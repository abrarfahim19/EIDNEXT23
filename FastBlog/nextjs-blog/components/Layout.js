import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Abrar Fahim";
export const siteTitle = `Abrars' Dojo`;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Abrar Fahim is a machine learning engineer/web developer from Bangladesh. He aspires to be best at his craft. And strives to share his knowledge with the world."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profileImage.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
            <nav className="m-4 w-full flex justify-center items-center">
              <Link href="/posts">
                <p className="text-gray-900 hover:text-blue-500 px-4 font-semibold py-2">
                  Blog
                </p>
              </Link>
              <Link href="/ml">
                <p className="text-gray-900 hover:text-blue-500 px-4 font-semibold py-2">
                  ML
                </p>
              </Link>
              <Link href="/bio">
                <p className="text-gray-900 hover:text-blue-500 px-4 font-semibold py-2">
                  Bio
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-900 hover:text-blue-500 px-4 font-semibold py-2">
                  Contact
                </p>
              </Link>
            </nav>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profileImage.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
