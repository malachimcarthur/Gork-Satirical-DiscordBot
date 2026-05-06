const { client } = require("./util/client.js");
const { Events } = require("discord.js");
const { MessageReaction } = require("./Events/Reaction.js");
const { Ready } = require("./Events/Ready.js");
const { MessageCreate } = require("./Events/MessageCreate.ts");
const { CommandDeploy } = require("./Events/Command.js");
const { DM_USER, DM_CHANNEL_ID } = require("./util/constants.js");
const { killVC } = require("./util/killVC.js");

global.self = global;
Ready();
client.on(Events.Error, async (error) => {
  client.users.send(DM_USER, error);
  console.error(error);
}); // May not work

client.on(Events.MessageReactionAdd, async (react) => {
  MessageReaction(react);
});
client.on(Events.MessageCreate, async (msg) => {
  try {
    let message = `${msg.createdAt.getHours()}:${msg.createdAt.getMinutes()} ${
      msg.author.username
    } ${msg.content}`;
    console.log(message);
  } catch (error) {
    console.error(`Error with logging: ${error}`);
  }
  MessageCreate.randomReact(msg);
  MessageCreate.jaxsonSpam(msg);
  MessageCreate.reply(msg);
});
client.on(Events.InteractionCreate, async (interaction) => {
  CommandDeploy(interaction);
});

client.on(Events.VoiceStateUpdate, async (oldState, newState) => {
  try {
    if (oldState.member.id === client.user.id && !newState.channel) {
      killVC();
    }
  } catch {
    return;
  }
});
const { token } = require("./util/config.json");
try {
  client.login(token);
} catch (err) {
  console.log(`Unable to login ${err}`);
}
