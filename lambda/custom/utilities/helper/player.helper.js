//helper functions
const { randomize } = require("./random.helper");

//data
const playersList = require("./../../playerData");
const attributesList = require("./../../attributesData");

let playerRatings = {};

for (let playerId in playersList) {
  playerRatings[playerId] = 0;
}

const getBestMatchedPlayer = slots => {
  const collectedAttributes = collectSlotValues(slots);

  console.log(
    "in get best match player, collectedAttributes=>",
    collectedAttributes
  );

  for (let playerKey in playersList) {
    const player = playersList[playerKey];

    for (let attrKey in collectedAttributes) {
      const collAttr = collectedAttributes[attrKey];
      const playerAttrArray = player.attributes[attrKey];
      console.log("in get best match player for loop, collAtr=>", collAttr);
      if (playerAttrArray.indexOf(collAttr) > -1) {
        playerRatings[playerKey] =
          playerRatings[playerKey] + attributesList[attrKey].weight;
      }
    }
  }

  const playerId = Object.keys(playerRatings).reduce(function(a, b) {
    return playerRatings[a] > playerRatings[b] ? a : b;
  });

  console.log(playerRatings);

  const prompt = randomize(playersList[playerId].prompts);
  return { name: playersList[playerId].name, prompt };
};

const collectSlotValues = slots => {
  const collectedAttributes = {};
  for (let slotId in slots) {
    const slot = slots[slotId];
    const slotValue =
      slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
    collectedAttributes[slotId] = slotValue;
  }
  console.log(
    "in collect slot values,collectedAttributes=>",
    collectedAttributes
  );
  return collectedAttributes;
};

module.exports = { getBestMatchedPlayer };
