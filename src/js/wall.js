// Declarando las variables a utilizar
// Comentario sin sentido 
let db = firebase.firestore();
const publicar = () => {
    firebase.auth().onAuthStateChanged(user =>{
        if(user) {
            document. getElementById(botonCompartir).addEventListener("click", 
            event => {
            event.preventDefault();
        const contenidoPublicaiones = document.getElementById('myTextarea').value;
        let datePublications = `${new Date()}`;
        db.collection('publicaciones').add({
            contenido: contenidoPublicaiones,
            user: user.displayName,
            fecha: datePublications
    }).then(result =>{
        console.log('publicacion');
    }).catch(error => {
        console.log('Error');
    });
    writePublications();
    });
    } else{
        location.href = ('profile.html')
    }
})
}
    const writePublications = () => {
    const publicaciones = db.collection('publicaciones').get()
    .then(response => {
        let result = '';
        result += `<div>${Element.data().contenido}</div>
        <div> Publicado por: ${element.data().user}</div>`
    })
    document.getElementById('lista').innerHTML = result ;
}
