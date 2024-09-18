function agregarEntrada() {
    // Obtener los valores de los campos
    const fechaRaw = document.getElementById('fecha').value;
    const proyecto = document.getElementById('proyecto').value;
    const horas = document.getElementById('horas').value;

    if (fechaRaw && proyecto && horas) {
        // Convertir la fecha al formato DD/MM/AAAA
        const fecha = formatoLatinoamericano(fechaRaw);

        // Crear una nueva fila en la tabla
        const table = document.getElementById('timesheetTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Agregar las celdas a la fila
        const fechaCell = newRow.insertCell(0);
        const proyectoCell = newRow.insertCell(1);
        const horasCell = newRow.insertCell(2);

        // Asignar los valores ingresados a las celdas
        fechaCell.textContent = fecha;
        proyectoCell.textContent = proyecto;
        horasCell.textContent = horas;

        // Limpiar los campos del formulario
        document.getElementById('fecha').value = '';
        document.getElementById('proyecto').value = '';
        document.getElementById('horas').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Función para convertir la fecha al formato DD/MM/AAAA
function formatoLatinoamericano(fecha) {
    const partes = fecha.split('-');
    const año = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    return `${dia}/${mes}/${año}`;
}
