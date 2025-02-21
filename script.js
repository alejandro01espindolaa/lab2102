<<<<<<< HEAD
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
=======
document.addEventListener("DOMContentLoaded", () => {
    const colores = ["green", "blue", "red"];
    
    function colorAleatorio(actual) {
        let nuevoColor;
        do {
            nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        } while (nuevoColor === actual);
        return nuevoColor;
    }

    document.body.addEventListener("click", (event) => {
        if (event.target.tagName === "H5") {
            event.target.style.color = colorAleatorio(event.target.style.color);
        }
    });
});
>>>>>>> ac76640a49455cbec42b4d40265fe9e03791216f
