import React, { useState } from "react";
import Layout from "../../components/Layout";
import { pdfjs, Document, Page } from "react-pdf";
import DirectionalButton from "../../components/Buttons/DirectionalButton.js";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const scan = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log("numPages is", numPages, pageNumber);

  const handleLeftClick = () => {
    if (pageNumber !== 1) setPageNumber((prev) => prev - 1);
  };
  const handleRightClick = () => {
    if (pageNumber !== numPages) setPageNumber((prev) => prev + 1);
  };
  return (
    <Layout>
      <Document
        file="/dorian.pdf"
        className={
          "self-center w-full bg-blue-100 flex relative justify-center"
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          renderMode="canvas"
          // height={"800"}
          height={"800"}
          // scale={2.0}
          className={""}
          pageNumber={pageNumber}
        />
        <div className="absolute flex flex-row bottom-0">
          <DirectionalButton
            disabled={pageNumber === 1 ? true : false}
            left={true}
            handleClick={handleLeftClick}
          />
          <div className="flex justify-center items-center px-3 bg-opacity-50 bg-white">
            <p className="text-xl">
              {/* TailwindCSS not working */}
              {pageNumber} of {numPages}
            </p>
          </div>
          <DirectionalButton
            disabled={pageNumber === numPages ? true : false}
            left={false}
            handleClick={handleRightClick}
          />
        </div>
      </Document>

      {/* <Spacer /> */}
    </Layout>
  );
};

export default scan;
