// Created a file using fs module and async/await.

const fs = require("fs");

async function createFile() {
  try {
    const fileName = "example.txt";
    const fileContent = "This is the content of the file.";

    await fs.promises.writeFile(fileName, fileContent);

    console.log(`File '${fileName}' has been created.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

createFile();
