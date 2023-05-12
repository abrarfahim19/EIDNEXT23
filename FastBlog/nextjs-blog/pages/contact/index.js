import React, { useState, useRef } from "react";
import Layout from "../../components/Layout";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import openInNewTab, { callNumber } from "../../lib/commonFunctions";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  // const templateParams = {
  //   user_name: "James",
  //   message: "Check this out!",
  //   user_emai: "James",
  // };
  console.log("Data");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vknniih",
        "template_qmxplwm",
        form.current,
        "Dzu577HrTE6mqSTXw"
      )
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
        }
      });
    e.target.reset();
    toast("Message is sent!");
  };
  // const notify = () => toast("Wow so easy !");
  return (
    <Layout>
      <div className="container mb-24 mt-5 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        {/* <Button title="Go" pressHandler={notify} /> */}
        <section className="mb-32 text-center text-gray-800">
          <div className="max-w-[700px] mx-auto px-3 lg:px-6">
            <h2 className="text-3xl font-bold mb-12">Contact Me!</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                  name="from_name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  name="user_email"
                  className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              {/* <div className="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                  checked
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div> */}
              <button
                type="submit"
                className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </section>
        <section className="flex justify-around">
          <div
            className="h-20 w-20 cursor-pointer hover:cursor-pointer bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => openInNewTab("https://github.com/abrarfahim19")}
          >
            <div className="">
              <VscGithubInverted className="text-3xl" />
            </div>
            <p className="mt-2 text-sm ?leading-5 font-semibold text-center">
              Github
            </p>
          </div>
          <div
            className="h-20 w-20 cursor-pointer hover:cursor-pointer bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => openInNewTab("https://linkedin.com/in/imabrar")}
          >
            <div className="">
              <BsLinkedin className="text-3xl" />
            </div>
            <p className="mt-2 text-sm ?leading-5 font-semibold text-center">
              LinkedIn
            </p>
          </div>
          <div
            className="h-20 w-20 cursor-pointer hover:cursor-pointer bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => openInNewTab("https://twitter.com/fahim_patwari")}
          >
            <div className="">
              <VscTwitter className="text-3xl " />
            </div>
            <p className="mt-2 text-sm ?leading-5 font-semibold text-center">
              Twitter
            </p>
          </div>
          <div
            className="h-20 w-20 cursor-pointer hover:cursor-pointer bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => callNumber("+8801627038567")}
          >
            <div className="">
              <IoLogoWhatsapp className="text-3xl" />
            </div>
            <p className="mt-2 text-sm ?leading-5 font-semibold text-center">
              Whatsapp
            </p>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Contact;
