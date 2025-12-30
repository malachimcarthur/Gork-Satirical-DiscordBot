const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle5Message(userId) {
  const prompts = [
    `<@${userId}> womp womp`,
    `Man, <@${userId}> is someone I want to kill.`,
    `<@${userId}> this message has nothing to do with wordle`,
    `<@${userId}> Whats one hawk tuah on that thing 🥺`,
    `<@${userId}> WOAH you beat EXACTLY ONE PERSONS score... feel bad`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle5Message,
};
