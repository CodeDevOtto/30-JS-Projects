const segundero = document.querySelector(".segundero");
const minutero = document.querySelector(".minutero");
const horario = document.querySelector(".horario");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 - 90;
  segundero.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 - 90;
  minutero.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 - 90;
  horario.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
