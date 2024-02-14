
function iniciarQuiz() {
    startField.classList.add('none');
    quizField.classList.remove('none');
    carregarPergunta();
};


let quizField = document.getElementById('quizField');
let startField = document.getElementById('startField');

const quiz = [
    {
        pergunta: "Qual é o nome da criatura mágica que é usada para guardar o cofre do Sr. Lestrange em Gringotes, no universo de Harry Potter?",
        respostas: ["Acromântula", "Testrálio", "Hipogrifo", "Dragão Ucraniano"],
        respostaCorreta: "Dragão Ucraniano"
    },
    {
        pergunta: "Em Star Wars, qual é o nome do planeta natal de Han Solo?",
        respostas: ["Tatooine", "Endor", "Coruscant", "Corellia"],
        respostaCorreta: "Corellia"
    },
    {
        pergunta: "Quem é o compositor da trilha sonora de Shrek?",
        respostas: ["John Williams", "Howard Shore", "Hans Zimmer", "Harry Gregson-Williams"],
        respostaCorreta: "Harry Gregson-Williams"
    },

    {
        pergunta: "No filme Harry Potter, qual é o nome do feitiço usado para abrir portas?",
        respostas: ["Alohomora", "Expelliarmus", "Accio", "Lumos"],
        respostaCorreta: "Alohomora"
    },
    {
        pergunta: "Qual personagem de Shrek foi baseado em uma figura histórica real?",
        respostas: ["Shrek", "Burro", "Lord Farquaad", "Robin Hood"],
        respostaCorreta: "Robin Hood"
    },
    {
        pergunta: "Quem é o mestre Jedi que treinou Obi-Wan Kenobi em Star Wars?",
        respostas: ["Yoda", "Mace Windu", "Qui-Gon Jinn", "Luke Skywalker"],
        respostaCorreta: "Qui-Gon Jinn"
    }
];

const perguntaElement = document.querySelector('.pergunta');
const respostasElements = document.querySelectorAll('.respostas');

let indicePerguntaAtual = 0;
