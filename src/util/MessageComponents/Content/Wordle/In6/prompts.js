const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle6Message(userId) {
  const prompts = [
    `<@${userId}> Dont fall for dem trixs`,
    `Man, <@${userId}> sux.`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle6Message,
};
