const habilidades = {
    divino: 20,
    utopico: 19,
    magico: 18,
    mitico: 17,
    extraterrestre: 16,
    titanico: 15,
    sobrenatural: 14,
    clase_mundial: 13,
    magnifico: 12,
    brillante: 11,
    destacado: 10,
    formidable: 9,
    excelente: 8,
    bueno: 7,
    aceptable: 6,
    insuficiente: 5,
    debil: 4,
    pobre: 3,
    horrible: 2,
    desastroso: 1,
    nulo: 0
};

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const datos = {
        velocidad: document.getElementById('velocidad').value,
        resistencia: document.getElementById('resistencia').value,
        tecnica: document.getElementById('tecnica').value,
        defensa: document.getElementById('defensa').value,
        ataque: document.getElementById('ataque').value,
        pase: document.getElementById('pase').value,
        porteria: document.getElementById('porteria').value,
        forma: document.getElementById('forma').value,
        experiencia: document.getElementById('experiencia').value,
        confianza: document.getElementById('confianza').value,
        estado: document.getElementById('estado').value,
        edad: document.getElementById('edad').value
    };

    // Calcular las características del jugador (ejemplo básico)
    const sumaCaracteristicas = habilidades[datos.velocidad] +
                                habilidades[datos.resistencia] +
                                habilidades[datos.tecnica] +
                                habilidades[datos.defensa] +
                                habilidades[datos.ataque] +
                                habilidades[datos.pase] +
                                habilidades[datos.porteria] +
                                habilidades[datos.forma] +
                                habilidades[datos.experiencia] +
                                habilidades[datos.confianza] +
                                habilidades[datos.estado] +
                                habilidades[datos.edad];

    const promedioCaracteristicas = sumaCaracteristicas / 12; // 12 es el número total de características
    const redondeado = Math.round(promedioCaracteristicas * 100) / 100; // Redondea el promedio a dos decimales

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = `Promedio de Características: ${redondeado}`;
});
