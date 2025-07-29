const resume = "/public/assets/pdf/Dominic-Esguerra-CV.pdf";

const handleDownload = async (filename = "file.pdf") => {
  try {
    const link = document.createElement("a");
    link.href = resume;
    link.download = filename;
    link.click();
  } catch (error) {
    console.error(`Error downloading pdf: ${error}`);
  }
};

export { handleDownload };
