const preguntas = [
    {
        pregunta: "¿En que año se formó la banda?",
        opciones: ["1975", "1980", "1983"],
        respuestaCorrecta: "1983"
    },
    {
        pregunta: "¿Quienes son los integrantes actuales?",
        opciones: ["Anthony Kiedis, John Frusciante, Flea y Chad Smith", "Antony Kiedis, Josh Klinghoffer, Flea y Chad Smith", "John Frusciante, Flea, Chad Smith y Axl Roise"],
        respuestaCorrecta: "Anthony Kiedis, John Frusciante, Flea y Chad Smith"
    },
    {
        pregunta: "¿Cual es el nombre del primer álbum?",
        opciones: ["Californication", "Red Hot Chili Peppers", "Mother's Milk"],
        respuestaCorrecta: "The Red Hot Chili Peppers"
    },
    {
        pregunta: "¿Cual es el nombre del último álbum?",
        opciones: ["Return of the Dream Canteen", "Blood Sugar Sex Magik", "By the Way"],
        respuestaCorrecta: "Return of the Dream Canteen"
    },
    {
        pregunta: "¿Cuando fue su primera visita a Argentina?",
        opciones: ["1988", "1993", "1995"],
        respuestaCorrecta: "1993"
    },
    {
        pregunta: "¿Como se llamaban antes de ser Red Hot Chili Peppers?",
        opciones: ["Tony Flow", "Tony Flow and the Miraculously Majestic Masters of Mayhem", "The Shape Im Takin"],
        respuestaCorrecta: "Tony Flow and the Miraculously Majestic Masters of Mayhem"
    },
    {
        pregunta: "¿Cómo se llama el documental sobre la grabación de 'Blood Sugar Sex Magik?",
        opciones: ["Funky Monks", "Give It Away", "Knock Me Down"],
        respuestaCorrecta: "Funky Monks"
    },
    {
        pregunta: "¿Cual fue el primer videoclip de la banda?",
        opciones: ["Give It Away", "True Men Dont Kill Coyotes", "Good Time Boys"],
        respuestaCorrecta: "True Men Dont Kill Coyotes"
    },
    {
        pregunta: "¿Que cancion abre Blood Sugar Sex Magic?",
        opciones: ["Breaking the Girl", "The Power of Equality", "Suck my Kiss"],
        respuestaCorrecta: "The Power of Equality"
    },
    {
        pregunta: "¿Que canción tiene mas reproducciones en Spotify?",
        opciones: ["Californication", "Under the Bridge", "Otherside"],
        respuestaCorrecta: "Under the Bridge"
    },
];

let indicePreguntaActual = 0;

const elementoPregunta = document.getElementById('pregunta');
const elementoOpciones = document.getElementById('opciones');
const botonSiguiente = document.getElementById('siguiente-boton');

function mostrarPregunta() {
    const preguntaActual = preguntas[indicePreguntaActual];
    elementoPregunta.textContent = preguntaActual.pregunta;

    elementoOpciones.innerHTML = '';
    preguntaActual.opciones.forEach((opcion) => {
        const listItem = document.createElement('li');
        const opcionBoton = document.createElement('button');
        opcionBoton.textContent = opcion;

        opcionBoton.addEventListener('click', () => verificarRespuesta(opcion));

        listItem.appendChild(opcionBoton);
        elementoOpciones.appendChild(listItem);
    });
}

function verificarRespuesta(respuestaSeleccionada) {
    const preguntaActual = preguntas[indicePreguntaActual];
    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        alert('¡Respuesta correcta!');
    } else {
        alert('Respuesta incorrecta. La respuesta correcta es: ' + preguntaActual.respuestaCorrecta);
    }

    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        alert('¡Fin del juego!');
        botonSiguiente.disabled = true;
    }
}

botonSiguiente.addEventListener('click', () => {
    mostrarPregunta();
    botonSiguiente.disabled = true;
});

mostrarPregunta();


let respuestasCorrectas = 0; // Variable para contar las respuestas correctas

function verificarRespuesta(respuestaSeleccionada) {
    const preguntaActual = preguntas[indicePreguntaActual];
    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        alert('¡Respuesta correcta!');
        respuestasCorrectas++; // Incrementar el contador de respuestas correctas
    } else {
        alert('Respuesta incorrecta. La respuesta correcta es: ' + preguntaActual.respuestaCorrecta);
    }

    indicePreguntaActual++;

    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
        botonSiguiente.disabled = true;
    }
}

function mostrarResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Obtuviste ${respuestasCorrectas} respuestas correctas de ${preguntas.length}.`;
}

botonSiguiente.addEventListener('click', () => {
    mostrarPregunta();
    botonSiguiente.disabled = true;
});

mostrarPregunta();
