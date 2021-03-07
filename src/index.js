function createTable(num) {
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
  for (let cont = 0; cont <= 10; cont++) {
    let fila = document.createElement('tr');

    let columnaOperandos = document.createElement('td');
    columnaOperandos.innerHTML = `${num} &times; ${cont} `;
    fila.appendChild(columnaOperandos);

    let columnaResultado = document.createElement('td');
    let resultado = document.createTextNode(`${num * cont}`);
    columnaResultado.appendChild(resultado);
    fila.appendChild(columnaResultado);

    cuerpo.appendChild(fila);
  }
  tabla.appendChild(cuerpo);
  return tabla;
}

function createTables() {
  for (let num = 1; num < 10; num++) {
    let tabla = createTable(num);
    document.body.appendChild(tabla);
  }
}

createTables();
