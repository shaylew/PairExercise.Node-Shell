const fs = require("fs");

function cat(filename) {
  fs.readFile(filename, "utf8", (error, data) => {
    if (error) {
      throw error;
    }

    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
  });
}

module.exports = cat;
