const Alexa = require("ask-sdk");

//request handlers
const CommonHandler = require("./handlers/Common.handler");
const LaunchRequestHandler = require("./handlers/LaunchRequest.handler");
const CollectAttributesHandler = require("./handlers/CollectAttributes.handler");
const ErrorHandler = require("./handlers/Error.handler");
const UnhandledHandler = require("./handlers/Unhandled.handler");

//skill instance
const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler.NewSessionHandler,
    // CollectAttributesHandler.ShouldCollectYes,
    CollectAttributesHandler.ShouldCollectNo,
    // CollectAttributesHandler.CollectAttributesNewSession,
    CollectAttributesHandler.CollectAttributes,
    CommonHandler.StopHandler,
    CommonHandler.HelpHandler,

    //all unhandled handlers here *Priority important*
    // UnhandledHandler.MoreStoresStateUnhandled,
    UnhandledHandler.AllUnhandled
  )
  .addErrorHandlers(ErrorHandler.DefaultErrorHandler)
  .lambda();
