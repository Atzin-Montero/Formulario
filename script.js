function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const grado = document.getElementById("grado").value;
    const nivel = document.getElementById("nivel").value;
    const dias = document.getElementById("dias_consumo").value;
    const comidas = document.getElementById("comidas_frecuentes").value;
    const mejoras = document.getElementById("mejoras").value;

    const lugares = document.querySelectorAll('input[name="lugar"]:checked');

    if (
        nombre.trim() === "" ||
        grado.trim() === "" ||
        nivel.trim() === "" ||
        dias.trim() === "" ||
        comidas.trim() === "" ||
        mejoras.trim() === "" ||
        lugares.length === 0
    ) {
        alert("Todos los campos son obligatorios");
        return;
    }
    else
    {alert("Formulario válido");}  
}
