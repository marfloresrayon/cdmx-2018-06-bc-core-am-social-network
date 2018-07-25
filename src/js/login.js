//Creando Login con Google
var provider = new firebase.auth.GoogleAuthProvider();

$('#login-google').click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      saveData(result.user);
      // signIn(result.user);
      $('#auth-login').hide();
      $('#auth-login2').hide();
      $('#photo').append("<img src='" + result.user.photoURL + "'/>");
      $('#data').append("<div> " + result.user.displayName + " </div>");
      $('#data2').append("<div> " + result.user.email + " </div>");
    })
    .then(function (profile) {
      signIn(result.user);

    });
});


//Guardando los datos de forma automática
let saveData = (user) => {
  const usuaria = {
    uid: user.uid,
    nombre: user.displayName,
    correo: user.email,
    foto: user.photoURL
  }
  firebase.database().ref("usuarias/" + user.uid)
    .set(usuaria)
}

//Pasando de Login a Profile
// document.getElementById("login-google").addEventListener("click", signIn = () => {
//     window.location.assign("https://marfloresrayon.github.io/cdmx-2018-06-bc-core-am-social-network/src/views/profile.html")
// });
