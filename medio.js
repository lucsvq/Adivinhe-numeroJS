
let numeroSecreto = Math.trunc(Math.random()*20)+1;
let score = 5
let highscore = 0


document.querySelector('#checar').addEventListener('click', function() {
    const btnCheck = Number(document.querySelector('#inputEscNum').value);
    console.log(btnCheck);

    if(!btnCheck) {
        document.querySelector('#start').textContent = '⛔ Nao é numero!';
    }else if(btnCheck === numeroSecreto) {
        document.querySelector('#start').textContent = '🎉 Numero Correto!';
        document.querySelector('#number').textContent = numeroSecreto
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('#boxNumber').style.width = '200px';
        document.querySelector('#checar').style.display = 'none'

        highscore++;
        document.querySelector('#highscore').textContent = highscore

    }else if(btnCheck > numeroSecreto) {
        if(score > 1) {
            document.querySelector('#start').textContent = '📈 Muito alto!'

            score--;
            document.querySelector('#score').textContent = score
        } else {
            document.querySelector('#start').textContent = '💥 Voce perdeu'
            document.querySelector('#score').textContent = 0
            document.querySelector('#number').textContent = numeroSecreto
            document.querySelector('body').style.backgroundColor = '#d45353';
            document.querySelector('#boxNumber').style.width = '200px';
            document.querySelector('#highscore').textContent = 0
        }
    }else if(btnCheck < numeroSecreto) {
        if(score > 1) {
            document.querySelector('#start').textContent = '📉 Muito baixo!'

            score--;
            document.querySelector('#score').textContent = score
        } else {
            document.querySelector('#start').textContent = '💥 Voce perdeu'
            document.querySelector('#score').textContent = 0
            document.querySelector('body').style.backgroundColor = '#d45353';
            document.querySelector('#boxNumber').style.width = '200px';
            document.querySelector('#highscore').textContent = 0
            document.querySelector('#number').textContent = numeroSecreto
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    numeroSecreto = Math.trunc(Math.random()*20)+1;
    document.querySelector('#inputEscNum').value = '';
    document.querySelector('#start').textContent = 'Começando a adivinhar. . .'
    document.querySelector('#number').textContent = '?'
    document.querySelector('#score').textContent = score
    document.querySelector('#boxNumber').style.width = '100px';
    document.querySelector('body').style.backgroundColor = '#000000';
    document.querySelector('#checar').style.display = 'block'
})