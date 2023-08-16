const pdf = require("pdf-parse");

const extractTextFromPage = (filePath, pageNumber) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Fetch general data about the PDF
      const data = await pdf(filePath);

      if (!data.text || typeof data.text !== "string") {
        throw new Error(
          "PDF does not contain text data or the library structure has changed."
        );
      }

      // Ensure pageNumber is a valid integer and within the page range
      // if (
      //   !Number.isInteger(pageNumber) ||
      //   pageNumber < 1 ||
      //   pageNumber > data.numpages
      // ) {
      //   throw new Error("Invalid page number");
      // }

      // Extract text from the specific page
      // const pageData = await pdf(filePath, { pageNumber: pageNumber });

      // if (!pageData || !pageData.text) {
      //   throw new Error("Failed to extract text from the specified page.");
      // }

      resolve({
        text: data.text,
        totalPages: data.numpages,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = extractTextFromPage;
