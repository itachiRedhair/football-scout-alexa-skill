//response builders
const {
  createAllUnhandledResponse
} = require("./../utilities/responseFactory/unhandled.rfactory");

//All unhandled request will get here
const AllUnhandled = {
  canHandle(handlerInput) {
    return true;
  },

  handle(handlerInput) {
    return createAllUnhandledResponse(handlerInput);
  }
};

module.exports = {
  AllUnhandled
};
