import type { Message, OmitPartialGroupDMChannel } from "discord.js";

const { client } = require("../util/client.js");
const { JAX_ID } = require("../util/constants.js");
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
const { CreateFile } = require("../util/MessageComponents/CreateFile.js");
const fs = require("node:fs");
const {
  censorList,
} = require("../util/MessageComponents/Content/prompts/censorList.js");

class MessageCreate {
  msg!: OmitPartialGroupDMChannel<Message<boolean>>;
  static jaxsonSpam(msg: OmitPartialGroupDMChannel<Message<boolean>>) {
    if (msg.author.id.includes(JAX_ID)) {
      fs.readFile("src/util/config.json", (err: any, data: string) => {
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
          (err: any) => {
            if (err) {
              console.error("Error writing file in MessageCreate:", err);
              return;
            }
          }
        );
      });
    }
  }

  public static async reply(msg: OmitPartialGroupDMChannel<Message<boolean>>) {
    if (this.censorCheck(msg)) {
      await msg.reply(
        `How dare you <@${msg.author.id}>, your language disgusts me!😡\n\nRead at your own risk: ||${msg.content}||`
      );
      if (msg.deletable) {
        msg.delete();
        return;
      }
    }
    let message = this.classifyMessage(msg);
    if (message) {
      msg.reply(message);
    }
  }

  private static classifyMessage(
    msg: OmitPartialGroupDMChannel<Message<boolean>>
  ) {
    if (this.factCheck(msg)) {
      return questionprompts[getRandomIntInclusive(questionprompts.length - 1)];
    }
    if (this.wordleCheck(msg)) {
      let wordInt = `${msg.content.replace(/[^0-9]/gis, "")}`; // Removes anything thats not a number
      return Wordle(wordInt.replace(client.user.id, ""), msg.author.id); // Removes Gorks ID
    }
    if (this.generalCheck(msg)) {
      return generalPrompts[getRandomIntInclusive(generalPrompts.length - 1)];
    }
    if (this.gorkMisspell(msg)) {
      msg.react("😡");
      return { files: [CreateFile("PromptFiles", "SayMyName.gif")] };
    }
    if (msg.author.id == client.user.id) {
      return null;
    }
    let prompt = this.specialCaseSearch(triggers, specialPrompts, msg);
    if (prompt) {
      return prompt;
    }
    return null;
  }
  private static generalCheck(
    msg: OmitPartialGroupDMChannel<Message<boolean>>
  ) {
    return msg.content.toLowerCase().includes(`<@${client.user.id}>`);
  }

  private static censorCheck(msg: OmitPartialGroupDMChannel<Message<boolean>>) {
    if (msg.author.id.includes(client.user.id)) {
      return false;
    }

    for (let i = 0; i < censorList.length; i++) {
      if (msg.content.toLowerCase().includes(censorList[i])) {
        return true;
      }
    }
    return false;
  }
  private static gorkMisspell(
    msg: OmitPartialGroupDMChannel<Message<boolean>>
  ) {
    if (
      // returns -1 if not included
      msg.content.toLowerCase().search(/@[a-z]ork/gis) > -1 ||
      msg.content.toLowerCase().search(/@[a-z]rok/gis) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }
  private static wordleCheck(msg: OmitPartialGroupDMChannel<Message<boolean>>) {
    return (
      msg.content.includes(`<@${client.user.id}>`) &&
      msg.content.toLowerCase().includes("wordle")
    );
  }
  private static factCheck(msg: OmitPartialGroupDMChannel<Message<boolean>>) {
    return (
      msg.content.toLowerCase().includes(`<@${client.user.id}>`) &&
      (msg.content.toLowerCase().includes("fake") ||
        msg.content.toLowerCase().includes("false") ||
        msg.content.toLowerCase().includes("true"))
    );
  }
  private static specialCaseSearch(
    trigger: string | any[],
    prompt: string[],
    msg: OmitPartialGroupDMChannel<Message<boolean>>
  ) {
    for (let i = 0; i < trigger.length; i++) {
      if (msg.content.toLowerCase().includes(trigger[i])) {
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
}

// Searches if the message contains the trigger

module.exports = {
  MessageCreate,
};
