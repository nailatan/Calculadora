const numerosTabla = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createElementHeadTD(titulo)  {
  let cabeceraColumna = document.createElement('th');
  cabeceraColumna.colSpan = '2';
  cabeceraColumna.innerHTML = titulo;
  return cabeceraColumna;
}

let createHead = function(num) {  
  let cabecera = document.createElement('thead');
  let fila = document.createElement('tr');
  fila.appendChild(createElementHeadTD(`Tabla del ${num}`));
  cabecera.appendChild(fila);
  return cabecera;
}

function createElementTD(valor) {
  let columnaOperandos = document.createElement('td');
  columnaOperandos.innerHTML = valor;
  return columnaOperandos;

}
function createBody(num) {
  let cuerpo = document.createElement('tbody');
  
  numerosTabla.map((item) => {
    let fila = document.createElement('tr');
    fila.append(createElementTD(`${num} &times; ${item} `),createElementTD(`${num * item}`));
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
