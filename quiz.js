const quizData = [
  {
    question: "What is the capital of India?",
    options: { A: "New Delhi", B: "Mumbai", C: "Hyderabad" },
    answer: "A"
  },
  {
    question: "Which language is used to style web pages?",
    options: { A: "HTML", B: "CSS", C: "Python" },
    answer: "B"
  },
  {
    question: "Which tag is used for JavaScript in HTML?",
    options: { A: "<style>", B: "<link>", C: "<script>" },
    answer: "C"
  }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", showQuestion);

function showQuestion() {
  const q = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (const key in q.options) {
    const btn = document.createElement("button");
    btn.textContent = `${key}. ${q.options[key]}`;
    btn.onclick = () => checkAnswer(key);
    optionsDiv.appendChild(btn);
  }

  document.getElementById("quiz-result").textContent = "";
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestionIndex].answer;
  const result = document.getElementById("quiz-result");

  if (selected === correct) {
    result.textContent = "Correct! ✅";
    result.style.color = "green";

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        showQuestion();
      } else {
        document.getElementById("question").textContent = "🎉 Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        result.textContent = "";
      }
    }, 1000);
  } else {
    result.textContent = "Wrong! ❌ Try again.";
    result.style.color = "red";
  }
}