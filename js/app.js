document.addEventListener("DOMContentLoaded", () => {
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
    localStorage.removeItem("aulaControlUser");
    window.location.href = "login.html";
  });

  document.querySelector("#userForm").addEventListener("submit", (event) => {
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
    event.preventDefault();
    const name = document.querySelector("#studentName");
    const age = document.querySelector("#studentAge");
    const validName = name.value.trim().length > 0;
    const validNumber = validarNumeroControl(controlNumber.value);
    const validAge = validarEdad(age.value);
    name.classList.toggle("is-invalid", !validName);
    controlNumber.classList.toggle("is-invalid", !validNumber);
    age.classList.toggle("is-invalid", !validAge);
    if (!validName || !validNumber || !validAge) return;

    const adult = Number(age.value) >= 18;
    document.querySelector("#ageModalTitle").textContent = adult ? "Mayor de edad" : "Menor de edad";
    document.querySelector("#ageModalMessage").textContent = `${name.value.trim()} fue registrado correctamente.`;
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#ageModal")).show();
    event.currentTarget.reset();
  });
});
