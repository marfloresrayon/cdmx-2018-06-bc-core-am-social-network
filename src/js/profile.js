document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});
///////////////////

//Declarando las variables a utilizar
//Comentario sin sentido 
// Añadir variable para referenciar todos los metodos de la base de datos
const db = firebase.database();
const commentText = document.getElementById('myTextarea');
const commentSend = document.getElementById('botonCompartir');
const printComments = document.getElementById('comments');
// const addLikes = document.getElementById('likes');
// const likeCounter = document.getElementById('likeCounter');

// Impresion de mensajes
/* El metodo ready permite que al cargar la pagina, automaticamente
se manden pedir los datos a firebase*/
$(document).ready(() => {
  // Metodo child_added ayuda a que cada vez que un hijo(mensaje)
  // se añada, firebase añae asíncronamente el mensaje a un espacio
  // sin recargar la pagina
  let result = db.ref('userMessages').on('child_added', (data) =>{// data trae todo los objetos de la rama
    $('#comments').append('<div class="cuadro">' + data.val().message + '</div>');
  });
});

//id en html comments

// Añadir un observador al boton con vanilla js
commentSend.addEventListener('click', (event) =>{
  let userMessage = commentText.value;
  db.ref('userMessages').push({
    message: userMessage
  });
  console.log(userMessage);
});

// contador de likes
// let countLikes = 0;
// const addLike = () => {
//   countLikes = countLikes + 1;
//   document.getElementById('likeCounter').textContent = countLikes;
// }