import { useFormContext } from "../context/FormContext";
import DownloadButton from "../components/DownloadButton";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PortfolioPreview() {
  const { portfolioData } = useFormContext();
  const previewRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(previewRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("portfolio.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Portfolio Preview</h1>
        <DownloadButton onClick={handleDownload} label="Download PDF" />
      </div>

      {/* 👇 Inline styles ensure compatibility with html2canvas */}
      <div
        ref={previewRef}
        className="p-6 rounded-xl shadow space-y-6"
        style={{
          backgroundColor: "#ffffff",
          color: "#1f2937", // Tailwind's gray-800
          fontFamily: "sans-serif",
        }}
      >
        {/* Name and Bio */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{portfolioData.fullName}</h2>
          <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>{portfolioData.bio}</p>
        </div>

        {/* Skills */}
        {portfolioData.skills?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Skills</h3>
            <ul style={{ fontSize: "0.875rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1.5rem", listStyleType: "disc", paddingLeft: "1rem" }}>
              {portfolioData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Projects */}
        {portfolioData.projects?.length > 0 && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Projects</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {portfolioData.projects.map((proj, index) => (
                <div key={index} style={{ border: "1px solid #e5e7eb", borderRadius: "0.5rem", padding: "1rem" }}>
                  <h4 style={{ fontWeight: "500" }}>{proj.title}</h4>
                  <p style={{ fontSize: "0.875rem" }}>{proj.description}</p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4f46e5", fontSize: "0.875rem", textDecoration: "underline" }}
                    >
                      {proj.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        {(portfolioData.socialLinks?.github ||
          portfolioData.socialLinks?.linkedin ||
          portfolioData.socialLinks?.website) && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#047857" }}>Social Links</h3>
            <ul style={{ fontSize: "0.875rem", lineHeight: "1.5rem" }}>
              {portfolioData.socialLinks.github && (
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href={portfolioData.socialLinks.github}
                    style={{ color: "#4f46e5", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolioData.socialLinks.github}
                  </a>
                </li>
              )}
              {portfolioData.socialLinks.linkedin && (
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={portfolioData.socialLinks.linkedin}
                    style={{ color: "#4f46e5", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolioData.socialLinks.linkedin}
                  </a>
                </li>
              )}
              {portfolioData.socialLinks.website && (
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href={portfolioData.socialLinks.website}
                    style={{ color: "#4f46e5", textDecoration: "underline" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolioData.socialLinks.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
