//session helper
const {
  getSession,
  setSession
} = require("./../utilities/helper/session.helper");

//response builders
const {
  createGreetingResponse
} = require("./../utilities/responseFactory/general.rfactory");

//constants
const intents = require("./../constants").intents;
const session = require("./../constants").session;
const states = require("./../constants").states;

const NewSessionHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === intents.LaunchRequest;
  },

  handle(handlerInput) {
    setSession(handlerInput, session.STATE, states.SHOULD_COLLECT_ATTRIBUTES);
    return createGreetingResponse(handlerInput);
  }
};

module.exports = { NewSessionHandler };
