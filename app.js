document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = {
        velocidad: document.getElementById('velocidad').value,
        resistencia: document.getElementById('resistencia').value,
        tecnica: document.getElementById('tecnica').value,
        defensa: document.getElementById('defensa').value,
        ataque: document.getElementById('ataque').value,
    };
    // Simular el cálculo del TSI (esto es solo un ejemplo)
    const tsi = (parseInt(datos.velocidad) + parseInt(datos.resistencia) + parseInt(datos.tecnica) + parseInt(datos.defensa) + parseInt(datos.ataque)) * 100;
    document.getElementById('resultado').innerText = 'TSI Estimado: ' + tsi;
});
