const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle1Message(userId) {
  const prompts = [
    `<@${userId}> cheated..... But I just can't prove it.`,
    `Man, <@${userId}> likes little boys!!!!!`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle1Message,
};
