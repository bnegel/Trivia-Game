

 
  showQuiz() {
    
    var output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

var girlQs = [
  {
    question: "Daughter of the poet, Lord Byron, she published the first algorithm intended for a machine.",
    answers: {
      a: 	"Elizabeth, Lady Walsington",
      b:	"Eugenia Byron",
      c:	"Ada Lovelace",
      d:	"Mary Shelley"
      
    },
    correctAnswer: "c"
  },
  {
    question: "Co-designer of the C-10 programming language for UNIVAC, she had been in the US only six years before starting Cornell University as a math major. A side project of hers still in use today is the 'Jewish Holiday Algorithm' for calendar programs.",
    answers: {
      a: "Liliana Gordon",
      b: "Ida Rhodes",
      c: "Gertrude Berg",
      d: "Molly Bloom"
    },
    correctAnswer: "b"
  },
  {
    question: "Featured in the movie <i>Hidden Figures<i>, this 'human computer' prepared for the advent of machine calculation by teaching herself FORTRAN. She later headed the programming section of the Analysis and Computation Division at Langley Research Center.",
    answers: {
      a: "Dorothy Vaughn",
      b: "Grace Jones",
      c: "Katherine Johnson",
      d: "Eloise McCarter"
    },
    correctAnswer: "a"
  },
{
  question: "This Naval officer conceived of the idea of a computer language based on English words. Her work inspired the development of the COBAL programming language.",
    answers: {
      a: "Admiral Alene Duerk",
      b: "Admiral Kathryn Janeway",
      c: "Commander Daphne Blundell",
      d: "Rear Admiral Grace Murray Hopper"
    },
    correctAnswer: "d"
  },
  {
    question: "This woman started working at IBM in 1958, mostly on systems architecture and implementation of operating systems and natural language processors; however, she is best known for having her name on a landmark 2013 Supreme Court case.",
      answers: {
        a: "Susan Obergefell",
        b: "Edith Windsor",
        c: "Marilyn Hacker",
        d: "Julia Undeco"
      },
      correctAnswer: "d"
    }
];


quizContainer.innerHTML = output.join('');
