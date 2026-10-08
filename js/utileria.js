/**
 * Utilidades de validación compartidas por login.html e index.html.
 */
function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(correo).trim());
}

function validarPassword(password) {
  return typeof password === "string" && password.length >= 6;
}

function validarNumeroControl(numero) {
  return /^\d{6}$/.test(String(numero).trim());
}

function validarFechaNacimiento(fecha) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(fecha))) return false;

  const nacimiento = new Date(`${fecha}T00:00:00`);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return !Number.isNaN(nacimiento.getTime()) && nacimiento <= hoy;
}

function calcularEdad(fecha) {
  const nacimiento = new Date(`${fecha}T00:00:00`);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const aunNoCumple = hoy.getMonth() < nacimiento.getMonth()
    || (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());

  if (aunNoCumple) edad -= 1;
  return edad;
}
