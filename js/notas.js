function calcula() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const n3 = parseFloat(document.getElementById('n3').value);
    const n4 = parseFloat(document.getElementById('n4').value);

    const resultado = ((n1 + n2 + n3 + n4) / 4)

    document.getElementById('resultado').innerHTML = resultado;

}