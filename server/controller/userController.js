// pdfExport
const extractTextFromPage = require("../utils/pdfExport");

const fs = require("fs");
const path = require("path");

const directoryPath = "./novel/godleveldemon/exportpdf/";

const countFilesInDirectory = (dir) => {
  try {
    const files = fs.readdirSync(dir);
    return files.filter((file) => fs.statSync(path.join(dir, file)).isFile())
      .length;
  } catch (error) {
    console.error("Error reading directory:", error.message);
    return -1; // or throw an error
  }
};

const getPDFText = async (req, res) => {
  const { id } = req.params;
  extractTextFromPage(`${directoryPath}/CH0001-500 ${id}.pdf`)
    .then((result) => {
      res.json({
        message: result.text,
        totalPages: countFilesInDirectory(directoryPath),
      });
    })
    .catch((error) => {
      console.error("Error extracting text:", error.message);
    });
};

module.exports = { getPDFText };
