//Here are all the questions from 1 - 30

const questions = [
  {
    id: 1,
    question: ` In which verse does the Bible first mention the concept of "Sabbath"`,
    answers: {
      a: `Leviticus 25:4`,
      b: `Exodus 20:8-11`,
      c: ` Genesis 2:2-3`,
      d: ` Genesis 4:3-5`,
    },
    correct: `c`,
  },

  {
    id: 2,
    question: ` Who was the first high priest of Israel`,
    answers: {
      a: `Joshua`,
      b: `Aaron`,
      c: `John`,
      d: `Moses`,
    },
    correct: `b`,
  },
  {
    id: 3,
    question: `What was the name of the city that Lot fled to during the destruction of Sodom and Gomorrah?`,
    answers: {
      a: `Zoar`,
      b: `Bethel`,
      c: `Hebron`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 4,
    question: `In which book is the story of Samson found?`,
    answers: {
      a: `Judges`,
      b: `Joshua`,
      c: `1 Samuel`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 5,
    question: `Who interpreted the dreams of Pharaoh in Egypt?`,
    answers: {
      a: `Joseph`,
      b: `Daniel`,
      c: `Moses`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 6,
    question: `Which prophet confronted King Ahab and Queen Jezebel?`,
    answers: {
      a: `Elijah`,
      b: `Elisha`,
      c: `Isaiah`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 7,
    question: `What is the primary focus of the book of Leviticus?`,
    answers: {
      a: `Laws and Priestly Rituals`,
      b: `Historical Events`,
      c: `Prophecies`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 8,
    question: `Which book of the Old Testament focuses on rebuilding the walls of Jerusalem?`,
    answers: {
      a: `Nehemiah`,
      b: `Ezra`,
      c: `Haggai`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 9,
    question: `Who was the mother of Samuel, the prophet?`,
    answers: {
      a: `Hannah`,
      b: `Deborah`,
      c: `Ruth`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 10,
    question: `What was the name of King Solomon’s mother?`,
    answers: {
      a: `Bathsheba`,
      b: `Abigail`,
      c: `Michal`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 11,
    question: `What is the name of the Pharisee who visited Jesus at night to discuss His teachings?`,
    answers: {
      a: `Nicodemus`,
      b: `Gamaliel`,
      c: `Caiaphas`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 12,
    question: `Who was the first martyr of the Christian church?`,
    answers: {
      a: `Stephen`,
      b: `James`,
      c: `Peter`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 13,
    question: `In which city were the disciples first called "Christians"?`,
    answers: {
      a: `Antioch`,
      b: `Jerusalem`,
      c: `Ephesus`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 14,
    question: `Which Gospel is known for its parables about the Kingdom of Heaven?`,
    answers: {
      a: `Matthew`,
      b: `Mark`,
      c: `Luke`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 15,
    question: `Who wrote the Book of Revelation?`,
    answers: {
      a: `John`,
      b: `Peter`,
      c: `Paul`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 16,
    question: `Which New Testament book focuses on the early church and the spread of the gospel?`,
    answers: {
      a: `Acts`,
      b: `Romans`,
      c: `Hebrews`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 17,
    question: `Who was the Roman governor who presided over the trial of Jesus?`,
    answers: {
      a: `Pontius Pilate`,
      b: `Herod`,
      c: `Caesar`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 18,
    question: `Who is traditionally believed to have written the Epistle to the Hebrews?`,
    answers: {
      a: `Paul`,
      b: `Apollos`,
      c: `Barnabas`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 19,
    question: `What is the name of the hill where Jesus was crucified?`,
    answers: {
      a: `Golgotha`,
      b: `Mount Zion`,
      c: `Mount of Olives`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 20,
    question: `Which disciple is known for doubting Jesus' resurrection until he saw Him?`,
    answers: {
      a: `Thomas`,
      b: `Peter`,
      c: `John`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 21,
    question: `What is the longest chapter in the Bible?`,
    answers: {
      a: `Psalm 119`,
      b: `Psalm 23`,
      c: `Psalm 100`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 22,
    question: `In what language was most of the Old Testament originally written?`,
    answers: {
      a: `Hebrew`,
      b: `Greek`,
      c: `Aramaic`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 23,
    question: `Which king of Israel was known for his wisdom?`,
    answers: {
      a: `Solomon`,
      b: `David`,
      c: `Saul`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 24,
    question: `How many books are in the Protestant Old Testament?`,
    answers: {
      a: `39`,
      b: `27`,
      c: `66`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 25,
    question: `Who led the Israelites into the Promised Land?`,
    answers: {
      a: `Joshua`,
      b: `Moses`,
      c: `Aaron`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 26,
    question: `Which New Testament book is addressed to "Theophilus"?`,
    answers: {
      a: `Luke`,
      b: `Acts`,
      c: `Both A and B`,
      d: `Option 4`,
    },
    correct: `c`,
  },
  {
    id: 27,
    question: `Who was swallowed by a great fish?`,
    answers: {
      a: `Jonah`,
      b: `Daniel`,
      c: `Elijah`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 28,
    question: `What is the shortest book in the New Testament?`,
    answers: {
      a: `3 John`,
      b: `Philemon`,
      c: `Jude`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 29,
    question: `Who was the first king of Israel?`,
    answers: {
      a: `Saul`,
      b: `David`,
      c: `Solomon`,
      d: `Option 4`,
    },
    correct: `a`,
  },
  {
    id: 30,
    question: `Which apostle was a tentmaker by trade?`,
    answers: {
      a: `Paul`,
      b: `Peter`,
      c: `James`,
      d: `Option 4`,
    },
    correct: `a`,
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
