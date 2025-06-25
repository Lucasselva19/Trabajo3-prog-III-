document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculatorForm");
    const calcular = document.getElementById("boton-calcular");
    const operacionelegida = document.getElementById("operacion");
    const resultado = document.getElementById("resultado");
    const input2 = document.getElementById("num2");
    

    function validarDivisionPorCero() {

        const num2 = parseFloat(document.getElementById("num2").value);
            if (operacionelegida.value === "division" && num2 == 0) {
                calcular.disabled = true;
                resultado.innerText = "Error: División por cero no permitida.";
            } else {
                calcular.disabled = false;
            }
    }

    operacionelegida.addEventListener("change", validarDivisionPorCero);
    input2.addEventListener("input", validarDivisionPorCero);

    calcular.addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacion = operacionelegida.value;
        let res;
        if (operacion === "suma") {
            res = num1 + num2;
        } else if (operacion === "resta") {
            res = num1 - num2;
        }
        else if (operacion === "multiplicacion") {
            res = num1 * num2;
        }
        else if (operacion === "division") {
            if (num2 === 0) {
                res = "Error: División por cero no permitida.";
            } else {
                res = num1 / num2;
            }
        } else {
            res = "Operación no válida.";
        }
        resultado.innerText = "Resultado: " + res;
    });

});