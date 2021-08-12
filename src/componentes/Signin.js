import { render } from '@testing-library/react';
import React, { useRef } from 'react'
import { db,auth } from '../firebase';
import './Signin.css'

const Signin = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);

    const signUp = async (e) => {
        var TxtNombre = document.getElementById('TxtNombre').value;
        var TxtApellido = document.getElementById('TxtApellido').value;
        var TxtCorreo = document.getElementById('TxtCorreo').value;
        const usuario = {
            nombre: TxtNombre,
            apellido: TxtApellido,
            correo: TxtCorreo
        }
        e.preventDefault();
        try{
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(credenciales =>{
            db.collection("usuarios").doc(credenciales.user.uid).set(Object.assign({}, usuario));
        }).then(()=>{
            console.log("Usuario registrado en firestore satisfactoriamente.");
        });
        }
        catch(error){
            console.log(error);
        }
    }
    const signIn = e => {
        var Usuario;
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(credenciales =>{
            db.collection('usuarios').doc(credenciales.user.uid).get().then(resultado =>{
                console.log(resultado.data().nombte + ' ' + resultado.data().apellido);
            })
        }).catch(err =>{
            console.log(err);
        })
        return(Usuario);

    }
    return(
        <div className="signin">
            <form action="">
                <h1>Log in</h1>
                <input id="TxtNombre" type="name" placeholder="Nombre"/>
                <input id="TxtApellido" type="lastname" placeholder="Apellido"/>
                <input id="TxtCorreo" ref={emailref} type="email" placeholder="Correo electrónico"/>
                <input ref={passwordref} type="password" placeholder="Contraseña"/>
                <button onClick = {signIn}>Log in</button>
                <h6>¿No tienes cuenta? <span onClick={signUp} className="signin__link">Registrate!</span></h6>
            </form>
        </div>
    )
}

export default Signin;