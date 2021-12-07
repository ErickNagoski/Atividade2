function calcula() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);

    const op = document.getElementById('op').value;

    let resultado = 0;
    switch (op) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '/':
            resultado = n1 / n2;
            break;
        case 'x':
            resultado = n1 * n2;
            break;
    }

    let label = document.getElementById('resultado')
    label.innerHTML = resultado
}