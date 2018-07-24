
<<<<<<< HEAD
console.log("firebase activo");
//Introducir los metodos del DOM
const txtEmail = document.getElementById("email");
const txtPassword = document.getElementById("password");
const login = document.getElementById("btnLogin");
const signUp = document.getElementById("btnSign");
const logout = document.getElementById("btnLogout");

// Se agrega el evento click para el boton LogIn
login.addEventListener("click", e => {
    console.log("entro login");
//Obteniendo e-mail y password
    const email= txtEmail.value;
    const password = txtPassword.value;
=======
    // Se agrega el evento click para el boton LogIn
    btnLogin.addEventListener( 'click', m => {     
    //Obteniendo e-mail y password
    console.log('se escucho el evento click en el boton login')
    const email = txtEmail.value;
    const passw = txtPassword.value;
    const auth = firebase.auth();
    // Se entra con Sign In
    const promise = auth.signInWithEmailAndPassword(email, passw);
    promise.catch(m => console.log(m.message));

});
    // Se agrega el evento click para el boton SignUp
    btnSignUp.addEventListener('click', e =>{
    console.log('Se escucho el evento de Sign Up')
        //Registrando usuarios con el btnSignUp
    const email = txtEmail.value;
    const passw = txtPassword.value;
>>>>>>> upstream/master
    const auth = firebase.auth();
// Se entra con Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
});

<<<<<<< HEAD
// Se agrega el evento click para el boton SignUp
signUp.addEventListener("click", e =>{
    console.log("entro SingUp");
//Creando usuarios con el btnSignUp
    const email= txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    // logout.addEventListener("click", h =>{
    //   firebase.auth().signOut();
    // });
    

    // firebase.auth.onAuthStateChanged(firebaseUser =>{
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //         logout.classList.remove("hide");
    //     }else{
    //         console.log("not logged");
    //         logout.classList.add("hide");
    //     }
    // });
});

=======
// Se identifica al usuario y se deja entrar a la firebase console (listener de autentificacion en tiempo real)
        firebase.auth().onAuthStateChanged( firebaseUser =>{
        if(firebaseUser){
        console.log(firebaseUser); 
        btnLogout.classList.remove('hide');   
        }else{
        console.log('Not logged in'); 
        btnLogout.classList.add('hide');   
        }

        });
    });
}());
>>>>>>> upstream/master
