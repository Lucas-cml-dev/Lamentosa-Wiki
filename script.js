function calculate() {
    // Obter o valor de x do input
    const x = parseFloat(document.getElementById('inputValue').value);

    // Verificar se o valor é um número
    if (isNaN(x)) {
        document.getElementById('result').textContent = 'Por favor, insira um número válido.';
        return;
    }

    // f(x) = 0.44x^3 - 5.15x^2 + 20.05x - 26.54
    const result = 0.44 * Math.pow(x, 3) - 5.15 * Math.pow(x, 2) + 20.05 * x - 26.54;

    // Formatar o resultado como um valor em dólares
    const formattedResult = result.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // Exibir o resultado formatado
    document.getElementById('result').textContent = `Resultado: ${formattedResult}`;
}
// end calc 

// mostrar boddy
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}
// end boddy

// Exibir a seção inicial ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
// aprendizado a alteração via JSzhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh


document.getElementById("calculate").addEventListener("click", () => {
    // Obter o valor base da seleção
    const baseValue = parseFloat(document.getElementById("names").value);
  
    // Verificar se a checkbox de 30% está marcada
    const increase30Checked = document.getElementById("increase30").checked;
  
    // Verificar se a checkbox de 20% está marcada
    const increase20Checked = document.getElementById("increase20").checked;
  
    // Obter o multiplicador selecionado
    const multiplier = parseInt(document.getElementById("multiplier").value);
  
    // Inicializar a porcentagem total
    let totalPercentage = 0;
  
    // Adicionar 30% se a checkbox estiver marcada
    if (increase30Checked) {
      totalPercentage += 0.3; // 30%
    }
  
    // Adicionar 20% se a checkbox estiver marcada
    if (increase20Checked) {
      totalPercentage += 0.2; // 20%
    }
  
    // Adicionar o aumento do multiplicador
    const multiplierIncrease = multiplier * 0.05; // 5% para cada 1x
    totalPercentage += multiplierIncrease;
  
    // Calcular o valor com as porcentagens somadas
    let finalValue = baseValue + baseValue * totalPercentage;
  
    // Verificar se a checkbox de 50% está marcada
    const increase50Checked = document.getElementById("increase50").checked;
  
    // Adicionar 50% ao resultado final, se necessário
    if (increase50Checked) {
      finalValue += finalValue * 0.5; // 50%
    }
  
    // Atualizar o resultado na página
    document.getElementById("result").textContent = `R$ ${finalValue.toFixed(2)}`;
  });
  
  