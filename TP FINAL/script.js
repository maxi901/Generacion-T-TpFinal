function agregarEntrada() {
    const fechaRaw = document.getElementById('fecha').value;
    const proyecto = document.getElementById('proyecto').value;
    const horas = document.getElementById('horas').value;

    if (fechaRaw && proyecto && horas) {
        const fecha = formatoLatinoamericano(fechaRaw);

        const table = document.getElementById('timesheetTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const fechaCell = newRow.insertCell(0);
        const proyectoCell = newRow.insertCell(1);
        const horasCell = newRow.insertCell(2);

        fechaCell.textContent = fecha;
        proyectoCell.textContent = proyecto;
        horasCell.textContent = horas;

        document.getElementById('fecha').value = '';
        document.getElementById('proyecto').value = '';
        document.getElementById('horas').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function formatoLatinoamericano(fecha) {
    const partes = fecha.split('-');
    const año = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    return `${dia}/${mes}/${año}`;
}
