//Creando Login con Google
console.log("google activo");
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
  // .then(function (profile) {
  //   signIn(result.user);

  // });
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

//Checando login con teléfono
firebase.auth().onAuthStateChanged(function(usuaria) {
  if (usuaria) {
      console.log("Exitoso")
  } else {
      console.log("Fallido")
  }
});
//Parte que se moverá a DOM
var btnNumber = document.getElementById("btNum");
var btnCode = document.getElementById("code-validate");


//Login con número
btnNumber.addEventListener('click', function () {
  var phoneNumber = document.getElementById("num-cel").value;
  console.log(phoneNumber)
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  var appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      console.log(confirmationResult)
      window.confirmationResult = confirmationResult
    }).catch(function (error) {
      console.log(error)
    });
})

btnCode.addEventListener('click', function(){
  var validationCode = document.getElementById('code').value
  console.log(validationCode)
  window.confirmationResult.confirm(code)
  .then(function (result) {
    // User signed in successfully.
    var user = result.user;
    console.log(user)
    firebase.database().ref("phone/usuarias/" + user.uid).update({
      uid:user.uid,
      phoneNumber:user.phoneNumber
    })

  }).catch(function (error) {
    console.log(error)
  });
})

