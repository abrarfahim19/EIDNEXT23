import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { AiFillMail } from "react-icons/ai";
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
      <section className=" ">
        <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
          <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2022</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Joined Swop Technologies as Software Engineer</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">Contributed to the development and implementation of Swop Technologies' innovative digital identity and cryptocurrency management solutions.</p>
                  <p className="ml-7 dark:text-gray-400">Utilized React Native ecosystem to build robust and user-friendly features for the Swop mobile application.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Graduated on Applied Mathematics</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">It took long due to COVID-19. Finally completed my BSc with knowledge, experience and friends.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2020</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Learn Web Development</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">The world tries to cope with current turn of event and adapt to its need Its high time I pick up some digital skill.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">COVID and Life</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">I was going to graduate this year. But unexpected turn of event. Made me re-evaluate the way of life</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2018</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Joined Lead Bangladesh</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">Started working as part time Motion Graphic Designer.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2017</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Restarted My Graduation</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">After the surgery I resumed my BSc programme in Applied Mathematics</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2016</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Unfit to Join Navy due to accuity in my Right Eye</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">The operation was a success but to join the navy I needed 20/20 vision.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Eye Surgery</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">Had to lie down on the OT for Keratoconus on my right eye.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Rare Viral Dissease on My Right Eye</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">During final medical checkup I was diagnosed with keratoconus.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Selected to Join Bangladesh Navy</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">Got green card from ISSB.</p>
                </li>
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Started BSc in Applied Mathematics</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">Sat through several public exam. And got addmission in Department of Applied Mathematics.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2008</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">Scout Jumbooree Running Shield</h4>
                  </div>
                  <p className="ml-7 dark:text-gray-400">1300+ scouts participated in 8th National Scout Jumbooree in Mochak Bangladesh. Scouts from SARC countries (India, Pakistan, Srilanka, Nepal, Bhutan) joined the event. Our team got to be the proud winner of the Sheild Winner. It was a team effort.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
                    <VscGithub />
                  </p>
                </a>
                <a rel="noopener noreferrer" target="blank" href="https://linkedin.com/in/imabrar" aria-label="LinkedIn" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <p className="text-xl ">
                    <AiFillLinkedin />
                  </p>
                </a>
                <a rel="noopener noreferrer" target="blank" href="https://twitter.com/fahim_patwari" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <p className="text-xl ">
                    <TfiTwitter />
                  </p>
                </a>
                <Link rel="noopener noreferrer" href="/contact" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                  <p className="text-xl ">
                    <AiFillMail />
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
