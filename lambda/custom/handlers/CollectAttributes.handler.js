const {
  setSession,
  getSession
} = require("./../utilities/helper/session.helper");

//response builders
const {
  createExitResponse
} = require("./../utilities/responseFactory/general.rfactory");
const {
  collectAttributesResponse
} = require("./../utilities/responseFactory/collectAttribute.rfactory");

//constants
const intents = require("./../constants").intents;
const states = require("./../constants").states;
const session = require("./../constants").session;

const ShouldCollectNo = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    const state = getSession(handlerInput)[session.STATE];
    return (
      state === states.SHOULD_COLLECT_ATTRIBUTES &&
      request.type === intents.type.IntentRequest &&
      request.intent.name === intents.AMAZON.NoIntent
    );
  },

  handle(handlerInput) {
    return createExitResponse(handlerInput);
  }
};

const CollectAttributes = {
  canHandle(handlerInput) {
    console.log(JSON.stringify(handlerInput));
    const { request } = handlerInput.requestEnvelope;
    const state = getSession(handlerInput)[session.STATE];
    return (
      (state === states.COLLECT_ATTRIBUTES ||
        state === states.SHOULD_COLLECT_ATTRIBUTES) &&
      request.intent.name === intents.CollectAttributes
    );
  },

  handle(handlerInput) {
    const state = getSession(handlerInput)[session.STATE];
    if (state === states.SHOULD_COLLECT_ATTRIBUTES) {
      setSession(handlerInput, session.STATE, states.COLLECT_ATTRIBUTES);
    }

    console.log("here in collectAttributes ");

    return collectAttributesResponse(handlerInput);
  }
};

module.exports = {
  CollectAttributes,
  ShouldCollectNo
};
