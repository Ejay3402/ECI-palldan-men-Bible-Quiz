//Here are all the questions from 1 - 30

const questions = [
  {
    id: 1,
    question: ` In which verse does the Bible first mention the concept of "Sabbath"`,
    answers: {
      a: `A. Leviticus 25:4`,
      b: `B. Exodus 20:8-11`,
      c: `C. Genesis 2:2-3`,
      d: `D. Genesis 4:3-5`,
    },
    correct: `c`,
  },

  {
    id: 2,
    question: ` Who was the first high priest of Israel`,
    answers: {
      a: `A. Joshua`,
      b: `B. Aaron`,
      c: `C. John`,
      d: `D. Moses`,
    },
    correct: `b`,
  },
  {
    id: 3,
    question: `What was the name of the city that Lot fled to during the destruction of Sodom and Gomorrah`,
    answers: {
      a: `A. Zoar`,
      b: `B. Bethel`,
      c: `C. Hebron`,
      d: `D. Rome`,
    },
    correct: `a`,
  },
  {
    id: 4,
    question: `In which book is the story of Samson found`,
    answers: {
      a: `A. Peter`,
      b: `B. Joshua`,
      c: `C. 1 Samuel`,
      d: `D. Judges`,
    },
    correct: `d`,
  },
  {
    id: 5,
    question: `Who interpreted the dreams of Pharaoh in Egypt`,
    answers: {
      a: `A. Job`,
      b: `B. Joseph`,
      c: `C. Moses`,
      d: `D. Daniel`,
    },
    correct: `b`,
  },
  {
    id: 6,
    question: `Which prophet confronted King Ahab and Queen Jezebel`,
    answers: {
      a: `A. Samuel`,
      b: `B. Elisha`,
      c: `C. Isaiah`,
      d: `D. Elijah`,
    },
    correct: `d`,
  },
  {
    id: 7,
    question: `What is the primary focus of the book of Leviticus`,
    answers: {
      a: `A. Prophecies`,
      b: `B. Historical Events`,
      c: `C. Laws and Priestly Rituals`,
      d: `D. History`,
    },
    correct: `c`,
  },
  {
    id: 8,
    question: `Which book of the Old Testament focuses on rebuilding the walls of Jerusalem`,
    answers: {
      a: `A. Nehemiah`,
      b: `B.Ezra`,
      c: `C. Haggai`,
      d: `D. Leviticus`,
    },
    correct: `a`,
  },
  {
    id: 9,
    question: `Who was the mother of Samuel, the prophet`,
    answers: {
      a: `A. Deborah`,
      b: `B. Hannah`,
      c: `C. Ruth`,
      d: `D. Mary`,
    },
    correct: `b`,
  },
  {
    id: 10,
    question: `What was the name of King Solomon’s mother`,
    answers: {
      a: `A. Deborah`,
      b: `B. Abigail`,
      c: `C. Mary`,
      d: `D. Bathsheba`,
    },
    correct: `d`,
  },
  {
    id: 11,
    question: `What is the name of the Pharisee who visited Jesus at night to discuss His teachings`,
    answers: {
      a: `A. Gamaliel`,
      b: `B. Nicodemus`,
      c: `C. Caiaphas`,
      d: `D. Stephen`,
    },
    correct: `b`,
  },
  {
    id: 12,
    question: `Who was the first martyr of the Christian church`,
    answers: {
      a: `A. Peter`,
      b: `B. James`,
      c: `C. Stephen`,
      d: `D. John`,
    },
    correct: `c`,
  },
  {
    id: 13,
    question: `In which city were the disciples first called "Christians"`,
    answers: {
      a: `A. Ephesus`,
      b: `B. Jerusalem`,
      c: `C. Antioch`,
      d: `D. Bethlehem`,
    },
    correct: `c`,
  },
  {
    id: 14,
    question: `Which Gospel is known for its parables about the Kingdom of Heaven`,
    answers: {
      a: `A. Mark`,
      b: `B. Matthew`,
      c: `C. Luke`,
      d: `D. John`,
    },
    correct: `b`,
  },
  {
    id: 15,
    question: `Who wrote the Book of Revelation`,
    answers: {
      a: `A. Simon`,
      b: `B. Peter`,
      c: `C. Paul`,
      d: `D. John`,
    },
    correct: `d`,
  },
  {
    id: 16,
    question: `Which New Testament book focuses on the early church and the spread of the gospel`,
    answers: {
      a: `A. Acts`,
      b: `B. Romans`,
      c: `C. Hebrews`,
      d: `D. Matthew`,
    },
    correct: `a`,
  },
  {
    id: 17,
    question: `Who was the Roman governor who presided over the trial of Jesus`,
    answers: {
      a: `A. Herod`,
      b: `B. Pontius Pilate`,
      c: `C. Caesar`,
      d: `D. None of the above`,
    },
    correct: `b`,
  },
  {
    id: 18,
    question: `Who is traditionally believed to have written the Epistle to the Hebrews`,
    answers: {
      a: `A. John`,
      b: `B. Apollos`,
      c: `C. Barnabas`,
      d: `D. Paul`,
    },
    correct: `d`,
  },
  {
    id: 19,
    question: `What is the name of the hill where Jesus was crucified`,
    answers: {
      a: `A. Mount of Olives`,
      b: `B. Mount Zion`,
      c: `C. Golgotha`,
      d: `D. Mount Ararat`,
    },
    correct: `c`,
  },
  {
    id: 20,
    question: `Which disciple is known for doubting Jesus' resurrection until he saw Him`,
    answers: {
      a: `A. Peter`,
      b: `B. Thomas`,
      c: `C. John`,
      d: `D. simon`,
    },
    correct: `b`,
  },
  {
    id: 21,
    question: `What is the longest chapter in the Bible`,
    answers: {
      a: `A. Psalm 75`,
      b: `B. Psalm 23`,
      c: `C. Psalm 100`,
      d: `D. Psalm 119`,
    },
    correct: `d`,
  },
  {
    id: 22,
    question: `In what language was most of the Old Testament originally written?`,
    answers: {
      a: `A. Hebrew`,
      b: `B. Greek`,
      c: `C. Aramaic`,
      d: `D. English`,
    },
    correct: `a`,
  },
  {
    id: 23,
    question: `Which king of Israel was known for his wisdom`,
    answers: {
      a: `A. Saul`,
      b: `B. David`,
      c: `C. Solomon`,
      d: `D. None of the above`,
    },
    correct: `c`,
  },
  {
    id: 24,
    question: `How many books are in the Protestant Old Testament`,
    answers: {
      a: `A. 29`,
      b: `B. 27`,
      c: `C. 66`,
      d: `D. 39`,
    },
    correct: `d`,
  },
  {
    id: 25,
    question: `Who led the Israelites into the Promised Land`,
    answers: {
      a: `A. Moses`,
      b: `B. Joshua`,
      c: `C. Aaron`,
      d: `D. Option 4`,
    },
    correct: `b`,
  },
  {
    id: 26,
    question: `Which New Testament book is addressed to "Theophilus"`,
    answers: {
      a: `A. Luke`,
      b: `B. Acts`,
      c: `C. Both A and B`,
      d: `D. None of the above`,
    },
    correct: `c`,
  },
  {
    id: 27,
    question: `Who was swallowed by a great fish`,
    answers: {
      a: `A. Paul`,
      b: `B. Daniel`,
      c: `C. Elijah`,
      d: `D. Jonah`,
    },
    correct: `d`,
  },
  {
    id: 28,
    question: `What is the shortest book in the New Testament?`,
    answers: {
      a: `A. Philemon`,
      b: `B. 3 John`,
      c: `C. Jude`,
      d: `D. Roman`,
    },
    correct: `b`,
  },
  {
    id: 29,
    question: `Who was the first king of Israel`,
    answers: {
      a: `A. David`,
      b: `B. Saul`,
      c: `C. Solomon`,
      d: `D. None of the above`,
    },
    correct: `b`,
  },
  {
    id: 30,
    question: `Which apostle was a tentmaker by trade`,
    answers: {
      a: `A. James`,
      b: `B. Peter`,
      c: `C. Paul`,
      d: `D. John`,
    },
    correct: `c`,
  },
];

