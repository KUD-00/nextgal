import fs from 'fs';

export function getAllGameIdAndChapterIds() {
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
}

export function getGameData(id) {
  return require(`../games/${id}.json`);
}


export function getAllGameIds() {
  const fileNames = fs.readdirSync("games");
  return fileNames.map((fileName) => {
    return {
      params: {
        gameID: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getGameShowCaseData(id) {
  return require(`../games/${id}.json`)
}
