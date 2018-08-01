//NavBar de Materialize
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});
//Termina NavBar de Materialize 

//Manejo de DOM para cerrar sesión
let logOut = document.getElementById('logout')

//Cerrar sesión
logOut.addEventListener('click', function () {
  firebase.auth().signOut().then(function () {
    console.log("Sesión cerrada")
  }).catch(function (error) {
    console.log(error)
  });
})

//Observador de estado de autenticación
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //user = document.getElementById(user);
    datos.innerHTML +=`<section id="datos2">${user}</section>
    `
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
  } else {
    // User is signed out.
    console.log('La usuaria no ha iniciado sesión')
  }
});


// <article class="post">
//             <p>${doc.data().mensaje}</p>
//             <a class="post-eliminar" onclick="eliminar('${doc.id}')"><i class="material-icons">delete</i></a>
//             <a class="post-editar" onclick="editar('${doc.id}','${doc.data().mensaje}')"><i class="material-icons">create</i></a>
            
//         </article>