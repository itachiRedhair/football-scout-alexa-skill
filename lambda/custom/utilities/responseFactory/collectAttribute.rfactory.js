//helper functions
const {
  randomQuestionPicker,
  randomAnswerHintPicker,
  randomSuccessResponse,
  randomize
} = require("./../helper/random.helper");
const {
  validateAttributeSlots,
  validateLastElicitedSlot
} = require("./../helper/validate.helper");
const { getBestMatchedPlayer } = require("./../helper/player.helper");
const { getSession, setSession } = require("./../helper/session.helper");

//messages
const messages = require("./../../messages");

//constants
const attributeSlots = require("./../../constants").attributeSlots;
const intents = require("./../../constants").intents;
const session = require("./../../constants").session;

const preQuestion = [
  `Here's the next question.`,
  `Now answer this.`,
  `Okay, here's the next question.`,
  `Here's next`,
  `Answer this one.`,
  `Be honest with this one.`,
  `Time for next question`,
  `You are doing great. Here's your next question`
];

const collectAttributesResponse = handlerInput => {
  const response = handlerInput.responseBuilder;
  const { request } = handlerInput.requestEnvelope;

  const updatedIntent = request.intent;
  const slots = request.intent.slots;

  if (validateAttributeSlots(slots)) {
    const playerInfo = getBestMatchedPlayer(slots);
    console.log("inside validateAttbiuteSltos, playerInfo->", playerInfo);
    return response.speak(playerInfo.name).getResponse();
  }

  if (
    request.dialogState !== "STARTED" &&
    !validateLastElicitedSlot(handlerInput)
  ) {
    const lastElicitedSlot = getSession(handlerInput)[
      session.LAST_ELICITED_SLOT
    ];
    const lastQuestionId = getSession(handlerInput)[session.LAST_QUESTION_ID];
    const answerHint = randomAnswerHintPicker(lastElicitedSlot, lastQuestionId);

    console.log("inside validateLastElicitedSlots, answerHint=>", answerHint);

    return response
      .speak(answerHint)
      .reprompt(answerHint)
      .addElicitSlotDirective(lastElicitedSlot, updatedIntent)
      .getResponse();
  } else {
    let successResponse;
    let prompt = "";
    const lastSlotNumber = getSession(handlerInput)[session.SLOT_NUMBER];
    let currentSlotNumber;

    if (lastSlotNumber !== undefined) {
      currentSlotNumber = lastSlotNumber + 1;

      const lastElicitedSlot = getSession(handlerInput)[
        session.LAST_ELICITED_SLOT
      ];
      successResponse = randomSuccessResponse(
        lastElicitedSlot,
        slots[lastElicitedSlot].resolutions.resolutionsPerAuthority[0].values[0]
          .value.name
      );

      prompt += successResponse + ` ` + randomize(preQuestion) + ` `;
    } else {
      currentSlotNumber = 0;
    }

    setSession(handlerInput, session.SLOT_NUMBER, currentSlotNumber);

    const slotToElicit = attributeSlots[currentSlotNumber];

    const { questionId, question } = randomQuestionPicker(slotToElicit);

    setSession(handlerInput, session.LAST_QUESTION_ID, questionId);
    setSession(handlerInput, session.LAST_ELICITED_SLOT, slotToElicit);

    console.log("inside else of validaLastElicitedSlots, question->", question);
    prompt += question.value;
    return response
      .speak(prompt)
      .reprompt(question.value)
      .addElicitSlotDirective(slotToElicit, updatedIntent)
      .getResponse();
  }
};

module.exports = { collectAttributesResponse };
