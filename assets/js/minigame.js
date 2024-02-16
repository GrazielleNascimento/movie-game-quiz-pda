const botao = document.getElementById("btnMostrarImagem")
botao.addEventListener("click", function () {
    const imagens = ["personagem_Burro.jpg", "personagem_DarthVader.jpg", "personagem_Dobby.jpg", "personagem_Fiona.jpg", "personagem_Han.jfif", "personagem_HarryPotter.jpg", "personagem_Hermione.jpg", "personagem_Malfoy.jpg", "personagem_Padme.jfif", "personagem_Ronald.jpg", "personagem_Shrek.jpg", "personagem_Voldemort.jpg", "personagem_Yoda.jfif"];
    let indiceAleatorio = Math.floor(Math.random() * imagens.length);
    let imagemSelecionada = imagens[indiceAleatorio];

    let nomeImagem = imagemSelecionada.slice(11, -4)
    document.getElementById("imagemAleatoria").src = "assets/images/" + imagemSelecionada;
    document.getElementById("nomeImagem").innerText = nomeImagem;

    botao.innerText = 'Descobrir novamente';

    let personagemInfo = document.getElementById('info');
    let personagemDesc = document.getElementById('desc');


    const descricaoPersonagens = {
        'Burro': 'Um burro falante que é alegre, extrovertido e sempre pronto para uma piada. Ele pode ser um pouco ingênuo às vezes, mas sua lealdade e coragem são inabaláveis.',
        'DarthVader': 'Sua determinação e poder impressionam todos ao seu redor. Você é capaz de enfrentar qualquer desafio com uma força de vontade implacável. No entanto, tenha cuidado para não se deixar consumir pelo lado negro da sua personalidade. Lembre-se de que o perdão e a redenção sempre são possíveis, mesmo nos momentos mais sombrios.',
        'Dobby': 'Você é uma pessoa extremamente leal, disposta a fazer qualquer coisa pelos seus amigos e entes queridos. Sua gentileza e altruísmo são admiráveis, mas às vezes você pode se colocar em segundo plano. Lembre-se de valorizar também suas próprias necessidades e se permitir aceitar ajuda dos outros quando necessário.',
        'Fiona': 'Sua coragem e independência são verdadeiramente inspiradoras. Você está sempre pronta para enfrentar o mundo de cabeça erguida, sem medo de desafiar as expectativas. No entanto, lembre-se de que é importante confiar nos outros e pedir ajuda quando necessário. Não há vergonha em mostrar vulnerabilidade. ',
        'Han.': 'Seu charme e astúcia o tornam uma pessoa extremamente cativante. Você é conhecido por sua lealdade aos amigos e sua habilidade excepcional em situações difíceis. No entanto, às vezes sua teimosia pode impedi-lo de ver outras perspectivas. Esteja aberto a novas ideias e aprenda a confiar na intuição dos outros.',
        'HarryPotter': 'Sua coragem e determinação o tornam uma pessoa verdadeiramente especial. Você está sempre disposto a lutar pelo que é certo, mesmo que isso signifique enfrentar grandes desafios. No entanto, lembre-se de que é importante cuidar de si mesmo e não se sobrecarregar com responsabilidades. Saiba quando pedir ajuda e confiar nos outros ao seu redor.',
        'Hermione': 'Você é incrivelmente inteligente e dedicado ao aprendizado. Sua sede insaciável por conhecimento o torna um recurso valioso para seus amigos e para qualquer equipe. No entanto, tenha cuidado para não se tornar excessivamente crítico consigo mesmo ou com os outros. Lembre-se de que ninguém é perfeito e todos têm algo a contribuir.',
        'Malfoy': 'Você é astuto e determinado em alcançar seus objetivos. Sua ambição o impulsiona a buscar constantemente o sucesso, mas cuidado para não pisar nos outros no processo. Lembre-se de que a verdadeira grandeza vem da empatia e da compaixão, não apenas do poder ou status.',
        'Padme.': 'Sua coragem e compaixão a tornam uma líder inspiradora. Você está sempre disposto a lutar pelo que é certo e a proteger aqueles que ama. No entanto, não se esqueça de cuidar de si mesma também. É importante encontrar um equilíbrio entre cuidar dos outros e cuidar de si mesma.',
        'Ronald': 'Você é um amigo leal e confiável, sempre lá para apoiar aqueles que ama. Sua generosidade de coração é admirável, mas lembre-se de não se esquecer de si mesmo no processo. Tire um tempo para cuidar de suas próprias necessidades e não tenha medo de pedir ajuda quando precisar.',
        'Shrek': 'Você pode parecer mal-humorado por fora, mas tem um coração de ouro por dentro. Sua lealdade aos seus entes queridos é inabalável, mas às vezes você pode se isolar do mundo ao seu redor. Lembre-se de que é importante permitir que os outros se aproximem e compartilhem seu fardo.',
        'Voldemort': 'Você é poderoso e ambicioso, determinado em alcançar seus objetivos a qualquer custo. No entanto, tenha cuidado para não deixar sua sede de poder consumir você. A verdadeira grandeza vem da bondade e compaixão, não da dominação sobre os outros.',
        'Yoda.': 'Sua sabedoria e compaixão o tornam um líder inspirador. Você está sempre disposto a ajudar os outros e a guiar aqueles que precisam de orientação. No entanto, lembre-se de que é importante não se sobrecarregar com o fardo dos outros. Encontre um equilíbrio entre ajudar os outros e cuidar de si mesmo.'
    };

    personagemDesc.innerHTML = `${nomeImagem}, ${descricaoPersonagens[nomeImagem]}`;
    personagemInfo.classList.remove('none')

});
