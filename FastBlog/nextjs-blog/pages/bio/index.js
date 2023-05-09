import React from "react";
import Layout from "../../components/Layout";

export async function getServerSideProps({ req }) {
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : req.connection.remoteAddress;
  return {
    props: {
      ip,
    },
  };
}

const Bio = ({ ip }) => {
  console.log("The Ip is ,", ip);
  return (
    <Layout>
      <div>Bio</div>;
    </Layout>
  );
};

export default Bio;
