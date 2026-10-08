# AulaControl

## Portada

**AulaControl — sistema de gestión académica**  
Proyecto web de la actividad 5.  
**Integrantes:** Integrante 1 · Integrante 2  

AulaControl permite validar un acceso, entrar a un panel de gestión y capturar usuarios y alumnos desde una interfaz sencilla y responsive.

## Tecnologías

- HTML5, CSS3 y JavaScript.
- **Bootstrap 5.3** como único framework CSS, cargado desde CDN.
- `localStorage` para simular la sesión sin backend.

## Flujo de la aplicación

1. `login.html` recibe correo y contraseña.
2. `validarCorreo` y `validarPassword`, ubicadas en `js/utileria.js`, validan los datos.
3. Si son correctos, `login.js` guarda un objeto con el correo y un nombre derivado en `localStorage` y redirige a `index.html`.
4. `app.js` verifica que exista la sesión. El nombre y el correo se colocan en el navbar.
5. “Salir del sistema” elimina la sesión y regresa a `login.html`.

## Métodos principales

- `validarCorreo(correo)`: verifica el formato del correo.
- `validarPassword(password)`: exige una contraseña de mínimo seis caracteres.
- `validarNumeroControl(numero)`: exige exactamente seis dígitos.
- `localStorage.setItem`: conserva la sesión simulada durante la navegación.
- `bootstrap.Modal`: muestra el resultado de la validación de edad.

La edad se simula con los primeros dos dígitos del número de control. Por ejemplo, `170000` representa 17 años y muestra “menor de edad”; una edad de 18 o más muestra “mayor de edad”. Es una regla demostrativa, no una inferencia real de edad.

## Proceso de creación

### 1. Login

Se diseñó una pantalla dividida con identidad visual y un formulario de correo y contraseña.

![Pantalla de acceso](img/login.svg)

### 2. Sidebar

Se añadió un menú lateral responsive con botón hamburguesa. La opción **Usuarios** usa el componente Collapse de Bootstrap para desplegar **Captura**.

![Sidebar y captura](img/dashboard.svg)

### 3. Navbar y usuario

El usuario se obtiene del correo usado en login. Se transforma la parte anterior a `@` en un nombre visual y se muestra junto con su correo en el dropdown del navbar.

### 4. Captura de usuario y alumno

El formulario de usuario reutiliza las validaciones de la librería. El formulario de alumno acepta únicamente seis dígitos en el número de control y abre un modal con el resultado de la regla de edad. Los únicos botones son los de entrar, abrir/cerrar menús, guardar usuario, registrar alumno, cerrar sesión y aceptar el modal.

![Modal de edad](img/age-modal.svg)

## Ejecución y GitHub Pages

Abre `login.html` con un servidor estático (por ejemplo, Live Server) o publica la raíz del repositorio en GitHub Pages. Para probar:

- Correo: `demo@aulacontrol.com`
- Contraseña: `123456`

No se requiere backend. Para demostrar participación equilibrada, cada integrante debe realizar commits identificables y revisar el historial antes de publicar.
