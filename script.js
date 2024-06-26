function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result;

    switch (operation) {
        case 'add':
            var num3 = parseFloat(document.getElementById("num3").value);
            if (!isNaN(num3)) {
                result = num1 + num2 + num3;
            } else {
                result = num1 + num2;
            }
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            var num3 = parseFloat(document.getElementById("num3").value);
            if (!isNaN(num3)) {
                result = num1 * num2 * num3;
            } else {
                result = num1 * num2;
            }
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Division par zéro impossible";
                return;
            } else {
                result = num1 / num2;
            }
            break;
        default:
            break;
    }

    document.getElementById("result").innerHTML = "Résultat : " + result;
}
