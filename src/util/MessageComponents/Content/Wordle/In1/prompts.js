const { getRandomIntInclusive } = require("../../../../randomValues");

function wordle1Message(userId) {
  const prompts = [
    `<@${userId}> cheated..... But I just can't prove it.`,
    `Man, <@${userId}> likes little boys!!!!!`,
    `<@${userId}><@${userId}><@${userId}><@${userId}><@${userId}><@${userId}><@${userId}><@${userId}><@${userId}>`,
    `My legal team is trying to contact you for alleged cheating allegations <@${userId}>`,
  ];
  return prompts[getRandomIntInclusive(prompts.length - 1)];
}
module.exports = {
  wordle1Message,
};
