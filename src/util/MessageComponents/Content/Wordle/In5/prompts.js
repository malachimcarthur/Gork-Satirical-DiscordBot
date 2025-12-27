const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle5Message(userId) {
  const prompts = [
    `<@${userId}> womp womp`,
    `Man, <@${userId}> is someone I want to kill.`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle5Message,
};
