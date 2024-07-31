

let u = 0;
let todoListo = u;

function desayunar(){
    if(u > 4) {
        document.getElementById('bur-29').className = 'bur-29-activado';
    } 
}
var p6966165165 = document.getElementById("p6966165165");
var a6174987541451 = document.getElementById("a6174987541451");

var panEntero = "panEntero";
p6966165165.onclick = function () {
    if (panEntero == "panEntero") {
        p6966165165.src = "../pinturas/panLactal1.png";
        panEntero = "rodaja1";
        activarAudioPan();
    } else if (panEntero == "rodaja1") {
        p6966165165.src = "../pinturas/panLactal2.png";
        panEntero = "rodaja2";
        activarAudioPan();
    } else if (panEntero == "rodaja2") {
        p6966165165.src = "../pinturas/panLactal3.png";
        panEntero = "rodaja3";
        activarAudioPan();
    } else if (panEntero == "rodaja3") {
        p6966165165.src = "../pinturas/panLactal4.png";
        panEntero = "rodaja4";
        activarAudioPan();
    } else if (panEntero == "rodaja4") {
        p6966165165.src = "../pinturas/panLactal5.png";
        panEntero = "rodaja5";
        activarAudioPan();
    } else if (panEntero == "rodaja5") {
        p6966165165.src = "../pinturas/panLactal6.png";
        panEntero = "rodaja5";
        activarAudioPan();
        document.getElementById('bur-23').className = 'bur-23-desactivado';
        u = u + 1;
        desayunar();
    }
}

function activarAudioPan() {
    if (a6174987541451.paused) { 
        a6174987541451.play(); 
    } else {
        a6174987541451.pause(); 
        a6174987541451.currentTime = 0; 
    }
}

var tomarHuevos = document.getElementById("h54162268"); 
var cocinando = document.getElementById("s692686");
var p39339399 = document.getElementById("p39339399"); 
var botonSarten = document.getElementById("bs87989789");
var a66229788 = document.getElementById("a66229788");
var b87s = document.getElementById("b87");
var a198897 = document.getElementById("a198897");
var huevosRotos = "no";
var sartenVacia = "si";
var i = 0;
var platoConHuevos = i; 
tomarHuevos.onclick = function () {
    if (huevosRotos == "no" && sartenVacia == "si" && (platoConHuevos < 4)) {
        cocinando.src = "../pinturas/romperHuevo.gif"; 
        huevosRotos = "si";
        sartenVacia = "no";
        activarAudioRomperHuevos();
    }
}


function activarAudioRomperHuevos() {
    if (a66229788.paused) { 
        romperHuevos.play(); 
    } else {
        b87s.play(); 
        romperHuevos.currentTime = 0; 
    }
}


function cocinarSarten() {
    var nombreImagen = "../pinturas/plato";  
    if (sartenVacia == "no" && huevosRotos == "si") {
        cocinando.src = "../pinturas/sartenConHuevosGIF.gif"; 
        botonSarten.src = "../pinturas/on.png";
        huevosRotos = "no";
        sartenVacia = "no";
        platoConHuevos = i;
        activarAudioSarten(); 
        document.getElementById('bur-26').className = 'bur-26-desactivado';
    } else if (sartenVacia == "no" && huevosRotos == "no") {
        cocinando.src = "../pinturas/sartenConHuevos1.png"; 
        i = i + 1; 
        nombreImagen += i; 
        nombreImagen += ".png";
       
        p39339399.src = nombreImagen;
        botonSarten.src = "../pinturas/off.png";
        huevosRotos = "no";
        sartenVacia = "si";
        platoConHuevos = i;
        activarAudioSarten(); 
        if (platoConHuevos == 4) {
            document.getElementById('bur-27').className = 'bur-27-desactivado';
            u = u + 1;
            desayunar();
        }
    }
}

function activarAudioSarten() {
    if (a66229788.paused) { 
        b87s.play(); 
        a66229788.play(); 
    } else {
        b87s.play(); 
        a66229788.pause(); 
        a66229788.currentTime = 0; 
    }
}

var p887946 = document.getElementById("p887946");
var tazasmesa = document.getElementById("t999641");
var botonPava = document.getElementById("bp698798465")
var a694994165616 = document.getElementById("a694994165616");
var b87p = document.getElementById("b87");
var pavaCociandose = "no";
var tazasLlenas = "no";

function cocinarPava() {
    if (pavaCociandose == "no" && tazasLlenas == "no") {
        p887946.src = "../pinturas/tetera.gif";
        botonPava.src = "../pinturas/on.png";
        pavaCociandose = "si";
        tazasLlenas = "no";
        activarAudioPava(); 
        document.getElementById('bur-26').className = 'bur-26-desactivado';
        u = u + 1;

    } else if (pavaCociandose == "si" && tazasLlenas == "no") {
        p887946.src = "../pinturas/tetera11.png";
        tazasmesa.src = "../pinturas/tazasLlenas.png";
        botonPava.src = "../pinturas/off.png";
        pavaCociandose = "no";
        tazasLlenas = "si";
        activarAudioPava(); 

        document.getElementById('bur-25').className = 'bur-25-desactivado';
        u = u + 1;
    }
}
function activarAudioPava() {
    if (a694994165616.paused) { 
        b87p.play();
        a694994165616.play(); 
    } else {
        a694994165616.pause();
        b87p.play(); 
        a694994165616.currentTime = 0; 
    }
}

var l9464654 = document.getElementById("l9464654"); 
var vasos = document.getElementById("n122313264");
var b68789 = document.getElementById("b68789");
var a62121 = document.getElementById("a62121");
var licuando = "no";
var vasosLlenos = "no";

function licuadora() {
    if (licuando == "no" && vasosLlenos == "no") {
        licuando = "si";
        vasosLlenos = "no";
        l9464654.classList.add("active");
        activarAudioLicuadora();
    } else if (licuando == "si" && vasosLlenos == "no") {
        licuando = "no";
        vasosLlenos = "si";
        vasos.src = "../pinturas/vasosLLenos.png"; 
        l9464654.classList.remove("active");
        activarAudioLicuadora();

        document.getElementById('bur-24').className = 'bur-24-desactivado';
        u = u + 1; 
        desayunar();
    }
}

function activarAudioRomperHuevos() {
    if (a66229788.paused) { 
        romperHuevos.play(); 
    } else {
        b87s.play(); 
        romperHuevos.currentTime = 0; 
    }
}


function activarAudioLicuadora() {
    if (a62121.paused) {
        b68789.play(); 
        a62121.play(); 
    } else {
        a62121.pause(); 
        b68789.play(); 
        a62121.currentTime = 0; 
    }
}


 