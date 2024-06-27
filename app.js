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

// Llamar a la función para cargar opciones cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarOpciones);

// Evento para calcular el TSI cuando se envía el formulario
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
    let tsi = 0;
    let contador = 0;

    Object.keys(datos).forEach(key => {
        const valor = datos[key];
        if (valor !== '') {
            tsi += habilidades[valor];
            contador++;
        }
    });

    // Calcular promedio
    if (contador > 0) {
        tsi /= contador;
    }

    // Mostrar resultado
    document.getElementById('resultado').innerText = `TSI Estimado: ${tsi.toFixed(2)}`;
});
