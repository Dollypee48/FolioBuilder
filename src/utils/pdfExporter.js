import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportToPDF = async (elementId, fileName = "document.pdf") => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error("Element not found:", elementId);
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  } catch (err) {
    console.error("PDF export failed:", err);
  }
};
