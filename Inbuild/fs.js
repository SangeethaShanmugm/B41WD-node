const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart🥳🥳";

// fs.writeFile("./awesome.txt", quote, (err) => {
//   console.log("Completed writing awesome.txt");
// });

//Task
//Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
//....
// text-10.html

// const quote2 = "Live more, worry less🥳🥳🥳";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing text-${i}.html`);
//   });
// }

//Task 2
//node fs.js 20  -> 20 files to be created / text-1.html ... text-20.html

// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles);
// console.log(process.argv);
// const quote3 = "Happy Pongal";
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/file-${i}.html`, quote3, (err) => {
//     console.log(`Completed writing file-${i}.html`);
//   });
// }

// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error❌", err);
//   } else {
//     console.log("The content of the file is:", data);
//   }
// });

// const niceQuote = "\nMake everyday a little less ordinary😉";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names:", files);
// });

fs.readdir("./backup", (err, data) => {
  data.forEach((fileName) => {
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted Successfully", fileName);
    });
  });
});

//Task
//node fs.js 20  -> 20 files to be created / , file1.html, file2.html, file3.html .... file20.html
//content - append