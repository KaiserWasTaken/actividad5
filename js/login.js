document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#loginForm");
  const email = document.querySelector("#loginEmail");
  const password = document.querySelector("#loginPassword");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValid = validarCorreo(email.value);
    const passwordValid = validarPassword(password.value);
    email.classList.toggle("is-invalid", !emailValid);
    password.classList.toggle("is-invalid", !passwordValid);
    if (!emailValid || !passwordValid) return;

    const displayName = email.value.trim().split("@")[0].replace(/[._-]+/g, " ");
    localStorage.setItem("aulaControlUser", JSON.stringify({ name: displayName, email: email.value.trim() }));
    window.location.href = "index.html";
  });
});
