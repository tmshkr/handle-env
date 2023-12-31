const fs = require("fs");
const path = require("path");

const { INPUT_ENV, INPUT_FILENAME, GITHUB_WORKSPACE } = process.env;

try {
  const filepath = path.join(GITHUB_WORKSPACE, INPUT_FILENAME);
  if (fs.existsSync(filepath)) {
    console.log(`${INPUT_FILENAME} already exists. Appending...`);
    fs.appendFileSync(filepath, "\n" + INPUT_ENV);
    console.log(`Updated ${filepath}`);
  } else {
    console.log(`Creating ${INPUT_FILENAME}`);
    fs.writeFileSync(filepath, INPUT_ENV);
    console.log(`Created ${filepath}`);
  }
} catch (error) {
  console.error(`There was an error creating ${filepath}`);
  throw error;
}
