import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import {TiSocialLinkedinCircular} from "react-icons/ti";
import {VscGithub} from "react-icons/vsc";
import {AiFillLinkedin} from "react-icons/ai";
import {TfiTwitter} from "react-icons/tfi";
import {AiFillMail} from "react-icons/ai";
import Link from "next/link";
// export async function getServerSideProps({ req }) {
//   const forwarded = req.headers["x-forwarded-for"];
//   const ip = forwarded
//     ? forwarded.split(/, /)[0]
//     : req.connection.remoteAddress;
//   return {
//     props: {
//       ip,
//     },
//   };
// }

const Bio = () => {
  // console.log("Loading IP...");
  // console.log("The Ip is ,", ip);
  return (
    <Layout>
      <div className="justify-center grid grid-cols-12 gap-3">
        <div className="md:col-span-6 col-span-12 bg-blue-50 shadow-md rounded-xl">
          <p className="p-5 font-mono text-justify">Hello! I am a software engineer with one year of experience, specializing in Python, React ecosystem, and data analysis, with a strong understanding of machine learning algorithms.</p>
        </div>
        <div className="md:col-span-6 col-span-12 flex justify-center">
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
            <Image src="/images/profileImage.jpg" width={150} height={150} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">Abrar Fahim</h2>
                <p className="px-5 text-xs sm:text-base dark:text-gray-400">ML Engineer</p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a rel="noopener noreferrer" target="blank" href="https://github.com/abrarfahim19" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <p className="text-lg ">
                <VscGithub/>
                  </p>
                </a>
                <a rel="noopener noreferrer" target="blank" href="https://linkedin.com/in/imabrar" aria-label="LinkedIn" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <p className="text-xl ">
                <AiFillLinkedin/>
                  </p>
                </a>
                <a rel="noopener noreferrer" target="blank" href="https://twitter.com/fahim_patwari" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <p className="text-xl ">
                <TfiTwitter/>
                  </p>
                </a>
                <Link rel="noopener noreferrer" href="/contact" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <p className="text-xl ">
                <AiFillMail/>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bio;
