const { Events } = require("discord.js");
const {
  generalPrompt,
} = require("../util/MessageComponents/Content/prompts/generalPrompts.js");
const { client } = require("./../util/client.js");
function Ready() {
  client.once(Events.ClientReady, (c) => {
    console.log(`${c.user.displayName} is gooning`);
  });
}

module.exports = {
  Ready,
};
