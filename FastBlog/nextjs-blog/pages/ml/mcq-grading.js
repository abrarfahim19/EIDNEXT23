import React, { useState } from "react";
import Layout from "../../components/Layout";
import { pdfjs, Document, Page } from "react-pdf";
import DirectionalButton from "../../components/Buttons/DirectionalButton.js";
import Spacer from "../../components/Spacer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const scan = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleLeftClick = () => {
    console.log("Left");
  };
  const handleRightClick = () => {
    console.log("Right");
  };
  return (
    <Layout>
      <Document
        file="/dorian.pdf"
        className={"self-center w-full bg-blue-100 flex justify-center"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          renderMode="canvas"
          width={"400"}
          // height={"800"}
          //{/* TailwindCSS not working */}
          className={""}
          pageNumber={10}
        />
      </Document>
      <p className="text-xl">
        {/* TailwindCSS not working */}
        Page {pageNumber} of {numPages}
      </p>
      <DirectionalButton
        disable={pageNumber === 1 ? true : false}
        left={true}
        handleClick={handleLeftClick}
      />
      <Spacer />
      <DirectionalButton
        disable={pageNumber === 1 ? true : false}
        left={false}
        handleClick={handleRightClick}
      />
    </Layout>
  );
};

export default scan;
