function enviarEncuesta() {
    var edad = document.getElementById('edad').value;
    var sexo = document.getElementById('sexo').value;
    var educacion = document.getElementById('educacion').value;
    var ocupacion = document.getElementById('ocupacion').value;

    var datosEncuesta = {
        edad: edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion: ocupacion
    };

    window.location.href = 'Resultado-Fernanda-Santamaría.html?data=' + JSON.stringify(datosEncuesta);
}

function mostrarResultados() {
    var urlParams = new URLSearchParams(window.location.search);
    var datosEncuestaStr = urlParams.get('data');

    if (datosEncuestaStr) {
        var datosEncuesta = JSON.parse(datosEncuestaStr);

        var resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `
            <p>Edad: ${datosEncuesta.edad}</p>
            <p>Sexo: ${datosEncuesta.sexo}</p>
            <p>Nivel de Educación: ${datosEncuesta.educacion}</p>
            <p>Ocupación: ${datosEncuesta.ocupacion}</p>
        `;
    }
}

mostrarResultados();
