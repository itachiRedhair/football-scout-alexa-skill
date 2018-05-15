//response builders
const {
  createGenericErrorResponse
} = require("./../utilities/responseFactory/general.rfactory");

//handlers

const DefaultErrorHandler = {
  canHandle() {
    return true;
  },

  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return createGenericErrorResponse(handlerInput);
  }
};

module.exports = { DefaultErrorHandler };
