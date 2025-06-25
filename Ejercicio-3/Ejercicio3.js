const resultado = document.getElementById("lista-de-tareas");

cargarTareasCompletadas();

async function cargarTareasCompletadas() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
        const datos = await respuesta.json();
        const tareasCompletadas = datos.filter(tarea => tarea.completed);

        tareasCompletadas.forEach(tarea => {
            const li = document.createElement("li");
            li.innerText = tarea.title;
            resultado.appendChild(li);
        });
    } catch (error) {
        console.error("Error al cargar las tareas:", error);
        resultado.innerHTML = "<li>Error al cargar las tareas.</li>";
    }
}