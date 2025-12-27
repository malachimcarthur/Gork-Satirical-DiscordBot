const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle3Message(userId) {
  const prompts = [`Don't Hate on<@${userId}>`, `Hate on <@${userId}>.`];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle3Message,
};
