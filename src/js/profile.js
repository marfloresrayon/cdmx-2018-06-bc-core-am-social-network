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
