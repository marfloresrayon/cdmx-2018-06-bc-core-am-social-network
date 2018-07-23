let config = {
  apiKey: "AIzaSyBIK_C5c7qWNN5vdWV3SF5WjPkfah4o4hHQ",
  authDomain: "foodness-inc.firebaseapp.com",
  databaseURL: "https://foodness-inc.firebaseio.com",
  storageBucket: "foodness-inc.appspot.com",
  messagingSenderId: "705442568830",
};
// inicializa Firebase 
firebase.initializeApp(config);
console.log("firebase activo");
// metodos para mostrar en DOM
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const login = document.getElementById("btnLogin");
const signUp = document.getElementById("btnSign");
const logout = document.getElementById("btnLogout");

// evento para el boton de login 
login.addEventListener("click", e => {
    console.log("entro login");
//Obteniendo e-mail y password
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
// Se entra con Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

// Se agrega y se verifica el funcionamiento del evento click para el boton SignUp
signUp.addEventListener("click", e =>{
    console.log("entro SingUp");
//Creando usuarios con el btnSignUp
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
// Se entra con Sign In
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

logout.addEventListener("click", e =>{
    firebase.auth().signOut();
});
    
// Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
    firebase.auth.onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            logout.classList.remove("hide");
        }else{
            console.log("not logged");
            logout.classList.add("hide");
        }
    });
});



//Creando Login con Google
var provider = new firebase.auth.GoogleAuthProvider();

$('#login-google').click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      saveData(result.user);
      $('#auth-login').hide();
      $('#auth-login2').hide();
      $('#photo').append("<img src='" + result.user.photoURL + "'/>");
      $('#data').append("<div> "+ result.user.displayName + " </div>");
      $('#data2').append("<div> "+ result.user.email + " </div>");
    });

});

//Guardando los datos de forma automática
function saveData(user){
    const usuaria = {
        uid: user.uid,
        nombre: user.displayName,
        correo: user.email,
        foto: user.photoURL
    }
    firebase.database().ref("usuarias/" + user.uid)
    .set(usuaria)
}