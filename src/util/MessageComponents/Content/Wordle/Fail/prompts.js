const { getRandomIntInclusive } = require("../../../../randomValues");

function wordleFailMessage(userId) {
  const prompts = [
    `<@${userId}> cheated.... but I just can't prove it`,
    `Man, <@${userId}> sux.`,
    `Might as well just kys <@${userId}>`,
    `The wordle is not horse <@${userId}>`,
    `<@${userId}> wordle in 186543086`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordleFailMessage,
};
