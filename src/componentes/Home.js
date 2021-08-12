import React, { useRef } from 'react'
import { db,auth } from '../firebase';
const Home = () => {


    const Enviar= async (e) => {
        var txtContenido = document.getElementById('txtContenido').value;

        db.collection('usuarios').doc(auth.currentUser.uid).get().then(resultado =>{
            const post = {
                Nombre: resultado.data().nombre + ' ' + resultado.data().apellido,
                Contenido: txtContenido
            }
            db.collection("posts").add(Object.assign({}, post))
        })
        e.preventDefault();
    }
    return(
        <div>
            <span className = "UsuarioLogueado" >Actualmente logueado como </span>
            <p><button onClick={()=>auth.signOut()}>Cerrar Sesion</button></p>
            <input id="txtContenido"  type="name" placeholder="Contenido de tu post"/>
            <button onClick = {Enviar}>Enviar post</button>
            <p>Logueaste como ...</p>
        </div>
    )
}

export default Home;