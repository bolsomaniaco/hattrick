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

const factores = {
    forma: {
        excelente: 5,
        bueno: 3,
        aceptable: 1,
        insuficiente: 0,
        debil: -1,
        horrible: -3
    },
    resistencia: 1.5, // Ajusta según el impacto deseado
    edad: {
        menos_de_28: 1,
        mas_de_28: 0.9 // Reducción del 10% por cada año sobre los 28 años
    }
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
        edad: document.getElementById('edad').value
    };

   // Calcular el TSI
    let tsi = habilidades[datos.velocidad] +
              habilidades[datos.resistencia] +
              habilidades[datos.tecnica] +
              habilidades[datos.defensa] +
              habilidades[datos.ataque] +
              habilidades[datos.pase] +
              habilidades[datos.porteria];

    // Aplicar factores adicionales
    tsi += factores.forma[datos.forma]; // Suma el factor de forma
    tsi *= factores.resistencia; // Multiplica por el factor de resistencia

    // Ajuste por edad
    if (datos.edad === 'mas_de_28') {
        tsi *= factores.edad.mas_de_28; // Reduce el TSI por edad
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = `TSI Estimado: ${tsi.toFixed(2)}`;
});
