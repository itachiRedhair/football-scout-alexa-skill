const attributesList = require("./../../attributesData");

const randomQuestionPicker = attributeKey => {
  const questionsList = attributesList[attributeKey].questions;
  const questionIdList = Object.keys(questionsList);
  const questionId =
    questionIdList[Math.floor(Math.random() * questionIdList.length)];
  return { questionId, question: questionsList[questionId] };
};

const randomAnswerHintPicker = (attributeId, questionId) => {
  const answerHintList =
    attributesList[attributeId].questions[questionId].answerHints;

  const answerHint =
    answerHintList[Math.floor(Math.random() * answerHintList.length)];

  return answerHint;
};

const randomSuccessResponse = (attributeKey, attributeValue) => {
  const successResponseArray =
    attributesList[attributeKey].successResponses[attributeValue];
  const successResponse =
    successResponseArray[
      Math.floor(Math.random() * successResponseArray.length)
    ];
  return successResponse;
};

const randomize = array => {
  console.log("inside randomize, array=>", array);
  const randomItem = array[Math.floor(Math.random() * array.length)];
  console.log("inside randomize, randomItem=>", randomItem);
  return randomItem;
};

module.exports = {
  randomQuestionPicker,
  randomAnswerHintPicker,
  randomize,
  randomSuccessResponse
};
