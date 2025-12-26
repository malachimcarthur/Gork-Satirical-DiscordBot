const {
  FactCheck,
} = require("../util/MessageComponents/booleanChecks/FactCheck.js");
const { client } = require("../util/client.js");
const {
  JAX_ID,
  ORANGE_SERVER_ID,
  ORANGE_TXTCHANEL_ID,
} = require("../util/constants.js");
const { getRandomIntInclusive } = require("../util/randomValues.js");
const {
  generalPrompts,
} = require("../util/MessageComponents/Content/prompts/generalPrompts.js");
const {
  questionprompts,
} = require("../util/MessageComponents/Content/prompts/questionPrompts.js");
const {
  specialPrompts,
  triggers,
} = require("../util/MessageComponents/Content/prompts/specialPrompts.js");
const { Wordle } = require("../util/MessageComponents/Wordle.js");
const {
  GorkMisspell,
} = require("../util/MessageComponents/booleanChecks/GorkMisspell.js");
const {
  CensorCheck,
} = require("../util/MessageComponents/booleanChecks/CensorCheck.js");
const {
  GeneralCheck,
} = require("../util/MessageComponents/booleanChecks/GeneralCheck.js");
const { CreateFile } = require("../util/MessageComponents/CreateFile.js");
const fs = require("node:fs");

async function MessageCreate(msg) {
  // Only reply in this function
  var botId = `<@${client.user.id}>`; // Easy way to check for if Gork is @ed
  var cleanMessage = msg.content.toLowerCase(); //gives promise not string
  var userId = `${msg.author.id}`;
  try {
    // JAXSON SPAM
    jaxsonSpam(userId, msg);
    SpecialRequest(msg, userId);
    switch (true) {
      case CensorCheck(cleanMessage, userId, client.user.id):
        await msg.reply(
          `How dare you <@${userId}>, your language disgusts me!😡\n\nRead at your own risk: ||${msg.content}||`
        );
        CensorDelete(msg);
        return;
      // Question statement TODO: ADD MORE
      case FactCheck(cleanMessage, botId):
        msg.reply(
          questionprompts[getRandomIntInclusive(questionprompts.length - 1)]
        );
        return;
      // WORDLE BOT
      case WordleCheck(cleanMessage, botId):
        let wordInt = `${msg.content.replace(/[^0-9]/gis, "")}`; // Removes anything thats not a number
        msg.reply(Wordle(wordInt.replace(client.user.id, ""), userId)); // Removes Gorks ID
        return;
      // Have @GORK above this case
      case GeneralCheck(cleanMessage, botId):
        msg.reply(
          generalPrompts[getRandomIntInclusive(generalPrompts.length - 1)]
        );
        return;
      // GORK MISPELL
      case GorkMisspell(cleanMessage):
        msg.reply({ files: [CreateFile("PromptFiles", "SayMyName.gif")] });
        msg.react("😡");
        return;
      // Special Case
      case !msg.author.id.includes(client.user.id):
        let prompt = SpecialCaseSearch(triggers, specialPrompts, cleanMessage);
        if (prompt) {
          msg.reply(prompt);
        }
        return;
      default:
        return;
    }
  } catch (error) {
    console.error(
      `Something went wrong in the message creation section ${error}`
    );
  }
}

function jaxsonSpam(userId, msg) {
  if (userId.includes(JAX_ID)) {
    fs.readFile("src/util/config.json", (err, data) => {
      if (err) {
        console.error(`Error reading file in MessageCreate:`, err);
        return;
      }
      const jsonData = JSON.parse(data);
      jsonData.jaxcount += 1;
      msg.author.send(`<@${JAX_ID}> ${jsonData.jaxcount}`);
      fs.writeFileSync(
        "src/util/config.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing file in MessageCreate:", err);
            return;
          }
        }
      );
    });
  }
}

function WordleCheck(msg, botId) {
  return msg.includes(botId) && msg.includes("wordle");
}

// Searches if the message contains the trigger
function SpecialCaseSearch(trigger, prompt, msg) {
  for (let i = 0; i < trigger.length; i++) {
    if (msg.includes(trigger[i])) {
      try {
        return prompt[i];
      } catch (error) {
        console.error(error);
        return;
      }
    }
  }
  return null;
}

function CensorDelete(msg) {
  if (msg.deletable) {
    msg.delete();
  }
  return;
}

// Not important enough to require any updates
function SpecialRequest(msg, userId) {
  try {
    if (
      msg.guildId === ORANGE_SERVER_ID &&
      msg.channelId === ORANGE_TXTCHANEL_ID &&
      !msg.userId.includes(client.user.id)
    ) {
      msg.react("🍊");
    }
  } catch (error) {
    console.log("something went wrong in tangerine react:" + error);
  }
}
module.exports = {
  MessageCreate,
};
