// Crear una página web utilizando HTML y JavaScript que permita filtrar una lista de palabras
// predefinidas mediante un formulario.
// • El formulario debe incluir un campo de texto (<input>) para ingresar una palabra o parte de
// ella, y un botón "Filtrar" para ejecutar la acción.
// • Al hacer clic en el botón, deben mostrarse únicamente las palabras de la lista que contengan
// el texto ingresado, sin importar mayúsculas o minúsculas.
// • Si el campo de texto está vacío al presionar el botón "Filtrar", se debe mostrar un mensaje de
// error y no realizar el filtrado.
// Requisitos:
// • La lista de palabras debe estar precargada en el script (por ejemplo: [“manzana”, “banana”,
// “pera”, “durazno”, “frutilla”, “mango”]).
// • El filtrado debe actualizar el contenido mostrado en la página, sin recargarla.
// • Debe evitarse el filtrado si no se ingresó ningún texto.

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

        const filteredWords = Listadefrutas.filter(word => 
            word.toLowerCase().includes(inputText.toLowerCase())
        );

        if (filteredWords.length > 0) {
            resultado.innerText = "Palabras filtradas: " + filteredWords.join(", ");
        } else {
            resultado.innerText = "No se encontraron palabras que coincidan.";
        }
    });
});