// ==========================================
// VARIABLES DEL SIMULADOR
// ==========================================

let puntaje = 0;
let preguntaActual = 0;
let nombreParticipante = "";
let institucionParticipante = "";


// ==========================================
// INICIAR SIMULACIÓN
// ==========================================

function iniciarSimulacion() {

    nombreParticipante =
        document.getElementById("nombreParticipante").value.trim();

    institucionParticipante =
        document.getElementById("institucion").value.trim();

    

    if (nombreParticipante === "") {

        alert("⚠️ Por favor, ingrese el nombre del participante.");

        return;
    }


    if (institucionParticipante === "") {

        alert("⚠️ Por favor, ingrese la institución o empresa.");

        return;
    }


    alert(
        "✅ Datos registrados correctamente. Bienvenido/a " +
        nombreParticipante
    );


    mostrarDocumentos();
}

// ==========================================
// NAVEGACIÓN
// ==========================================

function mostrarDocumentos() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("documentos").style.display = "block";
    document.getElementById("gestion").style.display = "none";
    document.getElementById("caso").style.display = "none";
}


function mostrarGestionDocumental() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("documentos").style.display = "none";
    document.getElementById("gestion").style.display = "block";
    document.getElementById("caso").style.display = "none";
}


function volverInicio() {

    document.getElementById("inicio").style.display = "block";
    document.getElementById("documentos").style.display = "none";
    document.getElementById("gestion").style.display = "none";
    document.getElementById("caso").style.display = "none";
}


// ==========================================
// CASO 1: ELABORACIÓN DE OFICIO
// ==========================================

function casoOficio() {

    puntaje = 0;
    preguntaActual = 0;

    document.getElementById("documentos").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").textContent =
        "Caso 1: Solicitud de información institucional";

    mostrarPreguntaOficio();
}


// ==========================================
// PREGUNTAS DEL CASO
// ==========================================

