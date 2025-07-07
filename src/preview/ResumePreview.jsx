import { useFormContext } from "../context/FormContext";
import DownloadButton from "../components/DownloadButton";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumePreview() {
  const { resumeData } = useFormContext();
  const resumeRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(resumeRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Resume Preview</h1>
        <DownloadButton onClick={handleDownload} label="Download PDF" />
      </div>

      
      <div
        ref={resumeRef}
        className="p-6 rounded-xl shadow-md space-y-6"
        style={{
          backgroundColor: "#ffffff",
          color: "#1f2937", 
          fontFamily: "sans-serif",
        }}
      >
  
        <div>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{resumeData.fullName}</h2>
          <p style={{ fontSize: "0.875rem" }}>{resumeData.email} | {resumeData.phone}</p>
        </div>

       
        {resumeData.summary && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Summary</h3>
            <p style={{ fontSize: "0.875rem" }}>{resumeData.summary}</p>
          </div>
        )}

       
        {resumeData.skills?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Skills</h3>
            <ul
              style={{
                fontSize: "0.875rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 1.5rem",
                listStyleType: "disc",
                paddingLeft: "1rem",
              }}
            >
              {resumeData.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

       
        {resumeData.experience?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Work Experience</h3>
            {resumeData.experience.map((item, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <p style={{ fontWeight: "500" }}>{item.role} at {item.company}</p>
                <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{item.duration}</p>
                <p style={{ fontSize: "0.875rem" }}>{item.description}</p>
              </div>
            ))}
          </div>
        )}

       
        {resumeData.education?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Education</h3>
            {resumeData.education.map((edu, i) => (
              <div key={i} style={{ marginBottom: "0.5rem" }}>
                <p style={{ fontWeight: "500" }}>{edu.degree} — {edu.school}</p>
                <p style={{ fontSize: "0.875rem", fontStyle: "italic" }}>{edu.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
