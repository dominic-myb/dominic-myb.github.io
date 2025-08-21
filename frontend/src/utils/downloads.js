/**
 * Downloads a file from the specified URL and saves it with the given filename.
 *
 * @param {Object} options
 * @param {string} options.url - The URL of the file to download.
 * @param {string} [options.filename="file.pdf"] - The desired name for the downloaded file.
 */
const handleDownload = async ({ url, filename }) => {
  try {
    if (!url || typeof url !== "string") {
      console.error("Invalid URL provided for download.");
      return;
    }
    const finalFilename = filename || url.split("/").pop() || "file.pdf";
    const link = document.createElement("a");

    link.href = url;
    link.download = finalFilename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error(`Error downloading pdf: ${error}`);
  }
}

export { handleDownload };
