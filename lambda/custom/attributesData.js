"use strict";

module.exports = Object.freeze({
  position: {
    questions: {
      question_1: {
        value:
          "What position do you play? You can say something like attack or defence.",
        answerHints: ["Pick one from attack, defence or mid fielder"]
      },
      question_2: {
        value: "What position are you good at? Defence, attack or mid fielder?",
        answerHints: [
          "Do you play on wings or good at centre back or maybe something else?"
        ]
      }
    },
    successResponses: {
      attack: [
        `So you play attack. That's good.`,
        `You like to play attacking, Nice!`,
        `Oh! You play forward. That's nice.`
      ],
      defence: [
        `So you play defence. That's good.`,
        `You like to play defending, Nice!`,
        `Oh! You are the saviour of your team.`
      ],
      mid_fielder: [
        `So you play in middle. That's good.`,
        `Oh! You are the one who is making the game. That's nice.`
      ]
    },
    weight: 3.5
  },
  skill: {
    questions: {
      question_1: {
        value: "What is your best strength? Finishing, dribbling or passing?",
        answerHints: [
          "What are you good at? Finishing, dribbling or passing.",
          "Pick one from finishing, dribbling, passing."
        ]
      },
      question_2: {
        value: "What skill are you good at? Tackle, dribble or headers.",
        answerHints: ["Pick one from tackle, dribble or headers."]
      }
    },
    successResponses: {
      tackle: [
        `Yes, tackling is an most important skill. It is what determines the match.`
      ],
      header: [`Oh nice! Headers are hard to master.`],
      speed: [
        `Speed has been always a great asset for a player`,
        `Oh nice! You will do good in european football.`
      ],
      dribble: [`Dribbling is what makes football fun.`],
      finishing: [`A great finisher is what wins the matches.`],
      passing: [`Pep guardiola would be proud of you.`]
    },
    weight: 2
  },
  loyalty: {
    questions: {
      question_1: {
        value:
          "If you are offered a ton load of money, will you leave the club or stay at the club?",
        answerHints: ["Will you leave the club or stay?"]
      }
      // question_2: {
      //   value:
      //     "Will you play for the club with history or play where you could be the all star?",
      //   answerHints: ["Will you leave the club or stay?"]
      // }
    },
    successResponses: {
      high: [`Oh, your fans will be pleased.`],
      low: [``],
      medium: [``]
    },
    weight: 1.2
  },
  style_of_play: {
    questions: {
      question_1: {
        value:
          "What do you think you get picked for your team? Do you think is it becasuse you are the best or you get along with team?",
        answerHints: [
          "Are you the best in your team or do you believe in team play?"
        ]
      },
      question_2: {
        value:
          "If you got the ball one on one with the keeper, what will you do? Shoot the ball yourself or pass the ball to another forward for sure shot goal?",
        answerHints: ["Shoot the ball or pass it to other player?"]
      },
      question_3: {
        value: "Do you believe in solo game or team play?",
        answerHints: [
          "Pick one from solo game or team play.",
          "Solo game or team play?"
        ]
      }
    },
    successResponses: {
      self: [
        `You believe you are the difference maker. That's some confidence.`
      ],
      team: [`Indeed! Football is a team game.`]
    },
    weight: 1.5
  },
  personality: {
    questions: {
      question_1: {
        value:
          "What is your outfit for the day? Pick one from classy or simple.",
        answerHints: [
          "Classy or simple?. What is your outfit of the day?",
          "Simple or classy? What will you wear today?"
        ]
      },
      question_2: {
        value:
          "Funky dance party? You will sit and enjoy your beer? Or you will rather drink and dance?",
        answerHints: [
          "Enjoy your beer or drink and dance?",
          "Pick one from dancing or sitting in the corner."
        ]
      },
      question_3: {
        value: "It's friday night, where are you? At the bar or home?",
        answerHints: [
          "Bar or home?",
          "Will you go movies on weekend or sit at home?"
        ]
      }
    },
    successResponses: {
      extrovert: [``],
      introvert: [``]
    },
    weight: 2
  },
  family_or_game: {
    questions: {
      question_1: {
        value: "What do you rank most? Family or Game?",
        answerHints: ["Family or game?."]
      },
      question_2: {
        value:
          "If you get a day off, will you spend time with family or rather train?",
        answerHints: [
          "Will you spend time with family or rather train?",
          "Spend time with family or rather train?"
        ]
      }
    },
    successResponses: {
      family: [`Game should be your passion. But family is more important.`],
      game: [``],
      balanced: [`You are the idol.`]
    },
    weight: 1.5
  },
  attitude: {
    questions: {
      question_1: {
        value:
          "If a guy is gonna start a fight? What will you do? Take it calm or go join him?",
        answerHints: [
          "Take it calm or start fighting with him?",
          "Take it easy and walk away or fight back."
        ]
      },
      question_2: {
        value:
          "Opponent team gets a penalty. Will you trash talk or face it like a gentleman.",
        answerHints: [
          "Will you trash talk or face it like a gentleman?",
          "Trash talk or be calm?"
        ]
      }
    },
    successResponses: {
      aggressive: [`Oh, a little hot tempered huh?`],
      calm: [`Being calm helps in keeping spirit of the game.`]
    },
    weight: 2.2
  },
  relationship: {
    questions: {
      question_1: {
        value:
          "Do you believe in one love for the life or you think that girls they come and go?",
        answerHints: [
          "Do you think that there is only one love for entire life. Or girls come and go?",
          "What do you think of one life one love? Or you prefer to have girls come and go?"
        ]
      },
      question_2: {
        value: "Are you single or in relationship?",
        answerHints: ["Pick one from single or relationship."]
      }
    },
    successResponses: {
      flexible: [`You must be having a life, don't you?`],
      concrete: [`Your partner is lucky.`],
      single: [`Don't worry. It's good to focus on the game.`]
    },
    weight: 1.5
  },
  bank_relation: {
    questions: {
      question_1: {
        value:
          "There's an extra 100$ in your account. What will you do? Notify the bank or keep it?",
        answerHints: [
          "Will you notify the bank or keep money?",
          "You can either keep the money or notify the bank. What will you do?"
        ]
      },
      question_2: {
        value: "Will you pay your taxes or rather keep the money?",
        answerHints: ["Will you pay your taxes or rather keep the money?"]
      }
    },
    successResponses: {
      clean: [`You are an ideal citizen.`],
      not_clean: [`Uh huh. Okay.`]
    },
    weight: 1
  }
});
