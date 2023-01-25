let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let actions_p = document.getElementById("actions");
let result_p = document.getElementById("result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

getComputerChoice = () => {
  let choices = ["r", "p", "s"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomIndex];

  return randomChoice;
};

convertChoiceToWord = (choice) => {
  switch (choice) {
    case "r":
      return "Rock";
      break;
    case "p":
      return "Paper";
      break;
    case "s":
      return "Scissors";
      break;
    default:
      break;
  }
};

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;

  actions_p.innerHTML = `You chose ${convertChoiceToWord(
    userChoice
  )} and computer chose ${convertChoiceToWord(computerChoice)}`;

  result_p.innerHTML = `You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  actions_p.innerHTML = `You chose ${convertChoiceToWord(
    userChoice
  )} and computer chose ${convertChoiceToWord(computerChoice)}`;

  result_p.innerHTML = `You lose!`;
}

function draw(userChoice, computerChoice) {
  userScore_span = userScore;
  computerScore_span = computerScore;

  actions_p.innerHTML = `You chose ${convertChoiceToWord(
    userChoice
  )} and computer chose ${convertChoiceToWord(computerChoice)}`;

  result_p.innerHTML = "It's a DRAAAAAWW!!!";
}

game = (userChoice) => {
  let computerChoice = getComputerChoice();
  switch (`${userChoice}${computerChoice}`) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;

    default:
      break;
  }
};

main = () => {
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissors_div.addEventListener("click", () => {
    game("s");
  });
};
main();
