const Alexa = require("ask-sdk");

module.exports = Object.freeze({
  GREETING: [`Heyya, I am your football scout.`],

  START_HELP_MESSAGE: [
    `I can help you find a footballer in you. Try saying <prosody rate='90%'>find a footballer in me</prosody>.`
  ],

  INSTRUCTIONS: [
    `Hi there! I am, as you know, a football scout. My purpose is to find a great footballer in you. Be honest while I ask you some questions. Try saying, <prosody rate='90%'>find a footballer in me</prosody>.`
  ],

  GENERIC_ERROR: [
    `Oh snap! Looks like something went wrong. Try saying <prosody rate='90%'>find a footballer in me</prosody>. Or if the problem persists, check back again later.`
  ],

  EXIT: [
    `Okay, until next time then!`,
    `Okay, Godspeed!`,
    `Okay, See you soon!`,
    `Okay, Talk to you later!`
  ],

  ALL_UNHANDLED: [
    `Ummm. I couldn't understand that. Try saying <prosody rate='90%'>find a footballer in me</prosody>.`
  ],

  speechGenerators: {},

  cardGenerators: {
    getDefaultCard: () => {
      const bgImage = new Alexa.ImageHelper()
        .addImageInstance("default_url_here")
        .getImage();
      const tmobileLogo = new Alexa.ImageHelper()
        .withDescription("some_description")
        .addImageInstance("logo_url_here")
        .getImage();

      const titleText = `some primary title text`;
      const hintText = "some more text seconday in this case";
      const textContent = new Alexa.RichTextContentHelper()
        .withPrimaryText(titleText)
        .withSecondaryText(hintText)
        .withTertiaryText("")
        .getTextContent();
      const cardTemplate = {
        type: "BodyTemplate3",
        token: "Homepage",
        backButton: "VISIBLE",
        backgroundImage: bgImage,
        title: "T-Mobile",
        image: tmobileLogo,
        textContent
      };
      return cardTemplate;
    }
  }
});
