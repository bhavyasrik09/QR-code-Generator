import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {message: "Type in your URL:",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
