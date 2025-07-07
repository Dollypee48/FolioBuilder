import { useFormContext } from "../context/FormContext";
import DownloadButton from "../components/DownloadButton";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function CvPreview() {
  const { cvData } = useFormContext();
  const cvRef = useRef();

  const handleDownload = async () => {
    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">CV Preview</h1>
        <DownloadButton onClick={handleDownload} label="Download PDF" />
      </div>

      {/* 👇 Style updated to use inline colors for compatibility */}
      <div
        ref={cvRef}
        className="p-6 rounded-xl shadow space-y-6"
        style={{
          backgroundColor: "#ffffff", // plain white
          color: "#1f2937",           // Tailwind gray-800
          fontFamily: "sans-serif",
        }}
      >
        {/* Personal Info */}
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{cvData.fullName}</h2>
          <p>{cvData.email} | {cvData.phone}</p>
        </div>

        {/* Profile */}
        {cvData.profile && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Profile</h3>
            <p style={{ fontSize: "0.875rem" }}>{cvData.profile}</p>
          </div>
        )}

        {/* Work History */}
        {cvData.workHistory?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Work History</h3>
            {cvData.workHistory.map((item, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: "500" }}>{item.position} at {item.organization}</p>
                <p style={{ fontStyle: "italic", fontSize: "0.875rem" }}>{item.duration}</p>
                <p style={{ fontSize: "0.875rem" }}>{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {cvData.education?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Education</h3>
            {cvData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: "0.5rem" }}>
                <p style={{ fontWeight: "500" }}>{edu.degree} — {edu.institution}</p>
                <p style={{ fontStyle: "italic", fontSize: "0.875rem" }}>{edu.year}</p>
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {cvData.publications?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Publications</h3>
            <ul style={{ paddingLeft: "1.25rem", fontSize: "0.875rem" }}>
              {cvData.publications.map((pub, index) => (
                <li key={index}>{pub}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
