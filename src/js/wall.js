// Declarando las variables a utilizar
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('inputText');
const myText = document.getElementById("myTextarea");  // se declara la variable que va a guardar la información almacenada en myTextarea.
let publications = localStorage.getItem('text') ? JSON.parse(localStorage.getItem('text')) : []; //Se crea un arreglo en el que vamos a introducir los textos ingresados en myTextarea y se guardarán en el localStorage, a su vez se convierte con el JSON.parse el string almacenado en el LS en un objeto con el que se pueda trabajar en JS
localStorage.setItem('text', JSON.stringify(publications)); // Se guardan las publicaciones en el LS como parejas "key" y "value", el mètodo JSON.stringfy convieerte en "string" en un objeto JSON. 
    const userData = JSON.parse(localStorage.getItem('text'));  // Convierte un 'string = text' en un objeto usable por JS
    // Se crea una lista para almacenar las publicaciones hechas por el susuario//
        const publicationsList = (lista) => {
        const list = document.createElement('list');
        list.textContent = lista;
        ul.appendChild(list);
    }
        form.addEventListener('submit', function(error){
        error.preventDefault();
    //Se ingresan los nuevos textos al arreglo publications y  con el setItem se guardan en el LS 
        publications.push(myText.value); // Se agregan los nuevos elementos del arreglo publications
        localStorage.setItem('text', JSON.stringify(publications
        ));
        publicationsList(myText.value);
        myText.value = "" ;
});
        userData.forEach(myTextarea => {
        publicationsList(myTextarea);
        });
    //     
        inputText.addEventListener('click', function(){
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);           
        }
});