function mostrarPreguntaOficio() {

    let contenido = document.getElementById("contenidoCaso");

    if (preguntaActual === 0) {

        contenido.innerHTML = `

           
<h3>📋 Situación laboral</h3>

<p>
    Usted trabaja como asistente administrativo en una institución.
    Su jefe inmediato le solicita gestionar una comunicación formal
    dirigida a otra institución, con la finalidad de solicitar
    información necesaria para continuar con un trámite administrativo.
</p>

<p>
    Antes de elaborar el documento, usted debe analizar la situación
    y seleccionar el medio de comunicación que corresponda.
</p>

            <h3>Decisión 1</h3>

<p>
    La solicitud debe enviarse formalmente a una institución externa.
    ¿Qué documento sería más adecuado para realizar esta comunicación?
</p>

<button onclick="respuesta1Oficio(1)">
    A. Oficio
</button>

<button onclick="respuesta1Oficio(2)">
    B. Memorando
</button>

<button onclick="respuesta1Oficio(3)">
    C. Informe
</button>

<button onclick="respuesta1Oficio(4)">
    D. Acta
</button>

<div id="feedback1"></div>

`;

    }

    else if (preguntaActual === 1) {

        contenido.innerHTML = `

            <h3>Decisión 2</h3>

            <p>
                Ya identificó que debe elaborar un oficio.
                Ahora debe determinar a quién debe dirigirse.
            </p>

            <p>
                ¿Cuál es la opción correcta?
            </p>

            <button onclick="respuesta2Oficio(false)">
                A. A cualquier trabajador de la institución
            </button>

            <button onclick="respuesta2Oficio(true)">
                B. A la autoridad o responsable correspondiente de la institución destinataria
            </button>

            <button onclick="respuesta2Oficio(false)">
                C. Al personal de limpieza
            </button>

            <p>
                <strong>Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 2) {

        contenido.innerHTML = `

            <h3>Decisión 3</h3>

            <p>
                Antes de enviar el oficio, debe revisar que el documento
                contenga los elementos necesarios.
            </p>

            <p>
                ¿Qué opción presenta una estructura adecuada?
            </p>

            <button onclick="respuesta3Oficio(false)">
                A. Solo título y texto
            </button>

            <button onclick="respuesta3Oficio(true)">
                B. Lugar y fecha, destinatario, asunto, cuerpo y firma
            </button>

            <button onclick="respuesta3Oficio(false)">
                C. Solo nombre y firma
            </button>

            <p>
                <strong>Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else {

        finalizarOficio();
    }
}


// ==========================================
// RESPUESTA 1
// ==========================================

function respuesta1Oficio(correcta) {

    if (correcta) {

        puntaje += 10;

        alert("✅ Correcto. El oficio se utiliza para comunicaciones formales, especialmente entre instituciones o autoridades.");

    } else {

        alert("❌ Incorrecto. En esta situación corresponde elaborar un oficio.");
    }

    preguntaActual = 1;

    mostrarPreguntaOficio();
}


// ==========================================
// RESPUESTA 2
// ==========================================

function respuesta2Oficio(correcta) {

    if (correcta) {

        puntaje += 10;

        alert("✅ Correcto. Debe identificarse correctamente a la autoridad o responsable destinatario.");

    } else {

        alert("❌ Incorrecto. Es necesario identificar al destinatario que corresponde.");

    }

    preguntaActual = 2;

    mostrarPreguntaOficio();
}


// ==========================================
// RESPUESTA 3
// ==========================================

function respuesta3Oficio(correcta) {

    if (correcta) {

        puntaje += 10;

        alert("✅ Correcto. Estos elementos permiten estructurar adecuadamente el documento.");

    } else {

        alert("❌ Incorrecto. Debe revisar la estructura del oficio antes de enviarlo.");

    }

    preguntaActual = 3;

    mostrarPreguntaOficio();
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function finalizarOficio() {

    let mensaje = "";
    let nivel = "";

    if (puntaje === 30) {

        nivel = "Excelente desempeño";

        mensaje = `
            <p>
                Ha completado correctamente todas las decisiones
                del caso de elaboración de oficio.
            </p>
        `;

    } else if (puntaje >= 20) {

        nivel = "Buen desempeño";

        mensaje = `
            <p>
                Ha demostrado un buen manejo del procedimiento,
                pero todavía puede mejorar algunos aspectos.
            </p>
        `;

    } else {

        nivel = "Necesita reforzar sus conocimientos";

        mensaje = `
            <p>
                Se recomienda revisar nuevamente el procedimiento
                para la elaboración de documentos administrativos.
            </p>
        `;
    }

    document.getElementById("contenidoCaso").innerHTML = `

        <h2>🏁 Simulación finalizada</h2>

        <hr>

        <h3>👤 Participante</h3>

        <p>
            <strong>Nombre:</strong> ${nombreParticipante}
        </p>

        <p>
            <strong>Institución / Empresa:</strong> ${institucionParticipante}
        </p>

        <hr>

        <h3>📄 Caso: Elaboración de Oficio</h3>

        <h3>📊 Resultado</h3>

        <p>
            <strong>Nivel de desempeño:</strong>
            ${nivel}
        </p>

        ${mensaje}

        <h2>
            ⭐ Puntaje obtenido: ${puntaje} / 30
        </h2>

        <hr>

        <button onclick="casoOficio()">
            🔄 Intentar nuevamente
        </button>

        <button onclick="mostrarDocumentos()">
            📄 Volver al módulo Documentos
        </button>

    `;
}


// ==========================================
// CASO 2: MEMORANDO
// ==========================================

// ==========================================
// CASO 2: ELABORACIÓN DE MEMORANDO
// ==========================================

function casoMemorando() {

    puntaje = 0;
    preguntaActual = 0;

    document.getElementById("documentos").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").textContent =
        "Caso 2: Elaboración de Memorando";

    mostrarPreguntaMemorando();
}


// ==========================================
// PREGUNTAS DEL MEMORANDO
// ==========================================

function mostrarPreguntaMemorando() {

    let contenido = document.getElementById("contenidoCaso");

    if (preguntaActual === 0) {

        contenido.innerHTML = `

            <h3>📋 Situación laboral</h3>

            <p>
                Usted trabaja como asistente administrativo.
                El jefe del área necesita comunicar una instrucción
                dirigida a todos los trabajadores de su oficina.
            </p>

            <h3>Decisión 1</h3>

            <p>
                ¿Qué documento sería el más adecuado para realizar
                esta comunicación interna?
            </p>

            <button onclick="respuesta1Memorando(false)">
                A. Oficio
            </button>

            <button onclick="respuesta1Memorando(true)">
                B. Memorando
            </button>

            <button onclick="respuesta1Memorando(false)">
                C. Carta comercial
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 1) {

        contenido.innerHTML = `

            <h3>Decisión 2</h3>

            <p>
                El jefe le entrega la información que debe comunicar.
                ¿Qué debe hacer antes de redactar el memorando?
            </p>

            <button onclick="respuesta2Memorando(false)">
                A. Enviarlo inmediatamente sin revisar la información
            </button>

            <button onclick="respuesta2Memorando(true)">
                B. Revisar la información, destinatarios y finalidad de la comunicación
            </button>

            <button onclick="respuesta2Memorando(false)">
                C. Eliminar la información que considere innecesaria sin consultar
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 2) {

        contenido.innerHTML = `

            <h3>Decisión 3</h3>

            <p>
                Antes de entregar el memorando, debe realizar
                una revisión final.
            </p>

            <p>
                ¿Qué debe verificar?
            </p>

            <button onclick="respuesta3Memorando(false)">
                A. Solo que tenga una firma
            </button>

            <button onclick="respuesta3Memorando(true)">
                B. Destinatario, asunto, contenido, fecha y firma
            </button>

            <button onclick="respuesta3Memorando(false)">
                C. Únicamente el tamaño de la letra
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else {

        finalizarMemorando();
    }
}


// ==========================================
// RESPUESTA 1
// ==========================================

function respuesta1Memorando(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. El memorando es utilizado para comunicaciones internas."
        );

    } else {

        alert(
            "❌ Incorrecto. En este caso se necesita una comunicación interna."
        );
    }

    preguntaActual = 1;

    mostrarPreguntaMemorando();
}


// ==========================================
// RESPUESTA 2
// ==========================================

function respuesta2Memorando(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. Antes de redactar debemos verificar la información y los destinatarios."
        );

    } else {

        alert(
            "❌ Incorrecto. Es necesario revisar la información antes de redactar."
        );
    }

    preguntaActual = 2;

    mostrarPreguntaMemorando();
}


// ==========================================
// RESPUESTA 3
// ==========================================

function respuesta3Memorando(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. La revisión final permite detectar errores antes de entregar el documento."
        );

    } else {

        alert(
            "❌ Incorrecto. La revisión debe considerar los elementos principales del memorando."
        );
    }

    preguntaActual = 3;

    mostrarPreguntaMemorando();
}


// ==========================================
// RESULTADO FINAL DEL MEMORANDO
// ==========================================

function finalizarMemorando() {

    let mensaje = "";
    let nivel = "";

    if (puntaje === 30) {

        nivel = "Excelente desempeño";

        mensaje = `
            <p>
                Ha completado correctamente todas las decisiones
                relacionadas con la elaboración de un memorando.
            </p>
        `;

    } else if (puntaje >= 20) {

        nivel = "Buen desempeño";

        mensaje = `
            <p>
                Ha demostrado un buen manejo del procedimiento,
                pero todavía puede mejorar algunos aspectos.
            </p>
        `;

    } else {

        nivel = "Necesita reforzar sus conocimientos";

        mensaje = `
            <p>
                Se recomienda revisar nuevamente el procedimiento
                de elaboración y revisión de memorandos.
            </p>
        `;
    }

    document.getElementById("contenidoCaso").innerHTML = `

        <h2>🏁 Simulación finalizada</h2>

        <hr>

        <h3>👤 Participante</h3>

        <p>
            <strong>Nombre:</strong> ${nombreParticipante}
        </p>

        <p>
            <strong>Institución / Empresa:</strong> ${institucionParticipante}
        </p>

        <hr>

        <h3>📋 Caso: Elaboración de Memorando</h3>

        <h3>📊 Resultado</h3>

        <p>
            <strong>Nivel de desempeño:</strong>
            ${nivel}
        </p>

        ${mensaje}

        <h2>
            ⭐ Puntaje obtenido: ${puntaje} / 30
        </h2>

        <hr>

        <button onclick="casoMemorando()">
            🔄 Intentar nuevamente
        </button>

        <button onclick="mostrarDocumentos()">
            📄 Volver al módulo Documentos
        </button>

    `;
}


// ==========================================
// GESTIÓN DOCUMENTAL
// ==========================================

// ==========================================
// CASO 1: RECEPCIÓN Y DERIVACIÓN
// ==========================================

function casoRecepcion() {

    puntaje = 0;
    preguntaActual = 0;

    document.getElementById("gestion").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").textContent =
        "Caso 1: Recepción y Derivación de Documento";

    mostrarPreguntaRecepcion();
}


function mostrarPreguntaRecepcion() {

    let contenido = document.getElementById("contenidoCaso");

    if (preguntaActual === 0) {

        contenido.innerHTML = `

            <h3>📥 Situación laboral</h3>

            <p>
                Usted trabaja en el área de recepción documental.
                Una persona entrega un documento dirigido a la institución.
            </p>

            <h3>Decisión 1</h3>

            <p>
                ¿Qué debe hacer primero?
            </p>

            <button onclick="respuesta1Recepcion(false)">
                A. Guardar inmediatamente el documento
            </button>

            <button onclick="respuesta1Recepcion(true)">
                B. Verificar destinatario, fecha, firma y anexos
            </button>

            <button onclick="respuesta1Recepcion(false)">
                C. Enviarlo directamente a cualquier área
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 1) {

        contenido.innerHTML = `

            <h3>Decisión 2</h3>

            <p>
                El documento cumple con los requisitos básicos.
            </p>

            <p>
                ¿Qué procedimiento corresponde realizar ahora?
            </p>

            <button onclick="respuesta2Recepcion(false)">
                A. Dejarlo sobre el escritorio
            </button>

            <button onclick="respuesta2Recepcion(true)">
                B. Registrar el ingreso del documento
            </button>

            <button onclick="respuesta2Recepcion(false)">
                C. Entregarlo sin realizar ningún registro
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 2) {

        contenido.innerHTML = `

            <h3>Decisión 3</h3>

            <p>
                El documento ya ha sido registrado.
                Ahora debe continuar su trámite.
            </p>

            <p>
                ¿Qué debe hacer?
            </p>

            <button onclick="respuesta3Recepcion(false)">
                A. Archivarlo sin enviarlo
            </button>

            <button onclick="respuesta3Recepcion(true)">
                B. Identificar el área responsable y derivar el documento
            </button>

            <button onclick="respuesta3Recepcion(false)">
                C. Devolverlo al remitente
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else {

        finalizarRecepcion();
    }
}


function respuesta1Recepcion(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. Antes de registrar un documento se debe verificar que contenga la información necesaria."
        );

    } else {

        alert(
            "❌ Incorrecto. Primero debe verificarse el documento recibido."
        );
    }

    preguntaActual = 1;

    mostrarPreguntaRecepcion();
}


function respuesta2Recepcion(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. El documento debe registrarse para dejar constancia de su ingreso."
        );

    } else {

        alert(
            "❌ Incorrecto. Todo documento recibido debe ser registrado antes de continuar su trámite."
        );
    }

    preguntaActual = 2;

    mostrarPreguntaRecepcion();
}


