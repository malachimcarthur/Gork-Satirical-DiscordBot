const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle2Message(userId) {
  const prompts = [
    `<@${userId}> Thats How we do`,
    `Man, <@${userId}> you wanna like go out sometime.uwu`,
    `Woah wordle in 2 are you,<@${userId}>, sure thats legit?`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle2Message,
};
