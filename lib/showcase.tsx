import fs from 'fs';

export function getAllGameIds() {
  const fileNames = fs.readdirSync("games");
  var arr = []

  fileNames.map((fileName) => {
    const data = require(`../games/${fileName}`);
    const num_of_chapters = data.number_of_chapters;
    Array(num_of_chapters).fill(0).map((_, i) => {
      arr.push({
        params: {
          gameID: fileName.replace(/\.json$/, ''),
          chapterID: i.toString()
        }
      })
    })
  });

  return arr

//   return  fileNames.map((fileName) => {
//     const data = require(`../games/${fileName}`);
//     const num_of_chapters = data.numbers_of_chapters;
//     return Array(num_of_chapters).fill(0).map((_, i) => {
//       return {
//         params: {
//           gameID: fileName.replace(/\.json$/, ''),
//           chapterID: i.toString()
//         }
//       }
//     });
//   });
// }
}

export function getGameShowCaseData(id) {
  // import data from `../games/${id}.json`
  return require(`../games/${id}.json`);
}
