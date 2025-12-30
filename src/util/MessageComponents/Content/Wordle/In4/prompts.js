const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle4Message(userId) {
  const prompts = [
    `here <@${userId}>ROAR :wolf:`,
    `Man, <@${userId}> is like really hot or smt.`,
    `<@${userId}> If your name is Gabe then you are gay`,
    `<@${userId}> has such a looser mentality`,
    `<@${userId}> NO ONE CARES ABOUT YOUR SCORE`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle4Message,
};
