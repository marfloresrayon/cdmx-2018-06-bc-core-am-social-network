//NavBar de Materialize
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
});

$(document).ready(function () {
  $('.sidenav').sidenav();
});
//Termina NavBar de Materialize 



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