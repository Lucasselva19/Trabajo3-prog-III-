// Desarrollar un JavaScript que contenga un formulario para realizar
// operaciones entre dos números ingresados mediante campos <input>. La operación a realizar
// (suma, resta, multiplicación o división) debe seleccionarse mediante un elemento <select>. Al hacer
// clic en el botón "Calcular", se debe ejecutar la operación seleccionada y mostrar el resultado.
// Condición especial: Si el usuario selecciona la operación de división y el segundo número es cero, el botón "Calcular" debe
// deshabilitarse, impidiendo que se realice la operación
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calculatorForm");
    const calcular = document.getElementById("boton-calcular");
    const operacionelegida = document.getElementById("operacion");
    const resultado = document.getElementById("resultado");

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
        else if (operacion === "multiplicación") {
            res = num1 * num2;
        }
        else if (operacion === "división") {
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

    operacionelegida.addEventListener("change", function() {
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacion = operacionelegida.value;
        if (operacion === "división" && num2 === 0) {
            calcular.disabled = true;
        } else {
            calcular.disabled = false;
        }
    });
});