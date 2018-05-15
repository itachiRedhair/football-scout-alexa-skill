// returns true if the skill is running on a device with a display (show|spot)
const supportsDisplay = handlerInput => {
  const hasDisplay =
    handlerInput.requestEnvelope.context &&
    handlerInput.requestEnvelope.context.System &&
    handlerInput.requestEnvelope.context.System.device &&
    handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
    handlerInput.requestEnvelope.context.System.device.supportedInterfaces
      .Display;
  console.log("hasDisplay", hasDisplay);
  return hasDisplay;
};

module.exports = { supportsDisplay };
