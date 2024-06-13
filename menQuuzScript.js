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
    question: `What was the name of the city that Lot fled to during the destruction of Sodom and Gomorrah`,
    answers: {
      a: `Zoar`,
      b: `Bethel`,
      c: `Hebron`,
      d: `Rome`,
    },
    correct: `a`,
  },
  {
    id: 4,
    question: `In which book is the story of Samson found`,
    answers: {
      a: `Peter`,
      b: `Joshua`,
      c: `1 Samuel`,
      d: `Judges`,
    },
    correct: `d`,
  },
  {
    id: 5,
    question: `Who interpreted the dreams of Pharaoh in Egypt`,
    answers: {
      a: `Job`,
      b: `Joseph`,
      c: `Moses`,
      d: `Daniel`,
    },
    correct: `b`,
  },
  {
    id: 6,
    question: `Which prophet confronted King Ahab and Queen Jezebel`,
    answers: {
      a: `Samuel`,
      b: `Elisha`,
      c: `Isaiah`,
      d: `Elijah`,
    },
    correct: `d`,
  },
  {
    id: 7,
    question: `What is the primary focus of the book of Leviticus`,
    answers: {
      a: `Prophecies`,
      b: `Historical Events`,
      c: `Laws and Priestly Rituals`,
      d: `History`,
    },
    correct: `c`,
  },
  {
    id: 8,
    question: `Which book of the Old Testament focuses on rebuilding the walls of Jerusalem`,
    answers: {
      a: `Nehemiah`,
      b: `Ezra`,
      c: `Haggai`,
      d: `Leviticus`,
    },
    correct: `a`,
  },
  {
    id: 9,
    question: `Who was the mother of Samuel, the prophet`,
    answers: {
      a: `Deborah`,
      b: `Hannah`,
      c: `Ruth`,
      d: `Mary`,
    },
    correct: `b`,
  },
  {
    id: 10,
    question: `What was the name of King Solomon’s mother`,
    answers: {
      a: `Deborah`,
      b: `Abigail`,
      c: `Michal`,
      d: `Bathsheba`,
    },
    correct: `d`,
  },
  {
    id: 11,
    question: `What is the name of the Pharisee who visited Jesus at night to discuss His teachings`,
    answers: {
      a: `Gamaliel`,
      b: `Nicodemus`,
      c: `Caiaphas`,
      d: `Stephen`,
    },
    correct: `b`,
  },
  {
    id: 12,
    question: `Who was the first martyr of the Christian church`,
    answers: {
      a: `Peter`,
      b: `James`,
      c: `Stephen`,
      d: `John`,
    },
    correct: `c`,
  },
  {
    id: 13,
    question: `In which city were the disciples first called "Christians"`,
    answers: {
      a: `Ephesus`,
      b: `Jerusalem`,
      c: `Antioch`,
      d: `Bethlehem`,
    },
    correct: `c`,
  },
  {
    id: 14,
    question: `Which Gospel is known for its parables about the Kingdom of Heaven`,
    answers: {
      a: `Mark`,
      b: `Matthew`,
      c: `Luke`,
      d: `John`,
    },
    correct: `b`,
  },
  {
    id: 15,
    question: `Who wrote the Book of Revelation`,
    answers: {
      a: `Simon`,
      b: `Peter`,
      c: `Paul`,
      d: `John`,
    },
    correct: `d`,
  },
  {
    id: 16,
    question: `Which New Testament book focuses on the early church and the spread of the gospel`,
    answers: {
      a: `Acts`,
      b: `Romans`,
      c: `Hebrews`,
      d: `Matthew`,
    },
    correct: `a`,
  },
  {
    id: 17,
    question: `Who was the Roman governor who presided over the trial of Jesus`,
    answers: {
      a: `Herod`,
      b: `Pontius Pilate`,
      c: `Caesar`,
      d: `None of the above`,
    },
    correct: `b`,
  },
  {
    id: 18,
    question: `Who is traditionally believed to have written the Epistle to the Hebrews`,
    answers: {
      a: `John`,
      b: `Apollos`,
      c: `Barnabas`,
      d: `Paul`,
    },
    correct: `d`,
  },
  {
    id: 19,
    question: `What is the name of the hill where Jesus was crucified`,
    answers: {
      a: `Mount of Olives`,
      b: `Mount Zion`,
      c: `Golgotha`,
      d: `Mount Ararat`,
    },
    correct: `c`,
  },
  {
    id: 20,
    question: `Which disciple is known for doubting Jesus' resurrection until he saw Him`,
    answers: {
      a: `Peter`,
      b: `Thomas`,
      c: `John`,
      d: `simon`,
    },
    correct: `b`,
  },
  {
    id: 21,
    question: `What is the longest chapter in the Bible`,
    answers: {
      a: `Psalm 75`,
      b: `Psalm 23`,
      c: `Psalm 100`,
      d: `Psalm 119`,
    },
    correct: `d`,
  },
  {
    id: 22,
    question: `In what language was most of the Old Testament originally written?`,
    answers: {
      a: `Hebrew`,
      b: `Greek`,
      c: `Aramaic`,
      d: `English`,
    },
    correct: `a`,
  },
  {
    id: 23,
    question: `Which king of Israel was known for his wisdom`,
    answers: {
      a: `Saul`,
      b: `David`,
      c: `Solomon`,
      d: `None of the above`,
    },
    correct: `c`,
  },
  {
    id: 24,
    question: `How many books are in the Protestant Old Testament`,
    answers: {
      a: `29`,
      b: `27`,
      c: `66`,
      d: `39`,
    },
    correct: `d`,
  },
  {
    id: 25,
    question: `Who led the Israelites into the Promised Land`,
    answers: {
      a: `Moses`,
      b: `Joshua`,
      c: `Aaron`,
      d: `Option 4`,
    },
    correct: `b`,
  },
  {
    id: 26,
    question: `Which New Testament book is addressed to "Theophilus"`,
    answers: {
      a: `Luke`,
      b: `Acts`,
      c: `Both A and B`,
      d: `None of the above`,
    },
    correct: `c`,
  },
  {
    id: 27,
    question: `Who was swallowed by a great fish`,
    answers: {
      a: `Paul`,
      b: `Daniel`,
      c: `Elijah`,
      d: `Jonah`,
    },
    correct: `d`,
  },
  {
    id: 28,
    question: `What is the shortest book in the New Testament?`,
    answers: {
      a: `Philemon`,
      b: `3 John`,
      c: `Jude`,
      d: `Roman`,
    },
    correct: `b`,
  },
  {
    id: 29,
    question: `Who was the first king of Israel`,
    answers: {
      a: `David`,
      b: `Saul`,
      c: `Solomon`,
      d: `None of the above`,
    },
    correct: `b`,
  },
  {
    id: 30,
    question: `Which apostle was a tentmaker by trade`,
    answers: {
      a: `James`,
      b: `Peter`,
      c: `Paul`,
      d: `John`,
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
