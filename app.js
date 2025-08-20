let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('.texto__paragrafo');
let campoDeChute = document.querySelector('.container__input');

// Gera um número inteiro aleatório entre 1 e 100.
let numeroSecreto = parseInt(Math.random() * 100 + 1);

// Variável para contar as tentativas
let tentativas = 1;

// Define o texto inicial da página
titulo.innerHTML = 'Adivinhe o número';
paragrafo.innerHTML = `Escolha um número entre 1 e 100`;

function verificarChute() {
    let chute = campoDeChute.value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        paragrafo.innerHTML = `Parabéns, você acertou! Com ${tentativas} ${palavraTentativa}!`;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            paragrafo.innerHTML = 'O número secreto é menor.';
        } else {
            paragrafo.innerHTML = 'O número secreto é maior.';
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    // Gera um novo número secreto
    numeroSecreto = parseInt(Math.random() * 10 + 1);
    
    // Reseta as tentativas
    tentativas = 1;

    // Reseta a mensagem do parágrafo
    paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

    // Limpa o campo de entrada
    limparCampo();

    // Desabilita o botão "Novo jogo"
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    campoDeChute.value = '';
}