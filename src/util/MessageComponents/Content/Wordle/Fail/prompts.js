const { getRandomIntInclusive } = require("../../../../randomValues");

function wordleFailMessage(userId) {
  const prompts = [
    `<@${userId}> cheated.... but I just can't prove it`,
    `Man, <@${userId}> sux.`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordleFailMessage,
};
