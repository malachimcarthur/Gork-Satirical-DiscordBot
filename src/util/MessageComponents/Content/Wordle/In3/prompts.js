const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle3Message(userId) {
  const prompts = [
    `Don't Hate on<@${userId}>`,
    `Hate on <@${userId}>.`,
    `Better start peeing <@${userId}>`,
    `<@${userId}> stop in the name of wordle, you have a right to remain so dang sexy ;)`,
    `LEAVE ME ALONE <@${userId}>`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle3Message,
};
