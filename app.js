function mostrarInfo(tipo) {

    let contenido = "";

    if (tipo === "noche estrellada") {
        contenido = "<h2>Pintura</h2><p>La noche estrellada es un óleo sobre lienzo del pintor postimpresionista neerlandés Vincent van Gogh. Pintado en junio de 1889,<br> representa la vista desde la ventana orientada al este de su habitación en el asilo en Saint-Rémy-de-Provence, justo antes del amanecer, donde incluye un pueblo imaginario.</p>";
    }

    if (tipo === "escultura") {
        contenido = "<h2>Escultura</h2><p>La Afrodita de Milo, más conocida como Venus de Milo, es una de las estatuas más representativas del periodo helenístico de la escultura griega,<br> y una de las más famosas esculturas de la antigua Grecia. Fue creada en algún momento entre los años 130 a. C. y 100 a.c.</p>";
    }

    if (tipo === "digital") {
        contenido = "<h2>Arte Digital</h2><p>Everydays: the First 5000 Days es una obra de arte digital creada por Mike Winkelmann, conocido profesionalmente como Beeple.<br> La obra es un collage de 5000 imágenes digitales creado por Winkelmann para su serie Everydays.</p>";
    }

    document.getElementById("info").innerHTML = contenido;
}