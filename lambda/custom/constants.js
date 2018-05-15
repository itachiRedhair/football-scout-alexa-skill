"use strict";

module.exports = Object.freeze({
  appId: "amzn1.ask.skill.f563f2b8-a5cd-4b75-91bb-10148304dd43",

  testEnvironment: process.env.TEST_ENVIRONMENT || "simulator",

  //dynamodb tables
  sessionTable: "footballScout",

  attributeSlots: [
    "position",
    "skill",
    "loyalty",
    "style_of_play",
    "personality",
    "family_or_game",
    "attitude",
    "relationship",
    "bank_relation"
  ],

  error: {
    name: {
      SERVICE_ERROR: "ServiceError"
    }
  },

  states: {
    NO_STATE: "",
    SHOULD_COLLECT_ATTRIBUTES: "SHOULD_COLLECT_ATTRIBUTES",
    COLLECT_ATTRIBUTES: "COLLECT_ATTRIBUTES"
  },

  session: {
    STATE: "_STATE",
    LAST_QUESTION_ID: "LAST_QUESTION_ID",
    LAST_ELICITED_SLOT: "LAST_ELICITED_SLOT",
    SLOT_NUMBER: "SLOT_NUMBER"
  },

  intents: {
    type: {
      IntentRequest: "IntentRequest"
    },
    LaunchRequest: "LaunchRequest",
    CollectAttributes: "CollectAttributes",
    CollectAttributesNewSession: "CollectAttributesNewSession",

    AMAZON: {
      YesIntent: "AMAZON.YesIntent",
      NoIntent: "AMAZON.NoIntent",
      HelpIntent: "AMAZON.HelpIntent",
      StopIntent: "AMAZON.StopIntent",
      CancelIntent: "AMAZON.CancelIntent"
    },

    Unhandled: "Unhandled",
    SessionEndedRequest: "SessionEndedRequest"
  }
});
