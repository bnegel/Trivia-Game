var questions = [
    
{question: "Daughter of the poet, Lord Byron, she published the first algorithm intended for a machine.",
    answers: [
        "Elizabeth, Lady Walsington",
        "Eugenia Byron",
        "Ada Lovelace",
        "Mary Shelley"
    ],
    rightAnswer: 2},
  
   {question: "Co-designer of the C-10 programming language for UNIVAC, she had been in the US only six years before starting Cornell University as a math major. A side project of hers still in use today is the 'Jewish Holiday Algorithm' for calendar programs.",
    answers: [
      "Liliana Gordon",
      "Ida Rhodes",
      "Gertrude Berg",
      "Molly Bloom"
    ],
    rightAnswer: 1},

  {question: "Featured in the movie <i>Hidden Figures<i>, this 'human computer' prepared for the advent of machine calculation by teaching herself FORTRAN. She later headed the programming section of the Analysis and Computation Division at Langley Research Center.",
    answers: [
      "Dorothy Vaughn",
      "Grace Jones",
      "Katherine Johnson",
      "Eloise McCarter"
    ],
    rightAnswer: 0},

{question: "This Naval officer conceived of the idea of a computer language based on English words. Her work inspired the development of the COBAL programming language.",
    answers: [
      "Admiral Alene Duerk",
      "Admiral Kathryn Janeway",
      "Commander Daphne Blundell",
      "Rear Admiral Grace Murray Hopper"
    ],
    rightAnswer: 3},

  {question: "This woman started working at IBM in 1958, mostly on systems architecture and implementation of operating systems and natural language processors; however, she is best known for having her name on a landmark 2013 Supreme Court case.",
      answers: [
        "Susan Obergefell",
        "Edith Windsor",
        "Marilyn Hacker",
        "Julia Undeco"
      ],
      rightAnswer: 1}
    ]

var answersChosen = []


$(document).ready(function() {



var startGame = function() {
    $("#start-button").on("click", function() {
        $("#quiz-body").empty();
        displayQuestions();
    })
};
var displayQuestions = function() {
for(var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    var questionBox = $("<div>");
    var questionStem = $("<p>");
    questionStem.text(currentQuestion.question);
   
    displayAnswers(currentQuestion.answers);
    questionBox.append(questionStem);
    var answerBox =  $("<div>");
    answerBox = displayAnswers(currentQuestion.answers);
    questionBox.append(answerBox);
    $("#quiz-body").append(questionBox);
}
}
var displayAnswers = function(answerChoices) {
    var answerBox = $("<div>");
    for(var j =0; j < 4; j++) {
        var currentAnswer = answerChoices[j];
        var answerChoice = $('<input type="radio">' + currentAnswer + "</input>");
      answerChoice.val(currentAnswer)
        answerBox.append(answerChoice);
    }
    return answerBox
}

var rightAnswer = function() {
    if()
}

}
startGame();

});