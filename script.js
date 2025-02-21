document.addEventListener("DOMContentLoaded", function () {
    const colors = ["green", "blue", "red"];
  
    // Selecciona todas las etiquetas h5
    const h5Elements = document.querySelectorAll("h5");
  
    // Asigna un evento de clic a cada h5
    h5Elements.forEach(function (h5) {
      h5.addEventListener("click", function () {
        // Escoge un color aleatorio de la lista
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Cambia el color de fondo de la etiqueta h5
        h5.style.color = randomColor;
      });
    });
  });
  