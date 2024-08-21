"use client";
import { useEffect, useState } from 'react';

const PDFViewer: React.FC = () => {
  const [pdfData, setPdfData] = useState<string | null>(null);

  useEffect(() => {
    const storedPdf = localStorage.getItem('uploadedFile');
    if (storedPdf) {
      const { data } = JSON.parse(storedPdf);
      setPdfData(data);
    }
  }, []);

  return (
    <div className="pdf-viewer ">
      {pdfData ? (
        <iframe
          src={pdfData}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      ) : (
        <p>No PDF found in localStorage</p>
      )}
    </div>
  );
};

export default PDFViewer;
