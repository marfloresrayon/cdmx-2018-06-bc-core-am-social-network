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
firebase.auth().onAuthStateChanged(function (usuaria) {
  if (usuaria) {
    console.log("Exitoso")
  } else {
    console.log("Fallido")
  }
});

//Parte que se moverá a DOM
var btnNumber = document.getElementById("btNum");
var btnCode = document.getElementById("btCode");


//Login con número
btnNumber.addEventListener('click', function () {
  var phoneNumber = document.getElementById("num-cel").value;
  console.log(phoneNumber)
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  var appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      console.log(confirmationResult)

      //Confirmando código
      window.confirmationResult = confirmationResult

    }).catch(function (error) {
      console.log(error)
    });
})

//Validar usuaria
btnCode.addEventListener('click', function () {
  var validCode = document.getElementById('sentCode').value
  console.log(validCode)
  window.confirmationResult.confirm(validCode)
    .then(function (result) {
      // Login funcional 
      var user = result.user;
      console.log(user);
      savePhone(result.user);

    }).catch(function (error) {
      console.log(error)
    });
})

let savePhone = (user) => {
  const phone = {
    uid: user.uid,
    phoneNumber: user.phoneNumber
  }
  firebase.database().ref("phone/usuarias/" + user.uid)
    .set(phone)
}
