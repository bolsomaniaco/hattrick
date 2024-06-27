const habilidades = {
    nulo: 0,
    desastroso: 1,
    horrible: 2,
    pobre: 3,
    debil: 4,
    insuficiente: 5,
    aceptable: 6,
    bueno: 7,
    excelente: 8,
    formidable: 9,
    destacado: 10,
    brillante: 11,
    magnifico: 12,
    clase_mundial: 13,
    sobrenatural: 14,
    titanico: 15,
    extraterrestre: 16,
    mitico: 17,
    magico: 18,
    utopico: 19,
    divino: 20
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
    resistencia: 1.5,
    edad: {
        menos_de_28: 1,
        mas_de_28: 0.9
    }
};

// Capturar el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener valores seleccionados
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
    } else {
        tsi *= factores.edad.menos_de_28; // Ajuste por edad menor de 28
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerText = `TSI Estimado: ${tsi.toFixed(2)}`;
});

