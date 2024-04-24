let hora = document.getElementById("hora");
let fecha = document.getElementById("date");
let boton = document.getElementById("encendido");
let isOn = false;
const boxHora = document.getElementById("boxHora");

function actualizarHora() {
  const date = new Date();
  const ha = date.toLocaleTimeString();
  hora.textContent = ha;
}

function fecha1() {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const año = date.getFullYear();
  fecha.textContent = `${dia}/${mes}/${año}`;
}

function onOf() {
  isOn = !isOn;
  if (isOn === false) {
    boton.textContent = "Turn ON";
    boxHora.style.opacity = "0";
    boxHora.style.visibility = "hidden";
    elemento;
  } else {
    boton.textContent = "Turn OFF";
    boxHora.style.opacity = "1";
    boxHora.style.visibility = "visible";
  }
}

boton.addEventListener("click", onOf);

setInterval(actualizarHora, 1000);
setInterval(fecha1, 1000);
