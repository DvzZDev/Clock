let hora = document.getElementById("hora");
let fecha = document.getElementById("date");

function actualizarHora() {
  const date = new Date();
  const ha = date.toLocaleTimeString();
  hora.textContent = ha;
}

function fecha1() {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth();
  const año = date.getFullYear();
  fecha.textContent = `${dia}/${mes}/${año}`;
}

setInterval(actualizarHora, 1000);
setInterval(fecha1, 1000);
