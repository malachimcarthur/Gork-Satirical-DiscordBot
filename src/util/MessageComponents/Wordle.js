const fs = require("node:fs");
const { wordleFailMessage } = require("./Content/Wordle/Fail/prompts");
const failFiles = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/Fail/GIFS"
);
const { wordle1Message } = require("./Content/Wordle/In1/prompts");
const wordle1Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In1/GIFS"
);
const { wordle2Message } = require("./Content/Wordle/In2/prompts");
const wordle2Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In2/GIFS"
);
const { wordle3Message } = require("./Content/Wordle/In3/prompts");
const wordle3Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In3/GIFS"
);
const { wordle4Message } = require("./Content/Wordle/In4/prompts");
const wordle4Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In4/GIFS"
);
const { wordle5Message } = require("./Content/Wordle/In5/prompts");
const wordle5Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In5/GIFS"
);
const { wordle6Message } = require("./Content/Wordle/In6/prompts");
const wordle6Files = fs.readdirSync(
  "./src/util/MessageComponents/Content/Wordle/In6/GIFS"
);
const { CreateFile } = require("./CreateFile");
const { getRandomIntInclusive } = require("../randomValues");
function Wordle(int, userId) {
  if (int == "" || int.valueOf() > 6 || int.valueOf <= 0) {
    int = "Fail";
  }
  switch (int) {
    case "1":
      return {
        content: wordle1Message(userId),
        files: [
          CreateFile(
            "Wordle/In1/GIFS",
            wordle1Files.at(getRandomIntInclusive(wordle1Files.length - 1))
          ),
        ],
      };
    case "2":
      return {
        content: wordle2Message(userId),
        files: [
          CreateFile(
            "Wordle/In2/GIFS",
            wordle2Files.at(getRandomIntInclusive(wordle2Files.length - 1))
          ),
        ],
      };
    case "3":
      return {
        content: wordle3Message(userId),
        files: [
          CreateFile(
            "Wordle/In3/GIFS",
            wordle3Files.at(getRandomIntInclusive(wordle3Files.length - 1))
          ),
        ],
      };
    case "4":
      return {
        content: wordle4Message(userId),
        files: [
          CreateFile(
            "Wordle/In4/GIFS",
            wordle4Files.at(getRandomIntInclusive(wordle4Files.length - 1))
          ),
        ],
      };
    case "5":
      return {
        content: wordle5Message(userId),
        files: [
          CreateFile(
            "Wordle/In5/GIFS",
            wordle5Files.at(getRandomIntInclusive(wordle5Files.length - 1))
          ),
        ],
      };
    case "6":
      return {
        content: wordle6Message(userId),
        files: [
          CreateFile(
            "Wordle/In6/GIFS",
            wordle6Files.at(getRandomIntInclusive(wordle6Files.length - 1))
          ),
        ],
      };
    default:
      return {
        content: wordleFailMessage(userId),
        files: [
          CreateFile(
            "Wordle/Fail/GIFS",
            failFiles.at(getRandomIntInclusive(failFiles.length - 1))
          ),
        ],
      };
  }
}
module.exports = { Wordle };
