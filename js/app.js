document.addEventListener("DOMContentLoaded", () => {
  // validar sesion activa
  const session = localStorage.getItem("aulaControlUser");
  if (!session) {
    window.location.replace("login.html");
    return;
  }

  const user = JSON.parse(session);
  document.querySelector("#navbarUser").textContent = user.name || user.email;

  document.querySelector("#sidebarToggle").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.toggle("collapsed");
  });

  document.querySelector("#logoutButton").addEventListener("click", () => {
    // cerrar sesion
    localStorage.removeItem("aulaControlUser");
    window.location.href = "login.html";
  });

  document.querySelector("#userForm").addEventListener("submit", (event) => {
    // validar usuario
    event.preventDefault();
    const name = document.querySelector("#userName");
    const email = document.querySelector("#userEmail");
    const password = document.querySelector("#userPassword");
    const validName = name.value.trim().length > 0;
    const validEmail = validarCorreo(email.value);
    const validPassword = validarPassword(password.value);
    name.classList.toggle("is-invalid", !validName);
    email.classList.toggle("is-invalid", !validEmail);
    password.classList.toggle("is-invalid", !validPassword);
    if (validName && validEmail && validPassword) {
      event.currentTarget.reset();
      window.alert("Usuario guardado correctamente.");
    }
  });

  const controlNumber = document.querySelector("#controlNumber");
  controlNumber.addEventListener("input", () => {
    controlNumber.value = controlNumber.value.replace(/\D/g, "").slice(0, 6);
  });

  document.querySelector("#studentForm").addEventListener("submit", (event) => {
    // validar alumno
    event.preventDefault();
    const name = document.querySelector("#studentName");
    const birthDate = document.querySelector("#birthDate");
    const validName = name.value.trim().length > 0;
    const validNumber = validarNumeroControl(controlNumber.value);
    const validBirthDate = validarFechaNacimiento(birthDate.value);
    name.classList.toggle("is-invalid", !validName);
    controlNumber.classList.toggle("is-invalid", !validNumber);
    birthDate.classList.toggle("is-invalid", !validBirthDate);
    if (!validName || !validNumber || !validBirthDate) return;

    const adult = calcularEdad(birthDate.value) >= 18;
    document.querySelector("#ageModalTitle").textContent = adult ? "Mayor de edad" : "Menor de edad";
    document.querySelector("#ageModalMessage").textContent = `${name.value.trim()} fue registrado correctamente.`;
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#ageModal")).show();
    event.currentTarget.reset();
  });
});
