//sets session attributes
const setSession = (handlerInput, sessionKey, sessionValue) => {
  const attributes = handlerInput.attributesManager.getSessionAttributes();
  attributes[sessionKey] = sessionValue;
  handlerInput.attributesManager.setSessionAttributes(attributes);
};

//returns session attributes
const getSession = handlerInput => {
  return handlerInput.attributesManager.getSessionAttributes();
};

module.exports = { setSession, getSession };