function respuesta3Recepcion(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. El documento debe ser derivado al área responsable de atenderlo."
        );

    } else {

        alert(
            "❌ Incorrecto. Debe identificarse el área competente y derivar correctamente el documento."
        );
    }

    preguntaActual = 3;

    mostrarPreguntaRecepcion();
}


function finalizarRecepcion() {

    let mensaje = "";
    let nivel = "";

    if (puntaje === 30) {

        nivel = "Excelente desempeño";

        mensaje = `
            <p>
                Ha realizado correctamente el proceso de recepción,
                registro y derivación documental.
            </p>
        `;

    } else if (puntaje >= 20) {

        nivel = "Buen desempeño";

        mensaje = `
            <p>
                Ha demostrado un buen manejo del procedimiento,
                pero debe reforzar algunos pasos de la gestión documental.
            </p>
        `;

    } else {

        nivel = "Necesita reforzar sus conocimientos";

        mensaje = `
            <p>
                Se recomienda revisar nuevamente el procedimiento
                de recepción, registro y derivación de documentos.
            </p>
        `;
    }

    document.getElementById("contenidoCaso").innerHTML = `

        <h2>🏁 Simulación finalizada</h2>

        <hr>

        <h3>👤 Participante</h3>

        <p>
            <strong>Nombre:</strong> ${nombreParticipante}
        </p>

        <p>
            <strong>Institución / Empresa:</strong> ${institucionParticipante}
        </p>

        <hr>

        <h3>📥 Caso: Recepción y Derivación de Documento</h3>

        <h3>📊 Resultado</h3>

        <p>
            <strong>Nivel de desempeño:</strong>
            ${nivel}
        </p>

        ${mensaje}

        <h2>
            ⭐ Puntaje obtenido: ${puntaje} / 30
        </h2>

        <hr>

        <button onclick="casoRecepcion()">
            🔄 Intentar nuevamente
        </button>

        <button onclick="mostrarGestionDocumental()">
            🗂️ Volver a Gestión Documental
        </button>

    `;
}


