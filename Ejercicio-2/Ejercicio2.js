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
    const filterButton = document.getElementById("boton-filtrar");
    const inputField = document.getElementById("Filtrado");
    const resultContainer = document.getElementById("resultado");

    const wordsList = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
    

    filterButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const inputText = inputField.value.trim();
        if (inputText === "") {
            resultContainer.innerText = "Error: Debe ingresar una palabra o parte de ella.";
            return;
        }

        const filteredWords = wordsList.filter(word => 
            word.toLowerCase().includes(inputText.toLowerCase())
        );

        if (filteredWords.length > 0) {
            resultContainer.innerText = "Palabras filtradas: " + filteredWords.join(", ");
        } else {
            resultContainer.innerText = "No se encontraron palabras que coincidan.";
        }
    });
});