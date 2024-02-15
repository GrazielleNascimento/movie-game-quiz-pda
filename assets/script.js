const quiz = [
  {
    pergunta:
      "Qual é o nome da criatura mágica que é usada para guardar o cofre do Sr. Lestrange em Gringotes, no universo de Harry Potter?",
    respostas: ["Acromântula", "Testrálio", "Hipogrifo", "Dragão Ucraniano"],
    respostaCorreta: "Dragão Ucraniano",
    imagemRelacionada: "harry-potter.jpeg",
  },

  {
    pergunta:
      "No filme Harry Potter, qual é o nome do feitiço usado para abrir portas?",
    respostas: ["Alohomora", "Expelliarmus", "Accio", "Lumos"],
    respostaCorreta: "Alohomora",
    imagemRelacionada: "harry-potter.jpeg",
  },
  {
    pergunta: "Em Star Wars, qual é o nome do planeta natal de Han Solo?",
    respostas: ["Tatooine", "Endor", "Coruscant", "Corellia"],
    respostaCorreta: "Corellia",
    imagemRelacionada: "Hansolo.jpeg",
  },
  {
    pergunta: "Quem é o mestre Jedi que treinou Obi-Wan Kenobi em Star Wars?",
    respostas: ["Yoda", "Mace Windu", "Qui-Gon Jinn", "Luke Skywalker"],
    respostaCorreta: "Qui-Gon Jinn",
    imagemRelacionada: "Hansolo.jpeg",
  },
  {
    pergunta: "Quem é o compositor da trilha sonora de Shrek?",
    respostas: [
      "John Williams",
      "Howard Shore",
      "Hans Zimmer",
      "Harry Gregson-Williams",
    ],
    respostaCorreta: "Harry Gregson-Williams",
    imagemRelacionada: "shrek.jpeg",
  },

  {
    pergunta:
      "Qual personagem de Shrek foi baseado em uma figura histórica real?",
    respostas: ["Shrek", "Burro", "Lord Farquaad", "Robin Hood"],
    respostaCorreta: "Robin Hood",
    imagemRelacionada: "shrek.jpeg",
  },
];

function iniciarQuiz() {
  let quizField = document.getElementById("campoQuiz");
  let startField = document.getElementById("campoInicio");
  startField.classList.add("none");
  quizField.classList.remove("none");
  carregarPergunta();
}

const perguntaElement = document.querySelector(".pergunta");
const respostasElements = document.querySelectorAll(".respostas");

let indicePerguntaAtual = 0;

function carregarPergunta() {
  const perguntaAtual = quiz[indicePerguntaAtual];
  perguntaElement.textContent = perguntaAtual.pergunta;

  perguntaAtual.respostas.forEach((resposta, index) => {
    respostasElements[index].textContent = resposta;
  });

  const countElement = document.getElementById("count");
  for (let i = 0; i < quiz.length; i++) {
    if (i === indicePerguntaAtual) {
      countElement.textContent = `${i + 1}/6`;
      break;
    }
  }
}

respostasElements.forEach((respostasElement) => {
  respostasElement.addEventListener("click", () => {
    if (
      respostasElement.textContent === quiz[indicePerguntaAtual].respostaCorreta
    ) {
      alert("Parabens!!! Resposta Correta");
    } else {
      alert("Resposta incorreta, você retornara ao inicio do Quiz");
      indicePerguntaAtual = 0;
      carregarPergunta();
    }
  });
});
