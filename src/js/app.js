// // inicializamos todos los elementos del DOm

// const txtEmail = document.getElementById("txt-email");
// const txtPaww = document.getElementById("txt-email");
// const btnSign = document.getElementById("txt-email");
// const btnLogin = document.getElementById("txt-email");


// const loginEmailPassword = () =>{
// 	const email = txtEmail.value;
// 	const password = txtPaww.value;
// 	console.log(email);
// 	const auth = firebase.auth();
// 	const promise = auth.signInWithEmailAndPassword(email, password)
// 	promise 
// 	.then((user)=>{console.log(user)})

// 	.catch((error) => {
// 		const errorCode = arror.code;
// 		const error Message = error.Message;

// 	});

// }


// const createUser = () =>{
// 	const name = `${textFirstName.value} ${txtLastName.value}`;
// 	const email = txtEmail.value;
// 	const password = txtPaww.value;
// 	const auth = firebase.auth();
// 	const promise = auth.createUserWithEmailAndPassword(email, password)
// 	promise
// 	.then((user) =>  {
// 	const newUser = auth.currentUser;
// 	newUser.updateProfile({
// 		displayName: name,

// 	})
// 	console.log(user)})

// 	.catch((error) => {
// 		const errorCode = arror.code;
// 		const error Message = error.Message;

// }


// const authGoogle = () =>{
// var provider = new firebase.auth.GoogleAuthProvider();
// authentication(provider);
// }

// const authFacebook = () =>{
// 	var provider = new firebase.auth.FacebookAuthProvider();
// 	authentication(provider);
// }

// conts authentication = (provider) =>{
// const auth= firebase.auth();
// const promise = auth.signInWithPopUp(provider);
// promise
// .then((result) =>  {
// 	const token = result.credential.accessToken;
// 	const user =  result.user;
// 	console.log(user);

// 	.catch((error) => {
// 		const errorCode = arror.code;
// 		const error Message = error.Message;
// 		const error =  error.email;
// 		const credential = error .credential;
// }

// const redirection = ()=>{
// 	location.href = "views/muro.html"
// }
// // crear los venetos 
// btnLogin.addEventListener("click, loginEmailPassword");
// btnSign.addEventListener("click, loginEmailPassword");