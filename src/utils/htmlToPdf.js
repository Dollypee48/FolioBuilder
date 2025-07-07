// utils/htmlToPdf.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const htmlToPdf = async (elementRef, filename = "document.pdf") => {
  if (!elementRef?.current) return;

  const canvas = await html2canvas(elementRef.current, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(filename);
};
