document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = {
        velocidad: parseInt(document.getElementById('velocidad').value),
        resistencia: parseInt(document.getElementById('resistencia').value),
        tecnica: parseInt(document.getElementById('tecnica').value),
        defensa: parseInt(document.getElementById('defensa').value),
        ataque: parseInt(document.getElementById('ataque').value),
        pase: parseInt(document.getElementById('pase').value),
        porteria: parseInt(document.getElementById('porteria').value)
    };

    // Calcular las características del jugador (ejemplo básico)
    const sumaCaracteristicas = datos.velocidad + datos.resistencia + datos.tecnica + datos.defensa + datos.ataque + datos.pase + datos.porteria;
    const promedioCaracteristicas = sumaCaracteristicas / 7; // Calcula el promedio de las características
    const redondeado = Math.round(promedioCaracteristicas * 100) / 100; // Redondea el promedio a dos decimales

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = `Promedio de Características: ${redondeado}`;
});
