function fatorial() {
    const n = parseInt(document.getElementById('n').value);

    if (n >= 0) {
        var total = n;

        for (i = 1; i < n; i++) {
            total = total * i;
        }
    } else {
        alert("N deve ser maior que 0!")
    }

    document.getElementById('resultado').innerHTML = `O fatorial de ${n} é ${total}`
}