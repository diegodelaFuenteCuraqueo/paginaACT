let datos = {};
let link, parrafo;


const cargarJson = () => {

    fetch('./datos.json')
    .then(response  =>  response.json())
    .then(data      =>  datos = { ...data})
    .then(cargarDatosEnPantalla)
    .catch(error    =>  console.log(error));

}

const cargarDatosEnPantalla = () => {

    link = document.getElementById("link");
    parrafo = document.getElementById("texto");

    parrafo.innerText= datos.texto;
    link.innerText= datos.link;
    link.href= datos.link;

}

const cambiar = () => {
    parrafo.innerText = datos.otroTexto;    
}


window.onload = cargarJson;