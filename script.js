document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o formulário existe no DOM
    const imcForm = document.getElementById('imc-form');
    if (imcForm) {
        // Script para o formulário de cálculo do IMC
        imcForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Recebe os dados da pessoa através do input
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);

            // Verifica se os valores são válidos
            if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
                alert('Por favor, insira valores válidos de altura e peso.');
                return;
            }

            // Calcula o IMC
            const imc = (peso / (altura * altura)).toFixed(2);

            // Exibe o resultado
            const resultado = document.getElementById('resultado');

            // Determina a classificação do IMC
            let classificacao = '';

            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
            } else {
                classificacao = 'Obesidade';
            }

            resultado.innerHTML = `Seu IMC é ${imc} (${classificacao}).`;
        });
    }

    // Script para o menu hamburguer
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menu = document.getElementById('menu');

    if (menuHamburguer && menu) {
        menuHamburguer.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }
});
