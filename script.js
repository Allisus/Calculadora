// Função para atualizar o campo de exibição
function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value = value;
}

  // Função para lidar com os cliques nos botões
function handleClick(event) {
    const buttonValue = event.target.innerText;
    const displayValue = document.getElementById('display').value;

    if (buttonValue === '=') {
      // Calcular o resultado
    try {
        const result = eval(displayValue);
        updateDisplay(result);
    } catch (error) {
        updateDisplay('ERR');
    }
    } else if (buttonValue === 'C') {
      // Limpar a última entrada
    updateDisplay(displayValue.slice(0, -1));
    } else if (buttonValue === 'AC') {
      // Limpar tudo
    updateDisplay('');
    } else if (buttonValue === '+/-') {
      // Alternar o sinal do número
    const number = parseFloat(displayValue);
    updateDisplay(-number);
    } else {
      // Concatenar o número ou operador pressionado
    updateDisplay(displayValue + buttonValue);
    }
}

  // Adicionar um ouvinte de evento para cada botão
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
