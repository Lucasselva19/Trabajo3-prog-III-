document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("boton-filtrar");
    const botonfiltrar = document.getElementById("boton-filtrar");
    const busqueda = document.getElementById("Filtrado");
    const resultado = document.getElementById("resultado");

    const Listadefrutas = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "kiwi", "naranja", "uva", "sandia", "cereza", "melon"];
    

    botonfiltrar.addEventListener("click", function(event) {
        event.preventDefault();

        const inputText = busqueda.value.trim();
        if (inputText === "") {
            resultado.innerText = "Error: Debe ingresar una palabra o parte de ella.";
            return;
        }

        const palabrasfiltradas = Listadefrutas.filter(word => 
            word.toLowerCase().includes(inputText.toLowerCase())
        );

        if (palabrasfiltradas.length > 0) {
            resultado.innerText = "Frutas filtradas: " + palabrasfiltradas.join(", ");
        } else {
            resultado.innerText = "No se encontraron frutas que coincidan.";
        }
    });
});