// ==========================================
// CASO 2: CLASIFICACIÓN Y ARCHIVO
// ==========================================

function casoArchivo() {

    puntaje = 0;
    preguntaActual = 0;

    document.getElementById("gestion").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").textContent =
        "Caso 2: Clasificación y Archivo de Documentos";

    mostrarPreguntaArchivo();
}


// ==========================================
// PREGUNTAS DEL CASO
// ==========================================

function mostrarPreguntaArchivo() {

    let contenido = document.getElementById("contenidoCaso");

    if (preguntaActual === 0) {

        contenido.innerHTML = `

            <h3>📂 Situación laboral</h3>

            <p>
                Usted trabaja como asistente administrativo y recibe
                varios documentos que deben ser organizados y archivados.
            </p>

            <p>
                Los documentos corresponden a diferentes áreas y
                tipos de trámite.
            </p>

            <h3>Decisión 1</h3>

            <p>
                ¿Qué debe hacer primero antes de archivar los documentos?
            </p>

            <button onclick="respuesta1Archivo(false)">
                A. Guardar todos los documentos juntos
            </button>

            <button onclick="respuesta1Archivo(true)">
                B. Identificar y clasificar los documentos según su tipo y procedencia
            </button>

            <button onclick="respuesta1Archivo(false)">
                C. Eliminar los documentos que parezcan antiguos
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 1) {

        contenido.innerHTML = `

            <h3>Decisión 2</h3>

            <p>
                Ya identificó y clasificó los documentos.
            </p>

            <p>
                Ahora debe determinar dónde debe colocar cada documento.
            </p>

            <p>
                ¿Cuál es la decisión correcta?
            </p>

            <button onclick="respuesta2Archivo(false)">
                A. Colocarlos en cualquier archivador disponible
            </button>

            <button onclick="respuesta2Archivo(true)">
                B. Ubicarlos en el archivo o serie documental que corresponda
            </button>

            <button onclick="respuesta2Archivo(false)">
                C. Guardarlos solamente según el tamaño del documento
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else if (preguntaActual === 2) {

        contenido.innerHTML = `

            <h3>Decisión 3</h3>

            <p>
                Los documentos ya fueron colocados en el archivo.
            </p>

            <p>
                Antes de finalizar el procedimiento, debe realizar
                una última verificación.
            </p>

            <p>
                ¿Qué debe comprobar?
            </p>

            <button onclick="respuesta3Archivo(false)">
                A. Que todos los documentos estén mezclados
            </button>

            <button onclick="respuesta3Archivo(true)">
                B. Que los documentos estén correctamente identificados, ordenados y ubicados
            </button>

            <button onclick="respuesta3Archivo(false)">
                C. Que solamente los documentos más recientes estén archivados
            </button>

            <p>
                <strong>⭐ Puntaje:</strong> ${puntaje}
            </p>
        `;

    }

    else {

        finalizarArchivo();
    }
}


// ==========================================
// RESPUESTA 1
// ==========================================

function respuesta1Archivo(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. Antes de archivar se deben identificar y clasificar los documentos."
        );

    } else {

        alert(
            "❌ Incorrecto. No se deben archivar documentos sin conocer su tipo y procedencia."
        );
    }

    preguntaActual = 1;

    mostrarPreguntaArchivo();
}


