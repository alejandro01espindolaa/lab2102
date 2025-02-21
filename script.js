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
