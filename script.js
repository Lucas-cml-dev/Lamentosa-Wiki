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
// aprendizado a alteração via JS
document.querySelector('#titulop').innerHTML = "🔺DARKNIGHT🔻: <br> A Rainha das Sombras ou Apenas Mais um Mito Sombrio?"