// ==========================================
// RESPUESTA 2
// ==========================================

function respuesta2Archivo(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. Cada documento debe ubicarse en el archivo o serie documental correspondiente."
        );

    } else {

        alert(
            "❌ Incorrecto. Los documentos deben ubicarse siguiendo un criterio de clasificación."
        );
    }

    preguntaActual = 2;

    mostrarPreguntaArchivo();
}


// ==========================================
// RESPUESTA 3
// ==========================================

function respuesta3Archivo(correcta) {

    if (correcta) {

        puntaje += 10;

        alert(
            "✅ Correcto. La verificación final permite comprobar que los documentos estén correctamente organizados."
        );

    } else {

        alert(
            "❌ Incorrecto. Antes de finalizar debe verificarse la correcta organización del archivo."
        );
    }

    preguntaActual = 3;

    mostrarPreguntaArchivo();
}


// ==========================================
// RESULTADO FINAL
// ==========================================

function finalizarArchivo() { let mensaje = ""; let nivel = ""; if (puntaje === 30) { nivel = "Excelente desempeño"; mensaje = ` <p> Ha realizado correctamente el proceso de clasificación y archivo de documentos. </p> `; } else if (puntaje >= 20) { nivel = "Buen desempeño"; mensaje = ` <p> Ha demostrado un buen manejo del proceso, pero debe reforzar algunos criterios de archivo. </p> `; } else { nivel = "Necesita reforzar sus conocimientos"; mensaje = ` <p> Se recomienda revisar nuevamente los criterios de clasificación, organización y archivo documental. </p> `; } document.getElementById("contenidoCaso").innerHTML = ` <h2>🏁 Simulación finalizada</h2> <hr> <h3>👤 Datos del participante</h3> <p> <strong>Nombre:</strong> ${nombreParticipante} </p> <p> <strong>Institución / Empresa:</strong> ${institucionParticipante} </p> <hr> <h3>📂 Caso realizado</h3> <p> Clasificación y Archivo de Documentos </p> <h3>📊 Nivel de desempeño</h3> <p> <strong>${nivel}</strong> </p> ${mensaje} <h2> ⭐ Puntaje obtenido: ${puntaje} / 30 </h2> <hr> <button onclick="casoArchivo()"> 🔄 Intentar nuevamente </button> <button onclick="mostrarGestionDocumental()"> 🗂️ Volver a Gestión Documental </button> `; }
