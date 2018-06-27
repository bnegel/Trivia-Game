

//on Page Load, start timer; everything happens within that 
    // Code timer (do this last once the game works)
$("#startBtn").on ("click", function() {
    window.location.href = "indexGame.html";
    console.log("clicked");
})

$("#doneBtn").on ("click", function endGame() {
    window.location.href = "indexScores.html";
    $("#right-answers").text("rightAnswers");
    $("#wrong-answers").text("wrongAnswers");
    $("#un-answered").text("unanswered");
})

// var intervalId;
// var timerEnd = false;
// var timer = { 
    
    // Need to put time variable in here, but I can't get the syntax right.

    function count() {
        timer.time--;
        var converted = timer.timeConverter(timer.time);
        console.log(converted);
    }
// }

window.onload = function startTimer() {
    
    if (!timerEnd) {
        intervalId = setInterval(timer.count, 30000);
        clockRunning = true;
        }
  
        
    var girlQuestions = [
        {
          question: "Daughter of the poet, Lord Byron, she published the first algorithm intended for a machine.",
          answers: { 
            a: 	"Elizabeth, Lady Walsington",
            b:	"Eugenia Byron",
            c:	"Ada Lovelace",
            d:	"Mary Shelley"
            
          },
          rightAnswer: "c"
        },
        {
            question: "Co-designer of the C-10 programming language for UNIVAC, she had been in the US only six years before starting Cornell University as a math major. A side project of hers still in use today is the 'Jewish Holiday Algorithm' for calendar programs.",
          answers: {
            a: "Liliana Gordon",
            b: "Ida Rhodes",
            c: "Gertrude Berg",
            d: "Molly Bloom"
          },
          rightAnswer: "b"
        },
        {
            question: "Featured in the movie <i>Hidden Figures<i>, this 'human computer' prepared for the advent of machine calculation by teaching herself FORTRAN. She later headed the programming section of the Analysis and Computation Division at Langley Research Center.",
          answers: {
            a: "Dorothy Vaughn",
            b: "Grace Jones",
            c: "Katherine Johnson",
            d: "Eloise McCarter"
          },
          rightAnswer: "a"
        },
      {
        question: "This Naval officer conceived of the idea of a computer language based on English words. Her work inspired the development of the COBAL programming language.",
          answers: {
            a: "Admiral Alene Duerk",
            b: "Admiral Kathryn Janeway",
            c: "Commander Daphne Blundell",
            d: "Rear Admiral Grace Murray Hopper"
          },
          rightAnswer: "d"
        },
        {
            question: "This woman started working at IBM in 1958, mostly on systems architecture and implementation of operating systems and natural language processors; however, she is best known for having her name on a landmark 2013 Supreme Court case.",
            answers: {
              a: "Susan Obergefell",
              b: "Edith Windsor",
              c: "Marilyn Hacker",
              d: "Julia Undeco"
            },
            rightAnswer: "d"
          }
      ]

        var currentQuestion = 0;
        var rightAnswers = 0;

      $('#question').html(parseInt(currentQuestion) + 1 + ". " + girlQuestions[currentQuestion].question);
            var options = girlQuestions[currentQuestion].choices;
            var questionFormHtml = '';
            for (var i = 0; i < options.length; i++) {
                questionFormHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
            }
            $('#form').html(formHtml);
            $(".options:eq(0)").prop('checked', true);
            }

            function isCorrect() {
            if ($("input[name=option]:checked").val() == girlQuestions[currentQuestion].rightAnswer) {
                rightAnswers++;
            else (wrongAnswers++)
  }
}


    //   function fillQuestions() {
    //     var questionContent = girlQuestions.question;
    //     var answers = girlQuestions.answers;


        

    //   }

    //   array.forEach(fillQuestions => {
          
    //   });
    // }








//Create variable for question array
    //Create variable for questionsDone and questionsUndone; for each question answered, questionsDone++ and questionsUndone--
//Create variable (array to be pushed to) to store correct answers
//Create variable to store individual correct answers. Will need to reassign the value within each question.
//Create variables to store number of correct answers, wrong answers, and unanswered questions
    //Question answered? True, go to next function; false unanswered++
    //If answer == correct answer then rightAnswers++; else wrongAnswers++; 
    //If timerEnd is true, questionsUndone == unanswered
    //display rightAnswers, wrongAnswers, and unanswered
    
