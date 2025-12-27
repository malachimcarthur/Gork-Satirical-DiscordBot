const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle4Message(userId) {
  const prompts = [
    `here <@${userId}>ROAR :wolf:`,
    `Man, <@${userId}> is like really hot or smt.`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle4Message,
};
