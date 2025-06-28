document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-filtrar");
    const botonfiltrar = document.getElementById("boton-filtrar");
    const busqueda = document.getElementById("Filtrado");
    const resultado = document.getElementById("resultado");

    const Listadefrutas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "kiwi", "naranja", "uva", "sandia", "cereza", "melon"];

    botonfiltrar.disabled = true; 

    const validarCampoVacio = () => {
        if (busqueda.value.trim() === "") {
            resultado.innerText = "Debe ingresar una palabra o parte de ella.";
            botonfiltrar.disabled = true;
            return true;
        }else {
            resultado.innerText = "";
            botonfiltrar.disabled = false;
        }
    }

    form.addEventListener("input", validarCampoVacio);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const textobusqueda = busqueda.value.trim();

        const palabrasfiltradas = Listadefrutas.filter(word => 
            word.toLowerCase().includes(textobusqueda.toLowerCase())
        );

        if (palabrasfiltradas.length > 0) {
            resultado.innerText = "Frutas filtradas: " + palabrasfiltradas.join(", ");
        } else {
            resultado.innerText = "No se encontraron frutas que coincidan.";
        }
    });
});