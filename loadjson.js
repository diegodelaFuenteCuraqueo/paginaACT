let datos = {};
let link, parrafo;
let contenido;
let jumbo;

let YPOS;
window.addEventListener("scroll", () => {
    XPOS=window.pageYOffset;
    moverFondo();
});
const moverFondo = () => {
    document.getElementById("fondo").style.backgroundPositionY= ( (XPOS*-.3)+1600 )+"px";
}

let anim;
const cargarJson = () => {

    fetch('./datos.json')
    .then(response  =>  response.json())
    .then(data      =>  datos = { ...data})
    .then(cargarDatosEnPantalla)
    .catch(error    =>  console.log(error));

    contenido = document.getElementById("contenido");

    jumbo = document.getElementById("Principal");
    jumbo.style.position = "relative";
    jumbo.style.zIndex = -1;
    jumbo.style.opacity = 0;
    anim = setInterval(jumboFadeIn,10); 

    console.log("hola")
}
window.onload = cargarJson;

//FAde in jumbotron inicio
let jumboAlfa = 0;
const jumboFadeIn = () => {
    if(jumboAlfa >= .94){
        console.log("jumbo listo");
        document.getElementById("imgCartas").style.opacity= 1;
        clearInterval(anim);
    }else {
        document.getElementById("imgCartas").style.opacity= jumboAlfa;
        jumbo.style.opacity = jumboAlfa;
        jumboAlfa+=.006;
    }
}

const cargarDatosEnPantalla = () => {

    link = document.getElementById("link");
    parrafo = document.getElementById("texto");

    //parrafo.innerText= datos.texto;
    link.innerText= datos.link;
    link.href= datos.link;

}

//FUNCIONES DE LOS BOTONES DEL HEADER - - - - - - - - - - - - - - - - - - - - 
const inicio = () => {
    console.log("INICIO");
    contenido.innerHTML = "";

    let parrafo = document.createElement("p");
    parrafo.className="parrafo";

    parrafo.innerHTML = datos.inicio.texto;
    contenido.appendChild(parrafo);
}

const acercaDe = () => {
    console.log("acerca De");
    contenido.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.className="parrafo";

    parrafo.innerHTML = datos.acercaDe.texto;
    contenido.appendChild(parrafo); 
}

const actividades = () => {
    console.log("actividades");
    contenido.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.className="parrafo";

    parrafo.innerHTML = datos.inicio.texto;
    contenido.appendChild(parrafo);
}

const testimonios = () => {
    console.log("testimonios");
    contenido.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.className="parrafo";

    parrafo.innerHTML = datos.testimonios.texto;
    contenido.appendChild(parrafo);
}

const contacto = () => {
    console.log("contacto");
    contenido.innerHTML = "";
    let parrafo = document.createElement("p");
    parrafo.className="parrafo";
    parrafo.innerHTML = datos.contacto.texto;
    contenido.appendChild(parrafo);
}