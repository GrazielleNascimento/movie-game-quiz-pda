const quiz = [
  {
    pergunta:
      "Qual é o nome da criatura mágica que é usada para guardar o cofre do Sr. Lestrange em Gringotes, no universo de Harry Potter?",
    respostas: ["Acromântula", "Testrálio", "Hipogrifo", "Dragão Ucraniano"],
    respostaCorreta: "Dragão Ucraniano",
    imagemRelacionada: "harry-potter.jpg",
    corFundo: "#DEBF7E",
    corBotao: "#77510B",
  },

  {
    pergunta:
      "No filme Harry Potter, qual é o nome do feitiço usado para abrir portas?",
    respostas: ["Alohomora", "Expelliarmus", "Accio", "Lumos"],
    respostaCorreta: "Alohomora",
    imagemRelacionada: "harry-potter.jpg",
    corFundo: "#DEBF7E",
    corBotao: "#77510B",
  },
  {
    pergunta: "Em Star Wars, qual é o nome do planeta natal de Han Solo?",
    respostas: ["Tatooine", "Endor", "Coruscant", "Corellia"],
    respostaCorreta: "Corellia",
    imagemRelacionada: "hansolo.jpeg",
    corFundo: "#333a3f",
    corBotao: "#1F497D",
  },
  {
    pergunta: "Quem é o mestre Jedi que treinou Obi-Wan Kenobi em Star Wars?",
    respostas: ["Yoda", "Mace Windu", "Qui-Gon Jinn", "Luke Skywalker"],
    respostaCorreta: "Qui-Gon Jinn",
    imagemRelacionada: "hansolo.jpeg",
    corFundo: "#333a3f",
    corBotao: "#1F497D",
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
    imagemRelacionada: "shrek.jpg",
    corFundo: "#cee5c3",
    corBotao: "#2E8B57",
  },

  {
    pergunta:
      "Qual personagem de Shrek foi baseado em uma figura histórica real?",
    respostas: ["Shrek", "Burro", "Lord Farquaad", "Robin Hood"],
    respostaCorreta: "Robin Hood",
    imagemRelacionada: "shrek.jpg",
    corFundo: "#cee5c3",
    corBotao: "#2E8B57",
  },
];

function iniciarQuiz() {
  let quizField = document.getElementById("campoQuiz");
  let startField = document.getElementById("campoInicio");
  startField.classList.add("none");
  quizField.classList.remove("none");
  nomeUsuario();
  carregarPergunta();
}

function nomeUsuario() {
  let nome;
  do {
    nome = prompt("Informe seu nome: ");
  } while (!nome);
  console.log(nome);
}

const perguntaElement = document.querySelector(".pergunta");
const respostasElements = document.querySelectorAll(".respostas");

const campoResultado = document.getElementById("resultado");

let indicePerguntaAtual = 0;

function carregarPergunta() {
  const perguntaAtual = quiz[indicePerguntaAtual];
  perguntaElement.textContent = perguntaAtual.pergunta;

  perguntaAtual.respostas.forEach((resposta, index) => {
    respostasElements[index].textContent = resposta;
    respostasElements[index].style.backgroundColor = perguntaAtual.corBotao;
  });

  const body = document.body;
  body.style.backgroundColor = perguntaAtual.corFundo;

  const imagemPergunta = document.getElementById("imgPergunta");
  imagemPergunta.src = "assets/images/" + perguntaAtual.imagemRelacionada;

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
      alert("Parabéns!!! Resposta Correta");
      if (indicePerguntaAtual < quiz.length - 1) {
        indicePerguntaAtual++;
        carregarPergunta();
      } else {
        campoInicio.classList.add("none");
        campoResultado.classList.remove("none");
      }
    } else {
      alert("Resposta incorreta, você retornara ao inicio do Quiz");
      indicePerguntaAtual = 0;
      carregarPergunta();
    }
  });
});
