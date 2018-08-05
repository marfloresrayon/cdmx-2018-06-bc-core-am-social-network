firebase.initializeApp({
  apiKey: "AIzaSyB90dz8cu4Yk3lfkAcryi4B8PWM8lIlP8A",
  authDomain: "ux-community.firebaseapp.com",
  projectId: "ux-community",
});

let db = firebase.firestore();

let publicar = document.getElementById("boton");

// const form = document.getElementById("form");
// form.addEventListener('submit', publicar);


publicar.addEventListener("click", () => {
  event.preventDefault();
  let mensajes = document.getElementById("mensaje").value; // ingresa texto usuario y se guarda en variable mensajes
  //console.log("hola Amalia");
  if (mensajes !== "") {
    db.collection("usuaria").add({
        mensaje: mensajes,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("comentario").value = "";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })

  } else {
    alert("ingresa tu mensaje");
  }
  //console.log(mensaje);
})

let publicacion = document.getElementById("publicacion");
db.collection("usuaria").onSnapshot((querySnapshot) => {
  publicacion.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().mensaje}`);
    //para usuario va <th scope="row">${doc.id}</th>
    //probar iinsertAdjacentHTML(beforebegin, texto) para que ordene pùblicaciones
    publicacion.innerHTML += `
      <article class="post">
          <p class="borde center-align">${doc.data().mensaje}</p>
          <a class="btn-p post-eliminar" onclick="eliminar('${doc.id}')"><i class="material-icons">delete</i></a>
          <a class="btn-p post-editar" onclick="editar('${doc.id}','${doc.data().mensaje}')"><i class="material-icons">edit </i></a>
      </article>
      `
  });
});

//Borrar datos
function eliminar(id) {
  db.collection("usuaria").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });

}

//Editar documentos
function editar(id, mensaje) {
  document.getElementById("mensaje").value = mensaje;
  let boton = document.getElementById('boton');
  boton.innerHTML = "Editar";
  boton.onclick = function () {
    const washingtonRef = db.collection("usuaria").doc(id);
    let mensaje = document.getElementById("mensaje").value;

    return washingtonRef.update({
        mensaje: mensaje,
      })
      .then(function () {
        console.log("Document successfully updated!");
        boton.innerHTML = "Guardar";
        document.getElementById("mensaje").value = "";
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });

  }

}





let LikesButton = document.getElementById("Like"),
  counter = 0;
LikesButton.onclick = function () {
  counter += 1;
  LikesButton.innerHTML = '<i class="material-icons">favorite</i> ' + counter;
};


// let likes = o;
// const like =(id)=>{
//     let collection("usuaria").child(id);
//     let mensaje = document.getElementById(id).value;
//     return docRef.update({
//         mensaje: mensajes,
//         id: id;
//         like: likes
//     })
// }




//  let LikesButton = document.getElementById('Like'),
//  counter = 0;
//  function likes() {
//  counter += 1;
//  LikesButton.innerHTML = 'Likes: ' + counter;
// };

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
