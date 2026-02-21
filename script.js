//renderizado para SEO
document.addEventListener("DOMContentLoaded", () => {
  const tiposDeCanarios = document.createElement("section");
  tiposDeCanarios.innerHTML = `
    <h2>Canarios</h2>
    <p>Más de 500 canarios en lista</p>
  `;
  document.body.appendChild(tiposDeCanarios);
});
