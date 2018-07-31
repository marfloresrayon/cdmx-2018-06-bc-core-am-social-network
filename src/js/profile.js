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

// //Observador de estado de autenticación
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     user = document.getElementById(user);
//     // User is signed in.
//     const displayName = user.displayName;
//     const email = user.email;
//     const emailVerified = user.emailVerified;
//     const photoURL = user.photoURL;
//     const isAnonymous = user.isAnonymous;
//     const uid = user.uid;
//     const providerData = user.providerData;
//   } else {
//     // User is signed out.
//     console.log('La usuaria no ha iniciado sesión')
//   }
// });