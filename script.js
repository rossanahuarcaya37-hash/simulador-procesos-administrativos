// ============================================================
// SIMULADOR DIGITAL DE PROCESOS PARA TRABAJADORES ADMINISTRATIVOS
// IESTP "CATALINA BUENDÍA DE PECHO"
// ============================================================

// ============================================================
// VARIABLES DEL SIMULADOR
// ============================================================

let preguntaActual = 0;
let nombreParticipante = "";
let institucionParticipante = "";

// ============================================================
// INICIO DEL SIMULADOR
// ============================================================

function iniciarSimulacion() {

    nombreParticipante = document.getElementById("nombreParticipante").value.trim();
    institucionParticipante = document.getElementById("institucion").value.trim();

    if (nombreParticipante === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    if (institucionParticipante === "") {
        alert("Por favor, ingresa la institución a la que perteneces.");
        return;
    }

    document.getElementById("inicio").style.display = "none";
    document.getElementById("documentos").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// MOSTRAR MÓDULO 1
// ============================================================

function mostrarDocumentos() {

    document.getElementById("inicio").style.display = "none";
    document.getElementById("caso").style.display = "none";
    document.getElementById("documentos").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// GESTIÓN DOCUMENTAL DESHABILITADA
// ============================================================

function mostrarGestionDocumental() {

    alert(
        "Este módulo se encuentra en desarrollo.\n\n" +
        "Próximamente estará disponible."
    );
}


// ============================================================
// VOLVER AL INICIO
// ============================================================

function volverInicio() {

    document.getElementById("documentos").style.display = "none";
    document.getElementById("caso").style.display = "none";
    document.getElementById("inicio").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// FUNCIONES AUXILIARES DE DISEÑO
// ============================================================

function actualizarProgreso(numero, total) {

    const porcentaje = Math.round((numero / total) * 100);

    return `
        <div class="progreso-contenedor">

            <div class="progreso-superior">
                <span>
                    Decisión <strong>${numero}</strong> de <strong>${total}</strong>
                </span>

                <span>
                    ${porcentaje}%
                </span>
            </div>

            <div class="barra-progreso">
                <div
                    class="barra-progreso-avance"
                    style="width: ${porcentaje}%;">
                </div>
            </div>

        </div>
    `;
}


function mostrarBotonesProfesionales(opciones, funcionRespuesta) {

    let html = `
        <div class="opciones-decision">
    `;

    opciones.forEach((opcion, index) => {

        const letra = String.fromCharCode(65 + index);

        html += `
            <button
                class="boton-opcion"
                onclick="${funcionRespuesta}(${index})">

                <span class="letra-opcion">${letra}</span>

                <span class="texto-opcion">
                    ${opcion}
                </span>

                <span class="flecha-opcion">›</span>

            </button>
        `;
    });

    html += `</div>`;

    return html;
}


// ============================================================
// CASO 1: ELABORACIÓN DE OFICIO
// ============================================================

function casoOficio() {

    preguntaActual = 1;

    document.getElementById("documentos").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").innerHTML = `
        📄 Caso 1: Solicitud de información institucional
    `;

    mostrarPreguntaOficio();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// DECISIONES DEL CASO DE OFICIO
// ============================================================

function mostrarPreguntaOficio() {

    const contenido = document.getElementById("contenidoCaso");

    // --------------------------------------------------------
    // DECISIÓN 1
    // --------------------------------------------------------

    if (preguntaActual === 1) {

        contenido.innerHTML = `

            ${actualizarProgreso(1, 6)}

            <div class="caso-introduccion">

                <span class="etiqueta-caso">
                    SITUACIÓN 01
                </span>

                <h3>
                    Identificación del documento
                </h3>

                <p>
                    El IESTP "Catalina Buendía de Pecho" necesita
                    solicitar información oficial a otra institución.
                </p>

                <p>
                    Como trabajador administrativo, debes seleccionar
                    el documento adecuado para realizar esta comunicación.
                </p>

            </div>

            <div class="pregunta-box">

                <h3>
                    ¿Qué documento administrativo corresponde utilizar?
                </h3>

                ${mostrarBotonesProfesionales(
                    [
                        "Oficio",
                        "Memorando",
                        "Informe",
                        "Solicitud"
                    ],
                    "respuesta1Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }


    // --------------------------------------------------------
    // DECISIÓN 2
    // --------------------------------------------------------

    else if (preguntaActual === 2) {

        contenido.innerHTML = `

            ${actualizarProgreso(2, 6)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 02
                </span>

                <h3>
                    Selección del destinatario
                </h3>

                <p>
                    Una vez identificado el Oficio, debes determinar
                    quién debe recibir el documento.
                </p>

                ${mostrarBotonesProfesionales(
                    [
                        "Cualquier trabajador de la institución destinataria.",
    "Únicamente el personal de vigilancia.",
    "La autoridad o responsable competente de la institución destinataria.",
    "Cualquier estudiante de la institución."
                    ],
                    "respuesta2Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }


    // --------------------------------------------------------
    // DECISIÓN 3
    // --------------------------------------------------------

    else if (preguntaActual === 3) {

        contenido.innerHTML = `

            ${actualizarProgreso(3, 6)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 03
                </span>

                <h3>
                    Estructura del Oficio
                </h3>

                <p>
                    Debes organizar correctamente los principales
                    elementos que conforman un Oficio.
                </p>

                ${mostrarBotonesProfesionales(
                    [
                        "Título, introducción, desarrollo y bibliografía.",
    "Lugar y fecha, destinatario, asunto, texto y firma.",
    "Solo asunto, texto y firma.",
    "Membrete, fotografías y anexos únicamente."
                    ],
                    "respuesta3Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }


    // --------------------------------------------------------
    // DECISIÓN 4
    // --------------------------------------------------------

    else if (preguntaActual === 4) {

        contenido.innerHTML = `

            ${actualizarProgreso(4, 6)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 04
                </span>

                <h3>
                    Datos del encabezado
                </h3>

                <p>
                    Antes de redactar el contenido del documento,
                    debes identificar qué datos corresponden al
                    encabezado y presentación administrativa.
                </p>

                <p>
                    <strong>
                        Selecciona la alternativa que contiene
                        correctamente estos elementos.
                    </strong>
                </p>

                ${mostrarBotonesProfesionales(
                    [
                        "Fotografías, conclusiones, recomendaciones y bibliografía.",
    "Solo nombre de la institución, firma y sello.",
    "Título, introducción, desarrollo y conclusión.",
    "Membrete, nombre del año, lugar y fecha, código, destinatario, asunto y referencia."
                    ],
                    "respuesta4Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }


    // --------------------------------------------------------
    // DECISIÓN 5
    // --------------------------------------------------------

    else if (preguntaActual === 5) {

        contenido.innerHTML = `

            ${actualizarProgreso(5, 6)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 05
                </span>

                <h3>
                    Redacción del texto
                </h3>

                <p>
                    El contenido del Oficio debe expresar el motivo
                    de la comunicación de manera clara, ordenada
                    y formal.
                </p>

                <p>
                    ¿Cuál de las siguientes alternativas representa
                    una estructura adecuada para el texto?
                </p>

                ${mostrarBotonesProfesionales(
                    [
                        "Dos o tres párrafos que incluyan una fórmula de apertura, la exposición del asunto y un párrafo de cierre.",
    "Un solo párrafo con información mezclada y sin orden.",
    "Una lista de palabras clave sin explicación.",
    "Solo una frase breve acompañada de fotografías."
                    ],
                    "respuesta5Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }


    // --------------------------------------------------------
    // DECISIÓN 6
    // --------------------------------------------------------

    else if (preguntaActual === 6) {

        contenido.innerHTML = `

            ${actualizarProgreso(6, 6)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 06
                </span>

                <h3>
                    Parte final del documento
                </h3>

                <p>
                    Finalmente, debes verificar los elementos que
                    corresponden a la parte final del documento
                    administrativo.
                </p>

                <p>
                    Selecciona la alternativa correcta.
                </p>

                ${mostrarBotonesProfesionales(
                    [
                        "Introducción, desarrollo, conclusión y bibliografía.",
    "Título, fotografías y gráficos.",
    "Antefirma, firma, sello, posfirma, anexo, con copia y pie de página.",
    "Solo firma y nombre del trabajador."
                    ],
                    "respuesta6Oficio"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }
}


// ============================================================
// FUNCIÓN PARA MOSTRAR RETROALIMENTACIÓN
// ============================================================

function mostrarRetroalimentacion(esCorrecta, mensaje, continuar = true) {

    const retro = document.getElementById("retroalimentacion");

    if (!retro) return;

    if (esCorrecta) {

        retro.innerHTML = `

            <div class="retroalimentacion correcta">

                <div class="icono-retro">
                    ✓
                </div>

                <div>
                    <strong>¡Decisión correcta!</strong>

                    <p>
                        ${mensaje}
                    </p>
                </div>

            </div>

            ${
                continuar
                ?
                `
                    <button
                        class="boton-continuar"
                        onclick="siguienteDecision()">

                        Continuar
                        <span>→</span>

                    </button>
                `
                :
                ""
            }
        `;

    } else {

        retro.innerHTML = `

            <div class="retroalimentacion incorrecta">

                <div class="icono-retro">
                    !
                </div>

                <div>
                    <strong>Revisa tu decisión</strong>

                    <p>
                        ${mensaje}
                    </p>
                </div>

            </div>

            <button
                class="boton-reintentar"
                onclick="mostrarPreguntaOficio()">

                ↻ Intentar nuevamente

            </button>
        `;
    }
}


// ============================================================
// DECISIÓN 1 - RESPUESTA
// ============================================================

function respuesta1Oficio(opcion) {

    if (opcion === 0) {

        mostrarRetroalimentacion(
            true,
            "El Oficio es el documento utilizado para realizar comunicaciones formales entre instituciones o autoridades."
        );

    } else {

        mostrarRetroalimentacion(
            false,
            "Para solicitar información oficial a otra institución corresponde utilizar un Oficio."
        );
    }
}


// ============================================================
// DECISIÓN 2 - RESPUESTA
// ============================================================

function respuesta2Oficio(opcion) {

    if (opcion === 2) {

        mostrarRetroalimentacion(
            true,
            "¡Excelente! Has identificado correctamente que el documento debe dirigirse a la autoridad o responsable competente de la institución destinataria."
        );

    } else {

        mostrarRetroalimentacion(
            false,
            "Revisa tu decisión. El destinatario debe ser la autoridad o responsable competente que corresponda atender la solicitud."
        );

    }
}


// ============================================================
// DECISIÓN 3 - RESPUESTA
// ============================================================

function respuesta3Oficio(opcion) {

    if (opcion === 1) {

        mostrarRetroalimentacion(
            true,
            "La estructura considera lugar y fecha, destinatario, asunto, texto y firma. En esta simulación utilizamos el término 'texto' para referirnos al contenido del documento."
        );

    } else {

        mostrarRetroalimentacion(
            false,
            "Revisa la estructura básica del Oficio. Debe considerar lugar y fecha, destinatario, asunto, texto y firma."
        );
    }
}


// ============================================================
// DECISIÓN 4 - RESPUESTA
// ============================================================

function respuesta4Oficio(opcion) {
    if (opcion === 3) {

        const retro = document.getElementById("retroalimentacion");

        retro.innerHTML = `
            <div class="retroalimentacion correcta">
                <div class="icono-retro">✓</div>
                <div>
                    <strong>¡Decisión correcta!</strong>
                    <p>
                        ¡Muy bien! Has identificado correctamente los principales
                        datos de presentación y encabezado del documento.
                    </p>
                </div>
            </div>

            <div class="vista-documento">

                <div class="documento-a4">

                    <div class="zona-superior-documento">

                        <!-- MEMBRETE -->
                        <div class="membrete-documento">

                            <img 
                                src="logo-cbp.jpg" 
                                alt="Logo institucional"
                            >

                            <p class="nombre-institucion-documento">
                                INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO
                            </p>

                            <p class="nombre-institucion-documento">
                                "CATALINA BUENDÍA DE PECHO"
                            </p>

                            <p class="ubicacion-documento">
                                Ica – Perú
                            </p>

                        </div>


                        <!-- NOMBRE DEL AÑO -->
                        <div class="nombre-anio-documento">
                            "AÑO DE LA ESPERANZA Y EL FORTALECIMIENTO
                            DE LA EDUCACIÓN"
                        </div>


                        <!-- LUGAR Y FECHA -->
                        <div class="fecha-documento">
                            Ica, 06 de septiembre de 2026
                        </div>


                        <!-- CÓDIGO -->
                        <div class="codigo-documento">
                            OFICIO N.º 001-2026-IESTP-CBP-DG
                        </div>


                        <!-- DESTINATARIO -->
                        <div class="destinatario-documento">

                            <div class="fila-destinatario">
                                <span class="etiqueta-destinatario">
                                    SEÑOR:
                                </span>

                                <span class="nombre-destinatario">
                                    JUAN PÉREZ GARCÍA
                                </span>
                            </div>

                            <div class="fila-destinatario">
                                <span></span>
                                <span>
                                    Director del IESP "Juan XXIII"
                                
                                </span>
                            </div>

                        </div>


                        <!-- ASUNTO -->
                        <div class="asunto-documento">

                            <span class="etiqueta-asunto">
                                ASUNTO:
                            </span>

                            <span>
                                Solicitud de información institucional
                            </span>

                        </div>


                        <!-- REFERENCIA -->
                        <div class="referencia-documento">

    <span class="etiqueta-referencia">
        REFERENCIA:
    </span>

    <span>
        ______________________________
    </span>

</div>

</div>

<!-- CONTINUAR -->
<button 
    class="boton-continuar continuar-documento"
    onclick="siguienteDecision()"
>
    Continuar <span>→</span>
</button>
        `;

    } else {

        mostrarRetroalimentacion(
            false,
            "Revisa los datos que identifican y organizan formalmente el documento antes de desarrollar su contenido."
        );
    }
}


// ============================================================
// DECISIÓN 5 - RESPUESTA
// ============================================================

function respuesta5Oficio(opcion) {
    if (opcion === 0) {

        const retro = document.getElementById("retroalimentacion");

        retro.innerHTML = `
            <div class="retroalimentacion correcta">
                <div class="icono-retro">✓</div>
                <div>
                    <strong>¡Decisión correcta!</strong>
                    <p>
                        ¡Excelente! El texto presenta una fórmula de apertura,
                        la exposición del asunto y un párrafo de cierre.
                    </p>
                </div>
            </div>

            <div class="vista-documento">

                <div class="documento-a4 documento-con-texto">

                    <!-- MEMBRETE -->
                    <div class="membrete-documento">

                        <img src="logo-cbp.jpg" alt="Logo institucional">

                        <p class="nombre-institucion-documento">
                            INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO
                        </p>

                        <p class="nombre-institucion-documento">
                            "CATALINA BUENDÍA DE PECHO"
                        </p>

                        <p class="ubicacion-documento">
                            Ica – Perú
                        </p>

                    </div>

                    <!-- NOMBRE DEL AÑO -->
                    <div class="nombre-anio-documento">
                        "AÑO DE LA ESPERANZA Y EL FORTALECIMIENTO
                        DE LA EDUCACIÓN"
                    </div>

                    <!-- LUGAR Y FECHA -->
                    <div class="fecha-documento">
                        Ica, 06 de septiembre de 2026
                    </div>

                    <!-- CÓDIGO -->
                    <div class="codigo-documento">
                        OFICIO Nº 001-2026-IESTP-CBP-DG
                    </div>

                    <!-- DESTINATARIO -->
                    
<div class="destinatario-documento">

    <div class="fila-destinatario">
        <span class="etiqueta-destinatario">
            SEÑOR:
        </span>

        <span class="nombre-destinatario">
            JUAN PÉREZ GARCÍA
        </span>
    </div>

    <div class="fila-destinatario">
        <span></span>

        <span>
            Director del IESP "Juan XXIII"
        </span>
    </div>

</div>

                    <!-- ASUNTO -->
                    <div class="asunto-documento">

                        <span class="etiqueta-asunto">
                            ASUNTO:
                        </span>

                        <span>
                            Solicitud de información institucional
                        </span>

                    </div>

                    <!-- REFERENCIA -->
                    <div class="referencia-documento">

                        <span class="etiqueta-referencia">
                            REFERENCIA:
                        </span>

                        <span>
                            ______________________________
                        </span>

                    </div>

                    
                    <!-- PÁRRAFOS -->
                    
<!-- PÁRRAFOS -->
<div class="texto-documento">

    <p>
        Tengo el agrado de dirigirme a usted para saludarlo cordialmente y felicitar la importante gestión que viene desarrollando al frente del IESP "Juan XXIII", institución que contribuye de manera significativa a la formación y desarrollo profesional de sus estudiantes.
    </p>

    <p>
        Asimismo, solicito a su despacho información institucional relacionada con las estrategias y experiencias desarrolladas en la gestión académica y administrativa, con la finalidad de conocer las buenas prácticas que puedan contribuir al fortalecimiento de los procesos institucionales del IESTP "Catalina Buendía de Pecho".
    </p>

    <p>
        Es propicia la oportunidad para reiterarle mi
        consideración y estima personal.
    </p>

</div>

            <button 
                class="boton-continuar continuar-documento"
                onclick="siguienteDecision()"
            >
                Continuar <span>→</span>
            </button>
        `;

    } else {

        mostrarRetroalimentacion(
            false,
            "El texto administrativo debe mantener una secuencia lógica: apertura, exposición del asunto y cierre."
        );
    }
}


// ============================================================
// DECISIÓN 6 - RESPUESTA
// ============================================================

function respuesta6Oficio(opcion) {
    if (opcion === 2) {
        const retro = document.getElementById("retroalimentacion");

        retro.innerHTML = `
            <div class="retroalimentacion correcta">
                <div class="icono-retro">✓</div>
                <div>
                    <strong>¡Decisión correcta!</strong>
                    <p>
                        ¡Excelente! Has identificado correctamente los elementos
                        que corresponden a la parte final del documento administrativo.
                    </p>
                </div>
            </div>

            <div class="vista-documento">

                <div class="documento-a4 documento-con-texto documento-final">

                    <!-- MEMBRETE -->
                    <div class="membrete-documento">
                        <img src="logo-cbp.jpg" alt="Logo institucional">

                        <p class="nombre-institucion-documento">
                            INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO
                        </p>

                        <p class="nombre-institucion-documento">
                            "CATALINA BUENDÍA DE PECHO"
                        </p>

                        <p class="ubicacion-documento">
                            Ica – Perú
                        </p>
                    </div>

                    <!-- NOMBRE DEL AÑO -->
                    <div class="nombre-anio-documento">
                        "AÑO DE LA ESPERANZA Y EL FORTALECIMIENTO
                        DE LA EDUCACIÓN"
                    </div>

                    <!-- LUGAR Y FECHA -->
                    <div class="fecha-documento">
                        Ica, 06 de septiembre de 2026
                    </div>

                    <!-- CÓDIGO -->
                    <div class="codigo-documento">
                        OFICIO N.º 001-2026-IESTP-CBP-DG
                    </div>

                    <!-- DESTINATARIO -->
                    <div class="destinatario-documento">

                        <div class="fila-destinatario">
                            <span class="etiqueta-destinatario">
                                SEÑOR:
                            </span>

                            <span class="nombre-destinatario">
                                JUAN PÉREZ GARCÍA
                            </span>
                        </div>

                        <div class="fila-destinatario">
                            <span></span>

                            <span>
                                Director del IESP "Juan XXIII"
                            </span>
                        </div>

                    </div>

                    <!-- ASUNTO -->
                    <div class="asunto-documento">
                        <span class="etiqueta-asunto">
                            ASUNTO:
                        </span>

                        <span>
                            Solicitud de información institucional
                        </span>
                    </div>

                    <!-- REFERENCIA -->
                    <div class="referencia-documento">
                        <span class="etiqueta-referencia">
                            REFERENCIA:
                        </span>

                        <span>
                            ______________________________
                        </span>
                    </div>

                    <!-- TEXTO DEL OFICIO -->
                    <div class="texto-documento">

                        <p>
                            Tengo el agrado de dirigirme a usted para saludarlo
                            cordialmente y felicitar la importante gestión que
                            viene desarrollando al frente del IESP "Juan XXIII",
                            institución que contribuye de manera significativa
                            a la formación y desarrollo profesional de sus
                            estudiantes.
                        </p>

                        <p>
                            Asimismo, solicito a su despacho información
                            institucional relacionada con las estrategias y
                            experiencias desarrolladas en la gestión académica
                            y administrativa, con la finalidad de conocer las
                            buenas prácticas que puedan contribuir al
                            fortalecimiento de los procesos institucionales
                            del IESTP "Catalina Buendía de Pecho".
                        </p>

                        <p>
                            Es propicia la oportunidad para reiterarle mi
                            consideración y estima personal.
                        </p>

                    </div>

                    <!-- ELEMENTOS DE TÉRMINO -->

<div class="termino-documento">

    <!-- ATENTAMENTE -->
    <p class="atentamente-documento">
        Atentamente,
    </p>


    <!-- ESPACIO ADICIONAL: 3 ESPACIOS MÁS -->
    <div class="espacio-firma"></div>


    <!-- CÍRCULO Y DATOS DE QUIEN FIRMA -->
    <div class="firma-final-documento">

        <!-- UN SOLO CÍRCULO -->
        <div class="circulo-sello"></div>

        <!-- NOMBRE Y CARGO -->
        <div class="datos-firma-final">

            <p class="nombre-firma">
                Lic. JUAN PÉREZ GARCÍA
            </p>

            <p class="cargo-firma">
                Director General
            </p>

        </div>

    </div>


    <!-- ANEXO, COPIA Y PIE DE PÁGINA -->
    <div class="datos-finales-documento">

        <p>
    <strong class="anexo-subrayado">ANEXO</strong>: Copia simple de DNI
</p>

        <p>
            <strong>c.c.:</strong> Dirección Regional
        </p>

        <p>
            JPG/RHC
        </p>

    </div>

</div>

                </div>

                <!-- BOTÓN FINAL -->
                <button
                    class="boton-continuar continuar-documento"
                    onclick="mostrarFelicitacionOficio()"
                >
                    Finalizar caso <span>✓</span>
                </button>

            </div>
        `;

    } else {

        mostrarRetroalimentacion(
            false,
            "Revisa los elementos que corresponden a la parte final del documento administrativo."
        );
    }
}


// ============================================================
// SIGUIENTE DECISIÓN
// ============================================================

function siguienteDecision() {

    if (preguntaActual < 6) {

        preguntaActual++;

        mostrarPreguntaOficio();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        mostrarFelicitacionOficio();
    }
}


// ============================================================
// PANTALLA FINAL - FELICITACIONES
// ============================================================

function mostrarFelicitacionOficio() {

    const contenido = document.getElementById("contenidoCaso");

    contenido.innerHTML = `

        <div class="pantalla-felicitacion">

            <div class="estrellas">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

            </div>

            <div class="icono-felicitacion">
                ✓
            </div>

            <span class="etiqueta-final">
                CASO COMPLETADO
            </span>

            <h2>
                ¡Excelente trabajo, ${nombreParticipante}!
            </h2>

            <p class="mensaje-final">
                Has completado satisfactoriamente las seis decisiones
                del caso de elaboración del Oficio.
            </p>

            <p class="mensaje-final-secundario">
                Has demostrado conocimientos sobre la estructura,
                contenido y presentación de un documento administrativo.
            </p>

            <div class="felicitacion-destacada">

                <strong>
                    🎉 ¡Felicitaciones!
                </strong>

                <span>
                    Continúa desarrollando tus competencias administrativas.
                </span>

            </div>

            <div class="acciones-finales">

                <button
                    class="boton-principal"
                    onclick="mostrarDocumentos()">

                    ← Volver al Módulo 1

                </button>

                <button
                    class="boton-secundario"
                    onclick="volverInicio()">

                    Ir al inicio

                </button>

            </div>

        </div>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// CASO 2: MEMORANDO
// ============================================================

let preguntaMemorando = 1;


// ============================================================
// INICIAR CASO MEMORANDO
// ============================================================

function casoMemorando() {

    preguntaMemorando = 1;

    document.getElementById("documentos").style.display = "none";
    document.getElementById("caso").style.display = "block";

    document.getElementById("tituloCaso").innerHTML = `
        📝 Caso 2: Comunicación de disposiciones administrativas
    `;

    mostrarPreguntaMemorando();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ============================================================
// PREGUNTAS DEL MEMORANDO
// ============================================================

function mostrarPreguntaMemorando() {

    const contenido = document.getElementById("contenidoCaso");

    if (preguntaMemorando === 1) {

        contenido.innerHTML = `

            ${actualizarProgreso(1, 3)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 01
                </span>

                <h3>
                    ¿Cuál es la finalidad principal del Memorando?
                </h3>

                ${mostrarBotonesProfesionales(
                    [
                        "Comunicar asuntos internos dentro de una institución.",
                        "Realizar una comunicación entre dos instituciones externas.",
                        "Registrar una reunión.",
                        "Presentar los resultados de una investigación."
                    ],
                    "respuesta1Memorando"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }

    else if (preguntaMemorando === 2) {

        contenido.innerHTML = `

            ${actualizarProgreso(2, 3)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 02
                </span>

                <h3>
                    ¿A quién se dirige normalmente un Memorando?
                </h3>

                ${mostrarBotonesProfesionales(
                    [
                        "A personal o áreas dentro de la misma institución.",
                        "A cualquier ciudadano.",
                        "A una institución extranjera.",
                        "A medios de comunicación."
                    ],
                    "respuesta2Memorando"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }

    else if (preguntaMemorando === 3) {

        contenido.innerHTML = `

            ${actualizarProgreso(3, 3)}

            <div class="pregunta-box">

                <span class="etiqueta-caso">
                    DECISIÓN 03
                </span>

                <h3>
                    ¿Qué característica debe tener el texto de un Memorando?
                </h3>

                ${mostrarBotonesProfesionales(
                    [
                        "Claro, breve y directamente relacionado con el asunto.",
                        "Extenso y con información que no guarda relación.",
                        "Redactado únicamente con palabras técnicas.",
                        "Sin indicar claramente el motivo de la comunicación."
                    ],
                    "respuesta3Memorando"
                )}

                <div id="retroalimentacion"></div>

            </div>
        `;
    }
}


// ============================================================
// RESPUESTAS MEMORANDO
// ============================================================

function respuesta1Memorando(opcion) {

    if (opcion === 0) {

        mostrarRetroalimentacion(
            true,
            "Correcto. El Memorando se utiliza principalmente para comunicaciones internas."
        );

        document.getElementById("retroalimentacion").querySelector(".boton-continuar").onclick = function () {
            preguntaMemorando++;
            mostrarPreguntaMemorando();
        };

    } else {

        mostrarRetroalimentacion(
            false,
            "El Memorando se utiliza principalmente para comunicaciones internas dentro de una institución."
        );
    }
}


function respuesta2Memorando(opcion) {

    if (opcion === 0) {

        mostrarRetroalimentacion(
            true,
            "Correcto. El Memorando se dirige normalmente a trabajadores, responsables o áreas de la misma institución."
        );

        document.getElementById("retroalimentacion").querySelector(".boton-continuar").onclick = function () {
            preguntaMemorando++;
            mostrarPreguntaMemorando();
        };

    } else {

        mostrarRetroalimentacion(
            false,
            "Recuerda que el Memorando se utiliza principalmente para comunicaciones internas."
        );
    }
}


function respuesta3Memorando(opcion) {

    if (opcion === 0) {

        mostrarRetroalimentacion(
            true,
            "Correcto. Un buen Memorando comunica el asunto de manera clara, breve y directa."
        );

        setTimeout(() => {

            mostrarFelicitacionMemorando();

        }, 800);

    } else {

        mostrarRetroalimentacion(
            false,
            "El texto de un Memorando debe ser claro, breve y directamente relacionado con el asunto."
        );
    }
}


// ============================================================
// FELICITACIÓN MEMORANDO
// ============================================================

function mostrarFelicitacionMemorando() {

    const contenido = document.getElementById("contenidoCaso");

    contenido.innerHTML = `

        <div class="pantalla-felicitacion">

            <div class="estrellas">

                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>

            </div>

            <div class="icono-felicitacion">
                ✓
            </div>

            <span class="etiqueta-final">
                CASO COMPLETADO
            </span>

            <h2>
                ¡Muy bien, ${nombreParticipante}!
            </h2>

            <p class="mensaje-final">
                Has completado satisfactoriamente el caso
                de elaboración del Memorando.
            </p>

            <div class="felicitacion-destacada">

                <strong>
                    🎉 ¡Felicitaciones!
                </strong>

                <span>
                    Sigue avanzando en tu entrenamiento administrativo.
                </span>

            </div>

            <div class="acciones-finales">

                <button
                    class="boton-principal"
                    onclick="mostrarDocumentos()">

                    ← Volver al Módulo 1

                </button>

                <button
                    class="boton-secundario"
                    onclick="volverInicio()">

                    Ir al inicio

                </button>

            </div>

        </div>
    `;
}


// ============================================================
// FUNCIONES DE GESTIÓN DOCUMENTAL
// SE CONSERVAN PARA DESARROLLO FUTURO
// ============================================================

function casoRecepcion() {

    alert(
        "El caso de recepción documental estará disponible próximamente."
    );
}


function casoArchivo() {

    alert(
        "El caso de archivo documental estará disponible próximamente."
    );
}
