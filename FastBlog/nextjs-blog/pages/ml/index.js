import React from "react";
import Layout from "../../components/Layout";
import fs from 'fs';
import path from 'path';
import Link from "next/link";
import { convertHyphenatedString } from "../../lib/commonFunctions";

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), 'pages', 'ml');
  const filenames = await fs.promises.readdir(dirPath);
  return {
    props: {
      filenames,
    },
  };
}

const ML = ({filenames}) => {
  let pagesList = filenames;
  const index = pagesList.indexOf("index.js");
  if (index>-1){
    pagesList = filenames.splice(index,1);
  }

  return (
    <Layout>
      <div>
        <h3 className="text-xl font-bold">
          Lists of ML
        </h3>
        {pagesList.map((item)=> {return (
          <Link href={`ml/${item.slice(0,-3)}`}><h1>{convertHyphenatedString(item.slice(0,-3))}</h1></Link>
        )})}
      </div>;

    </Layout>
  );
};

export default ML;
