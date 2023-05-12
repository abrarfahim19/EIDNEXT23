import React, { useState } from "react";
import Layout from "../../components/Layout";
import { pdfjs, Document, Page } from "react-pdf";
import DirectionalButton from "../../components/Buttons/DirectionalButton.js";
import Delimit from "../../components/Delimit";
import Button from "../../components/Button";
import { downloadFile } from "../../lib/commonFunctions";
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
      <h1 className="text-3xl font-bold mb-4">
        A CHEAP AND FAST METHOD OF GRADING OPTICAL MARK RECOGNITION SHEET USING
        IMAGE PROCESSING
      </h1>
      <p className="text-gray-700 text-lg leading-7 mb-6">
        This method is cheaper and faster in grading an OMR sheet than an
        expensive OMR machine. The use of an OMR machine is not practical for
        personal or small-scale use. So we approached to solve the problem with
        the help of computer vision. This method is powered by the modern
        computer vision library OpenCV. We found the edge of the answer sheet
        with Canny Edged Detector and wrapped the perspective with the
        transformation matrix. After that, we were finally able to detect the
        threshold and match the answer sheet with the actual answer. Finally, we
        relay the grade to the OMR sheet. Our proposed method can grade the
        answer sheet in real-time. And a GUI is made to make the task more
        organized. Since the data derived from the paper is more flexible.
      </p>
      <p className="my-5">
        Keywords:
        <Delimit>MCQ</Delimit>,<Delimit>OMR Grading</Delimit>,
        <Delimit>Computer Vision</Delimit>,<Delimit>Image Processing</Delimit>,
        <Delimit>Python</Delimit>, <Delimit>OpenCV</Delimit>,
        <Delimit>Numpy</Delimit>,<Delimit>GUI</Delimit>{" "}
      </p>

      <Button
        title="Download"
        pressHandler={() => downloadFile("/project.pdf")}
      />
      <Document
        file="/project.pdf"
        className={
          "self-center w-full bg-blue-100 flex relative justify-center h-[800px]"
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
