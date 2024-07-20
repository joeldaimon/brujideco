/* VELAS */
/* Cambia la imagen cuando pasas el ratón por encima */
function onVelas(x) {
    x.src = "img/velas2.png";
}
  
function offVelas(x) {
    x.src = "img/velas.png";
}

/* CALDEROS */
/* Cambia la imagen cuando pasas el ratón por encima */
function onCalderos(x) {
    x.src = "img/calderos2.png";
}
  
function offCalderos(x) {
    x.src = "img/calderos.png";
}

/* INCIENSOS */
/* Cambia la imagen cuando pasas el ratón por encima */
function onInciensos(x) {
    x.src = "img/incienso2.png";
}
  
function offInciensos(x) {
    x.src = "img/incienso.png";
}

/* LIBROS */
/* Cambia la imagen cuando pasas el ratón por encima */
function onLibros(x) {
    x.src = "img/libros2.png";
}
  
function offLibros(x) {
    x.src = "img/libros.png";
}

/* MINERALES */
/* Cambia la imagen cuando pasas el ratón por encima */
function onMinerales(x) {
    x.src = "img/minerales2.png";
}
  
function offMinerales(x) {
    x.src = "img/minerales.png";
}

/* ENVIADO FORMULARIO DE CONTACTO */
/* Cambia el formulario por el mensaje indicado */
function enviado(){
    document.getElementById("formulario").innerHTML = "<span>¡Mensaje Enviado!</span>";
}

/* SERVICIOS */
/* Cambia la tabla target con lo indicado en la función, la rellena */
function tablaAstro(){
	var table="<tr><th>Astrología</th></tr><tr><td>";
    table += "<ul style='text-align: left;'><li><b>CARTA BÁSICA: </b>escrita, se envía en formato PDF. Planetas con sus grados, casas, signos y aspectos. Se incluye Ascendente. Puede ser una carta temática (amor, sanación, espiritualidad, profesión, etc.).</li><li><b>CARTA COMPLETA: </b>escrita, se envía en formato PDF. Incluye todo lo de la carta básica, más Lilith, Nodos, Quirón, las 12 casas, Stelliums y casa vacías.</li><li><b>VIDEOLLAMADA: </b>en esta sesión hablaremos de tu carta natal, una sesión de una hora todo lo que dé tiempo a ver. Se pueede realizar cualquier tipo de carta o servicio astrológico. Puede ser un vídeo grabado si no tienes tiempo para la videollamada.</li> <li><b>UNA VIDEORESPUESTA: </b>una pregunta, se te enviará un vídeo de entre 6 y 10 minutos. Se subirá también a Youtube en privado.</li> <li><b>CARTA DRACÓNICA: </b> Se trata de una carta que refleja nuestra verdadera naturaleza espiritual , y que por lo tanto, podemos englobar dentro de la astrologia evolutiva o kármica.</li>  <li><b>SINASTRÍA:</b> es un análisis de compatibilidad que hay entre una o más personas, basándose en sus cartas astrales. Dicho análisis se enfoca en explicar el comportamiento de la relación que hay entre esas personas, ayudando a entender (y en ocasiones predecir) los posibles comportamientos que estas seguirán; pudiéndose sacar partido de los puntos en que armonizarán y previniendo o superando los aspectos en los que desarmonizarán.</li> <li><b>REVOLUCIÓN SOLAR/LUNAR:</b>  sirve como un mapa estelar que nos regala el cielo en nuestro cumpleaños para emprender un nuevo viaje alrededor del sol. Hace interpretaciones en tu año próximo, si es Solar, y en tu próximo mes, si es Lunar.</li></ul>";
    table += "</td></tr>"
	
    document.getElementById('TablaServicios').innerHTML = table;
}

/* Cambia la tabla target con lo indicado en la función, la rellena */
function tablaTarot(){
	var table="<tr><th>Tarot</th></tr><tr><td>";
    table += "<ul style='text-align: left;'> <li><b>SESIÓN DE TAROT: </b>puede ser presencial si vives en Valencia o por Videollamada. También puede grabarse en vídeo si tienes listas tus preguntas. Una hora, todas las preguntas que desees.</li><li><b>UNA VIDEORESPUESTA: </b>una pregunta, se te enviará un vídeo de entre 6 y 10 minutos. Se subirá también a Youtube en privado.</li></ul>";
    table += "</td></tr>"
	
    document.getElementById('TablaServicios').innerHTML = table;
}

/* Cambia la tabla target con lo indicado en la función, la rellena */
function tablaOtros(){
	var table="<tr><th>Otros</th></tr><tr><td>";
    table += "<ul style='text-align: left;'> <li><b>NUMEROLOGÍA: </b>una videorespuesta o una carta numerológica, incluye números de la suerte, número personal, número karma y pináculos.</li><li><b>INTERPRETACIÓN DE SUEÑOS: </b>una videorespuesta interpretando la simbología de tus sueños, también se usa el Tarot.</li></ul>";
    table += "</td></tr>"
	
    document.getElementById('TablaServicios').innerHTML = table;
}