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
