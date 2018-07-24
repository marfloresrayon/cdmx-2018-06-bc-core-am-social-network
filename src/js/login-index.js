// (function() {
// // Initialize Firebase
// const config = {
//     apiKey: "AIzaSyAtSswEBoMSKEmTCLYqtyshjlRbD8Ij5RU",
//     authDomain: "red-social-ux.firebaseapp.com",
//     databaseURL: "https://red-social-ux.firebaseio.com",
//     projectId: "red-social-ux",
//     storageBucket: "red-social-ux.appspot.com",
//     messagingSenderId: "517777747889"
// };
// firebase.initializeApp(config);
// console.log('estas dentro del firebase');    
// // Introducir los metodos del DOM
// const txtEmail = document.getElementById('txtEmail');
// const txtPassword = document.getElementById('txtPassword');
// const btnLogin = document.getElementById('btnLogin');
// const btnSignUp = document.getElementById(`btnSignUp`);
// const btnLogout = document.getElementById('btnLogout');

//     // Se agrega el evento click para el boton LogIn
//     btnLogin.addEventListener( 'click', e => {     
//     //Obteniendo e-mail y password
//     console.log('se escucho el evento click en el boton login')
//     const email = txtEmail.value;
//     const passw = txtPassword.value;
//     const auth = firebase.auth();
//     // Se entra con Sign In
//     const promise = auth.signInWithEmailAndPassword(email, passw);
//     promise.catch(e => console.log(e.message));

// });
//     // Se agrega el evento click para el boton SignUp
//     btnSignUp.addEventListener('click', e =>{
//     //Creando usuarios con el btnSignUp
//     const email = txtEmail.value;
//     const passw = txtPassword.value;
//     const auth = firebase.auth();
//     // Se entra con Sign In
//     const promise = auth.createUserWithEmailAndPassword(email, passw);
//     promise.catch(e => console.log(e.message));
//     btnLogout.addEventListener('click', e =>{
//      firebase.auth().signOut();   
//     });

// // Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
//         firebase.auth().onAuthStateChanged( firebaseUser =>{
//         if(firebaseUser){
//         console.log(firebaseUser); 
//         btnLogout.classList.remove('hide');   
//         }else{
//         console.log('Not logged in'); 
//         btnLogout.classList.add('hide');   
//         }
//         });
//     });




// }());
let config = {
  apiKey: "AIzaSyBIK_C5c7qWNN5vdWV3SF5WjPkfah4o4hHQ",
  authDomain: "foodness-inc.firebaseapp.com",
  databaseURL: "https://foodness-inc.firebaseio.com",
  storageBucket: "foodness-inc.appspot.com",
  messagingSenderId: "705442568830",
};

firebase.initializeApp(config);
console.log("firebase activo");

const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const login = document.getElementById("btnLogin");
const signUp = document.getElementById("btnSign");
const logout = document.getElementById("btnLogout");

login.addEventListener("click", e => {
    console.log("entro login");
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

signUp.addEventListener("click", e =>{
    console.log("entro SingUp");
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

logout.addEventListener("click", e =>{
    firebase.auth().signOut();
});
    

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


//login con google
let provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()

   .signInWithPopup(provider).then(function(result) {
      let token = result.credential.accessToken;
      let user = result.user;

      console.log(token)
      console.log(user)
   }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')
   });
}