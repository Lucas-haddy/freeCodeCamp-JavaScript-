const questions = [
  {
    category : "JavaScript",
    question : "What year was JavaScript released in?",
    choices : ["1989", "1995", "2002"],
    answer : "1995"
  },
  {
    category : "World War 1",
    question : "What year did World War 1 start?",
    choices : ["1910", "1914", "1918"],
    answer : "1914"
  },
  {
    category : "Space Flight",
    question : "Who was the first man to walk on the moon?",
    choices : ["Buzz Aldrin", "Neil Armstrong", "Ryland Grace"],
    answer : "Neil Armstrong"
  },
  {
    category : "Monty Python",
    question : "What is the velocity of an unladen swallow?",
    choices : ["I don't know that", "An African Swallow", "A European Swallow"],
    answer : "I don't know that"
  },
  {
    category : "Mass Effect",
    question : "Which race was uplifted by Salarians to fight Rachni?",
    choices : ["Krogan", "Geth", "Elcor"],
    answer : "Krogan"
  }
];

const getRandomQuestion = (questionsArray) => {
  const randomIndex = Math.floor(Math.random()*questionsArray.length);
  return questionsArray[randomIndex];
}

const getRandomComputerChoice = (choicesArray) => {
  const randomChoice = Math.floor(Math.random()*choicesArray.length);
  return choicesArray[randomChoice];
}

const getResults = (questionObject, computerChoice) => {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  };
};