//helper functions
const { getSession, setSession } = require("./../helper/session.helper");

//constants
const session = require("./../../constants").session;

const attributesAcceptedValues = {
  position: ["attack", "mid_fielder", "defence"],
  skill: ["tackle", "speed", "dribble", "finishing"],
  loyalty: ["low", "medium", "high"],
  style_of_play: ["self", "team"],
  personality: ["introvert", "extrovert"],
  family_or_game: ["family", "game", "balanced"],
  attitude: ["calm", "aggressive"],
  relationship: ["flexible", "concrete", "single"],
  bank_relation: ["clean", "not_clean"]
};

const validateAttributeSlots = slots => {
  console.log("in validate attributes slot,slots=>", JSON.stringify(slots));
  for (let slotId in slots) {
    if (!validateOneSlot(slots[slotId])) {
      return false;
    }
  }
  return true;
};

const validateOneSlot = slot => {
  console.log("in validate one slot,slot=>", JSON.stringify(slot));
  const acceptedValues = attributesAcceptedValues[slot.name];
  if (
    slot.value &&
    slot.resolutions &&
    slot.resolutions.resolutionsPerAuthority &&
    slot.resolutions.resolutionsPerAuthority[0].status.code ===
      "ER_SUCCESS_MATCH" &&
    acceptedValues.indexOf(
      slot.resolutions.resolutionsPerAuthority[0].values[0].value.name
    ) > -1
  ) {
    return true;
  } else {
    return false;
  }
};

const validateLastElicitedSlot = handlerInput => {
  const lastElicitedSlotId = getSession(handlerInput)[
    session.LAST_ELICITED_SLOT
  ];
  const elicitedSlot =
    handlerInput.requestEnvelope.request.intent.slots[lastElicitedSlotId];
  console.log(
    "in validate last elicited slot,eliciteSlot",
    JSON.stringify(elicitedSlot)
  );
  return validateOneSlot(elicitedSlot);
};

module.exports = { validateAttributeSlots, validateLastElicitedSlot };
