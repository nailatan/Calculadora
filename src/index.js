const numerosTabla = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let generarabla = function (num, cuerpo) {
  numerosTabla.map((num2) => {
    let fila = document.createElement('tr');

    let columnaOperandos = document.createElement('td');
    columnaOperandos.innerHTML = `${num} &times; ${num2} `;
    fila.appendChild(columnaOperandos);

    let columnaResultado = document.createElement('td');
    let resultado = document.createTextNode(`${num * num2}`);
    columnaResultado.appendChild(resultado);
    fila.appendChild(columnaResultado);

    cuerpo.appendChild(fila);
  });
};

function createTables() {

  numerosTabla.map((num) => {
    let tabla = document.createElement('table');
    let cabecera = document.createElement('thead');
    let cabecerFila = document.createElement('tr');

    let cabeceraColumna = document.createElement('th');
    cabeceraColumna.colSpan = '2';
    cabeceraColumna.innerHTML = `Tabla del ${num}`;

    cabecerFila.appendChild(cabeceraColumna);
    cabecera.appendChild(cabecerFila);
    tabla.appendChild(cabecera);
    let cuerpo = document.createElement('tbody');
    generarabla(num, cuerpo);
    tabla.appendChild(cuerpo);
    document.body.appendChild(tabla);
    num++;
  });
}

createTables();
