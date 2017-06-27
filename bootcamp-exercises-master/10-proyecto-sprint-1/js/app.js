var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var estudiante = new Object ();
        estudiante.nombre =  prompt("Cual es tu nombre completo?");
        estudiante.puntosTecnicos = parseInt(prompt("Debes ingresar tus puntos técnicos"));
        estudiante.puntosHSE = parseInt(prompt("Debes ingresar tus puntos HSE"));
    
    estudiantes.push(estudiante);

    return estudiante;
}
    
  function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
   var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    return estudiantes.map(mostrar); //Con el método map() podemos simplificar nuestro código y esto nos mostrará la lista de estudiantes agregados.
       }

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    
    nombre = nombre.toLowerCase(); 
    var encontrar = estudiantes.filter(function(busqueda){
      return busqueda.nombre == nombre;
    })
      return encontrar[0];
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
 
    var puestoTecnico = estudiantes.sort(function(x, y){
      return x.puntosTecnicos < y.puntosTecnicos;
    });

    return puestoTecnico;   
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var puestoHSE = estudiantes.sort(function(x,y){
          return x.puntosHSE - y.puntosHSE;
        });
        return puestoHSE;
}