
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
    },]
