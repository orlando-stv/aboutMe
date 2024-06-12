"use strict";

const tu_nombre = prompt("CUAL ES TU NOMBRE?");
alert("Genial " + tu_nombre + ", gracias por tomarte unos minutos");

const nombre = "si";
const edad = "si";
const estudios = "si";
const trabajos = "si";
const trabajos2 = "si";

let contador_good = 0;
let contador_mal = 0;

const preg_nombre = prompt("¿Mi nombre completo es Orlando Stevens?");
if (nombre.toLowerCase() === preg_nombre.toLowerCase()) {
  alert("very good");
  console.log("very good");
  contador_good += 1;
} else {
  alert("respuesta incorrecta");
  console.log("respuesta incorrecta");
  contador_mal += 1;
}

const preg_edad = prompt("¿mi edad es 36 años?");

if (edad.toLowerCase() === preg_edad.toLowerCase()) {
  alert("very good");
  console.log("very good");
  contador_good += 1;
} else {
  alert("respuesta incorrecta");
  console.log("respuesta incorrecta");
  contador_mal += 1;
}
const preg_estudios = prompt("¿Estudie en Idat?");
if (estudios.toLowerCase() === preg_estudios.toLowerCase()) {
  alert("very good");
  console.log("very good");
  contador_good += 1;
} else {
  alert("respuesta incorrecta");
  console.log("respuesta incorrecta");
  contador_mal += 1;
}

const preg_trabajos = prompt("Trabaje en CYBER 105?");

if (trabajos.toLowerCase() === preg_trabajos.toLowerCase()) {
  alert("very good");
  console.log("very good");
  contador_good += 1;
} else {
  alert("respuesta incorrecta");
  console.log("respuesta incorrecta");
  contador_mal += 1;
}

const preg_trabajos2 = prompt("Trabaje en INVERSIONES LA CRUZ?");

if (trabajos2.toLowerCase() === preg_trabajos2.toLowerCase()) {
  alert("very good");
  console.log("very good");
  contador_good += 1;
} else {
  alert("respuesta incorrecta");
  console.log("respuesta incorrecta");
  contador_mal += 1;
}

// continuamos con las preg 6 y 7 :-)

alert("muchas gracias " + tu_nombre + ", sigamos adivinando");

let cont_intento = 0;

while (cont_intento != 4) {
  cont_intento += 1;
  const sexta_preg = Number(prompt("¿En que año naci?"));
  if (sexta_preg == 1987) {
    alert("very good");
    contador_good += 1;
    cont_intento == 4;
    break;
  } else if (sexta_preg >= 1982 && sexta_preg <= 1992) {
    alert("estas muy cerca, te quedan " + (4 - cont_intento) + " intentos");
  } else {
    alert("estas muy lejos, te quedan " + (4 - cont_intento) + " intentos");
  }
  if (cont_intento == 4) {
    alert("Naci en 1987");
    contador_mal += 1;
  }
}

let cont_array = 0;

let condicion = false;

const lista = [
  "Will Smith",
  "Dwayne Johnson",
  "Jim Carrey",
  "Johnny Depp",
  "Ryan Reynolds",
  "Kevin Costner",
  "Al Pacino",
  "Liam Neeson",
];
while (cont_array != 6) {
  let actor = prompt("Adivina uno de mis actores recomendados").toLowerCase();
  for (let i = 0; i < lista.length; i++) {
    if (actor === lista[i].toLowerCase()) {
      condicion = true;
    }
  }
  if (condicion) {
    alert("excelente, ese actor es muy bueno");
    contador_good += 1;
    break;
  } else if (cont_array == 5) {
    let salto_list = lista.join("\n");
    alert(
      "ese actor es bueno, pero no es mi recomendado, gracias por intentarlo ❤, Mis actores favoritos son: " +
        "\n" +
        salto_list
    );
    contador_mal += 1;
  } else {
    alert(
      "ese actor es bueno, pero no es mi recomendado, " +
        "te quedan " +
        (5 - cont_array) +
        " intentos"
    );
  }
  cont_array += 1;
}

alert(contador_good + " respuestas correctas");
alert(contador_mal + " respuestas incorrectas");