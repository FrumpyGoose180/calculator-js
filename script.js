let input = document.getElementById('input');

function btnclicked(val) {
    var valore = val;
    if (input.value == 0 && input.value != '=') {
        if (val == '.') {
            input.value = '0' + valore;
        } else if (val == '=') {
            input.value = 0;
        } else {
            input.value += valore;
        }
    } else if (val == '=') {
        var x = input.value;
        if (x == '=' || x == '0' || x == '') {
            input.value;
        } else {
            var y = eval(x);
            input.value = y;
        }
    } else {
        input.value += valore;
    }
    if (val == 'cancella') {
        input.value = '';
    }
}

document.addEventListener('keydown', function(e) {
    for (let i = 0; i < 1; i++) {
        var tasto = e.key;
        var tastonum = e.keyCode;
        var validazione = document.querySelector('.validazione');
        console.log(tasto);
        if (tasto.match('^[a-zTabCapsLock!"£$%&()?^ì]')) {
            validazione.innerHTML = "Non puoi utilizzare lettere, è una calcolatrice :)";
            setTimeout(() => validazione.innerHTML = '', 2000);
        } else if (tasto == 'Shift') {
            input.value;
        } else if (tasto == 'Backspace') {
            input.value = input.value.slice(0, -1);
        } else if (tasto == 'Escape') {
            btnclicked('cancella');
        } else if (tasto == 'Enter' || tasto == '=') {
            if (input.value.slice(-1).includes('+') || input.value.slice(-1).includes('-') || input.value.slice(-1).includes('*') ) {
                validazione.innerHTML = "Non puoi utilizzare l'uguale quando l'ultimo carattere è un operatore";
                setTimeout(() => validazione.innerHTML = '', 2000);
            } else {
                btnclicked('=');
            }
        } else if(input.value.slice(-1).includes('+') || input.value.slice(-1).includes('-') || input.value.slice(-1).includes('*') ) {
            if (tasto == '+' || tasto == '-' || tasto == '*' || tasto == '/') {
                input.value;
            } else {
                input.value += tasto;
            }
        } else if (tasto == '+') {
            btnclicked('+');
        } else if (tasto == '-') {
            btnclicked('-');
        } else if (tasto == '*') {
            btnclicked('*');
        } else if (tasto == '/' || tastonum == '220') {
            btnclicked('/');
        } else {
            input.value += tasto;
        }
    }
})

