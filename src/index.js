const numerosTabla = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createHeadTD(num)  {
  let cabeceraColumna = document.createElement('th');
  cabeceraColumna.colSpan = '2';
  cabeceraColumna.innerHTML = `Tabla del ${num}`;
  return cabeceraColumna;
}

let createHead = function(num) {  
  let cabecera = document.createElement('thead');
  let fila = document.createElement('tr');
  fila.appendChild(createHeadTD(num));
  cabecera.appendChild(fila);
  return cabecera;
}

function createBody(num) {
  let cuerpo = document.createElement('tbody');
  
  numerosTabla.map((item) => {
    let fila = document.createElement('tr');
    let columnaOperandos = document.createElement('td');
    
    columnaOperandos.innerHTML = `${num} &times; ${item} `;
    fila.appendChild(columnaOperandos);

    let columnaResultado = document.createElement('td');
    columnaResultado.appendChild(document.createTextNode(`${num * item}`));    
    fila.appendChild(columnaResultado);
    cuerpo.append(fila)    
  });
  return cuerpo;
}
let createTable = (num) =>{
  let tabla = document.createElement('table');
  tabla.append(createHead(num),createBody(num));
   return tabla;
};

function createTables() {
  numerosTabla.map((num) => {document.body.append(createTable(num))});
}

createTables();
