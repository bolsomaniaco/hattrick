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

    // Calcular el TSI (ejemplo simplificado)
    const tsi = pesos[datos.velocidad] +
                pesos[datos.resistencia] +
                pesos[datos.tecnica] +
                pesos[datos.defensa] +
                pesos[datos.ataque] +
                pesos[datos.pase] +
                pesos[datos.porteria] +
                pesos[datos.forma] +
                pesos[datos.experiencia] +
                pesos[datos.confianza] +
                pesos[datos.estado] +
                pesos[datos.edad];

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = `TSI Estimado: ${tsi}`;
});
