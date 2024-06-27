// Objeto de habilidades con orden de menor a mayor
const habilidades = {
    nulo: -5,
    desastroso: -4,
    horrible: -3,
    pobre: -2,
    debil: -1,
    insuficiente: 0,
    aceptable: 1,
    bueno: 2,
    excelente: 3,
    formidable: 4,
    destacado: 5,
    brillante: 6,
    magnifico: 7,
    clase_mundial: 8,
    sobrenatural: 9,
    titanico: 10,
    extraterrestre: 11,
    mitico: 12,
    magico: 13,
    utopico: 14,
    divino: 15
};

// Función para cargar las opciones en los select
function cargarOpciones() {
    const selects = document.querySelectorAll('select');

    selects.forEach(select => {
        // Limpiar opciones existentes
        select.innerHTML = '';

        // Agregar opción inicial
        const optionInicial = document.createElement('option');
        optionInicial.value = '';
        optionInicial.textContent = '--------';
        select.appendChild(optionInicial);

        // Agregar opciones de habilidades
        Object.keys(habilidades).forEach(habilidad => {
            const option = document.createElement('option');
            option.value = habilidad;
            option.textContent = habilidad.charAt(0).toUpperCase() + habilidad.slice(1); // Capitalizar primera letra
            select.appendChild(option);
        });
    });
}

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

document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
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
