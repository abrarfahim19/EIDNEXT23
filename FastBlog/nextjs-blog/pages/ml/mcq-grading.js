import React, { useState } from "react";
import Layout from "../../components/Layout";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const scan = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Layout>
      <h1>Hello</h1>
      <Document file="/dorian.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          renderMode="canvas"
          width={"500"}
          height={"800"}
          //{/* TailwindCSS not working */}
          className={"w-100"}
          pageNumber={10}
        />
      </Document>
      <p className="text-7xl">
        {/* TailwindCSS not working */}
        Page {pageNumber} of {numPages}
      </p>
    </Layout>
  );
};

export default scan;
