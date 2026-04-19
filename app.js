function mostrarInfo(tipo) {

    let contenido = "";

    if (tipo === "fuertes lluvias") {
        contenido = "<h2>fuertes lluvias</h2><p>Lluvias fuertes en el Estado de México por el Frente Frío 45. Autoridades alertaron posibles tormentas, <br> vientos y descenso de temperatura en varias zonas del estado. vientos y descenso de temperatura en varias zonas del estado de mexico</p>";
    }

    if (tipo === "insendio en ecatepect") {
        contenido = "<h2>insendio en ecatepect</h2><p>incendio en una recicladora de Ecatepec movilizó a bomberos y cuerpos de emergencia<br>No se reportaron lesionados y se investiga la causa del siniestro.  </p>";
    }

    if (tipo === "detencion de beiculo") {
        contenido = "<h2>detencion de beiculo</h2><p>Detienen vehículo ligado a robos en Edomex, CDMX e Hidalgo <br>en Ecatepec, como parte de un operativo de seguridad.  </p>";
    }

    document.getElementById("info").innerHTML = contenido;
}