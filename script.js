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
// Captura o elemento onde o HTML será inserido
const conteudo = document.getElementById("conteudo");

// Conteúdo HTML extenso que será adicionado
const htmlExtenso = `
    <p id="descricaop">                  
        No submundo onde a noite reina soberana e o sangue escorre pelas garras e presas afiadas, uma figura se destaca entre vampiros sedentos e lobisomens furiosos: <strong>🔺DARKNIGHT🔻</strong>, a autoproclamada Queen das trevas. Seu nome ecoa como um sussurro em becos escuros e campos de batalha: respeitada por uns, detestada por outros. Uma coisa é certa: ela adora causar. <br> <br>
        
        <strong>Ego maior que um vampiro ancião?</strong> Talvez. <strong>Veneno mais afiado que as presas de um Nosferatu?</strong> Com certeza. Se há treta, <strong>🔺DARKNIGHT🔻</strong> está no olho do furacão, armada com sarcasmo e suas palavras ácidas como estacas de prata. Alguns dizem que ela não passa de um mito — uma lenda urbana criada para satisfazer a carência de alguém? Talvez. Outros sussurram que ela roubou a conta que usa, como um vampiro usurpa a vida de sua presa.
        Uma sombra ou um delírio?<br> <br>
        
        Enquanto os lobisomens uivam e os vampiros conspiram nas sombras, as teorias se espalham como praga:
        
        <ul class="ulpostagem" style="text-align: left;"> <strong>
            <li id="lipostagem" style="text-align: left;"> 
                <i><del>"Ela é real ou apenas uma namorada imaginária na mente perturbada de algum mortal?"</del></i>
            </li>
            <li id="lipostagem" style="text-align: left;">
                <i><del>"Não é digna de seu título: usurpou o sangue e a glória de outra criatura."</del></i>
            </li>
        </ul> </strong> 
        
        <p>
            Enquanto uns tentam desmascará-la, ela segue reinando na escuridão, alimentando a própria lenda — seja matando boss ou com o puro terror psicológico de sua presença. <br> <br>
            
            Seu humor? Tão sombrio quanto uma cripta esquecida. Sua língua? Uma lâmina prateada que rasga o ego de qualquer desavisado. Amada ou odiada, <strong>🔺DARKNIGHT🔻</strong> faz questão de deixar claro: neste jogo de vampiros e lobisomens, a Rainha das Sombras só aceita dois destinos para você: <br>
            
                <i>
                    Servir ao seu reinado, <br>
                    Uivar de ódio. <br>
                </i>
            
            E você? Já encontrou <strong>🔺DARKNIGHT🔻</strong> sob o luar? Está do lado dela, ou é mais uma vítima em sua lista?
        </p>
    </p>
`;

// Adiciona o conteúdo HTML dentro da div com id "conteudo"
conteudo.innerHTML = htmlExtenso;
