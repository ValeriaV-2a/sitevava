const dialogues = [
    {
        text: "Você acaba de se mudar para uma nova casa ao lado de uma floresta. O que você faz?",
        choices: [
            "Ajuda seus pais a terminar de organizar as coisas.",
            "Dorme um pouco, toda essa mudança foi muito cansativa.",
            "Sai pra ver como é lá fora."
        ],
        responses: [
            "Vocês terminam rápido, e você decide ir lá fora conhecer a floresta",
            "Depois de dormir, você resolve comer algo e sai lá fora para explorar a floresta.",
            "Depois de andar e tirar fotos da floresta, você se sente cansado."
        ]
    },
    {
        text: "Você escontra uma casa antiga, o que você faz?",
        choices: [
            "Bate na porta.",
            "Olha pela janela.",
            "Toca a campainha."
        ],
        responses: [
            "Um homem que parece um animal meio humano abre, ele se apresenta como Sr. Lobo.",
            "Ninguém abre e ao tentar voltar para casa você se perde e acaba morrendo de frio e fome. Volte ao início.",
            "Um homem que se apresenta como Sr. lobo abre a porta."
        ]
    },
    {
        text: "Você entra na casa com a permissão do Sr. Lobo, o que você quer comer?",
        choices: [
            "Café e bolo.",
            "Panquecas.",
            "Salada."
        ],
        responses: [
            "Estava uma delícia.",
            "Estava uma delícia.",
            "Estava uma delícia."
        ]
    },
    {
        text: "Depois de comer e conversar, o Sr. Lobo sugere alguma atividade para realizarem juntos, o que você quer fazer ?",
        choices: [
            "Andar pela floresta.",
            "Jogar xadrez.",
            "Bater um papo."
        ],
        responses: [
            "Tinha armadilhas no caminho, você e o Sr. Lobo se machucaram muito, volte ao início.",
            "Sr. Lobo adorou! É o jogo preferido do Sr. Lobo.",
            "Vocês ficaram mais próximos!."
        ]
    },
    {
        text: "O dia passou muito rápido! Anoiteceu e você não sabe o caminho de volta para casa, o Sr. Lobo permite você dormir na casa dele, onde você quer dormir?"
        choices: [
            "Ignorar o horário e tentar descobrir o caminho para casa.",
            "Quarto de hóspedes.",
            "Banheiro."
        ],
        responses: [
             "Péssima escolha! Você se perde na floresta e um animal te ataca. Volte para o início do jogo.",
             "O Sr. Lobo arruma o quarto para você.",
             "Sr Lobo te acha esquisito, mas permite."
        ]
   },
   {
        text: "Você acorda de madrugada com um barulho vindo do piso de baixo, o que você faz?"
        choices: [
            "Que barulho?",
            "Ignora e volta a dormir.",
            "Vai ver o que era."
        ]
        responses: [
            "Seja lá o que tinha lá embaixo, subiu as escadas e te atacou. Fim de jogo para você!",
            "Você dorme bem e quando acorda no dia seguinte ele te ajuda a voltar para casa! Parabéns! Você fez um ótimo jogo!"
            "Havia um bicho lá embaixo, ele te atacou. Fim de jogo para você!"


let currentStep = 0;

function updateDialogue() {
    const dialogue = dialogues[currentStep];
    document.getElementById('dialogue-text').textContent = dialogue.text;
    document.getElementById('choice1').textContent = dialogue.choices[0];
    document.getElementById('choice2').textContent = dialogue.choices[1];
    document.getElementById('choice3').textContent = dialogue.choices[2];
    
    if (currentStep === dialogues.length - 1) {
        document.getElementById('choices-container').style.display = 'block'; // Garante que as escolhas apareçam na última etapa
    }
}

function makeChoice(choiceIndex) {
    const dialogue = dialogues[currentStep];
    const response = dialogue.responses[choiceIndex];
    document.getElementById('dialogue-text').textContent = response;
    
    if (response.includes("Leonardo confessa que também tem sentimentos por você.") || response.includes("Leonardo está feliz em continuar se conhecendo e ver onde isso leva.")) {
        showConfetti();
    }

    currentStep++;
    
    if (currentStep < dialogues.length) {
        setTimeout(updateDialogue, 2000); // Espera 2 segundos antes de mostrar a próxima pergunta
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('choices-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    updateDialogue();
}

function createHearts() {
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

function clearHearts() {
    const container = document.getElementById('hearts-container');
    container.innerHTML = ''; // Limpa corações anteriores
}

function showConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Limpa confetes anteriores
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
}

createHearts(); // Chama esta função para criar corações na inicialização do jogo