while (questions.length < 30) {
  questions.push({
    id: questions.length + 1,
    q: `${questions.length + 1}`,
    answers: {
      a: `option 1`,
      b: `option 2`,
      c: `option 3`,
      d: `option 4`,
    },
    correct: `a`,
  });
}

// Variables
const optAns = document.querySelectorAll(".opt-Ans");
const questionHead = document.querySelector("#questionHead");
const quizApp = document.querySelector("#quiz");
const btnCon = document.querySelector("#btnCon");

let currentQuestionIndex = -1; // no question selected at the moment
let selectedAnswer = "";
let answeredQuestion = [];

// This function loads the questions
const loadQuestion = (index) => {
  deselectedAnswer();
  currentQuestionIndex = index;

  let questionData = questions[index];
  questionHead.textContent = `Question ${index + 1} . ${questionData.question}`;
  optAns.forEach((btn) => {
    btn.textContent = questionData.answers[btn.id];
    btn.disabled = false;
    btn.classList.remove("correct", "incorrect");
    btn.style.background = ""; // Reset background
    btn.style.transform = ""; // Reset transform
  });
  quizApp.style.display = "block";
};

const deselectedAnswer = () => {
  selectedAnswer = "";
  optAns.forEach((btn) => {
    btn.classList.remove("selected");
    btn.style.background = ""; // Reset background
    btn.style.transform = ""; // Reset transform
  });
};

