const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle6Message(userId) {
  const prompts = [
    `<@${userId}> Dont fall for dem trixs`,
    `Man, <@${userId}> sux.`,
    `<@${userId}> just barely squeezed that one out didn't you`,
    `<@${userId}> Xi Jin Ping beat your score`,
    `@Penis <@${userId}>`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle6Message,
};