// Select answer function
const selectAnswer = (answer, i) => {
  if (currentQuestionIndex < 0) {
    alert(`Pick a question from 1 - 30`);
    return;
  }

  deselectedAnswer();
  selectedAnswer = answer;

  const selectedBtn = document.getElementById(answer);

  if (selectedAnswer === questions[currentQuestionIndex].correct) {
    selectedBtn.classList.add("correct");
    selectedBtn.style.background = "green";
    selectedBtn.style.transform = "scale(1.2)";
  } else {
    selectedBtn.classList.add("incorrect");
    selectedBtn.style.background = "red";

    // Highlight the correct answer
    const correctAnswer = questions[currentQuestionIndex].correct;
    const correctBtn = document.getElementById(correctAnswer);
    correctBtn.style.background = "green";
    correctBtn.style.transform = "scale(1.2)";
  }

  const currentBtn = document.querySelectorAll(".optionsSelect button")[
    currentQuestionIndex
  ];

  if (!answeredQuestion.includes(currentQuestionIndex)) {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      answeredQuestion.push(currentQuestionIndex);
      currentBtn.disabled = true;
      currentBtn.style.background = "#f31";
      currentBtn.style.opacity = "0.5";
      currentBtn.style.cursor = "no-drop";
      optAns.forEach((btn) => {
        btn.disabled = true;
      });
    } else {
      currentBtn.disabled = true;
      currentBtn.style.background = "#f31";
      currentBtn.style.opacity = "0.5";
      currentBtn.style.cursor = "no-drop";
      optAns.forEach((btn) => {
        btn.disabled = true;
      });
    }
  }

  if (answeredQuestion.length === questions.length) {
    alert(`You have already answered all the questions`);
  }
};

// Load nothing initially
if (questions.length < 0) {
  quizApp.style.display = "none";
}


/*Animations*/

const index1 = document.querySelector('.index-h2');

const main = document.querySelector('.men-quiz');

const indexText = `Evangelical Church International`;

const mainText = `Men Bible Quiz`;

let count = 1;

const showText = () => {

  index1.textContent = indexText.slice(0 , count);
  count++;

};

setInterval(showText, 150);

const showText1 = () => {

  main.textContent = mainText.slice(0 , count);
  count++;

  if (count > mainText.length) {
      count = 1;
  }

};

setInterval(showText1, 200);
