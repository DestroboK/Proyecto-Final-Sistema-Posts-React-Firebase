import React, { useRef } from 'react'
import { db,auth } from '../firebase';
import '../App.css'

//Este componente controla la funcion de registrarse y loguearse.

const Signin = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);

    const signUp = async (e) => {
        var TxtNombre = document.getElementById('TxtNombre').value;
        var TxtApellido = document.getElementById('TxtApellido').value;
        var TxtCorreo = document.getElementById('TxtCorreo').value;
        var TxtPassword = document.getElementById('TxtContra').value;
        const usuario = {
            nombre: TxtNombre,
            apellido: TxtApellido,
            correo: TxtCorreo
        }
        e.preventDefault();
        try{
        auth.createUserWithEmailAndPassword(
            TxtCorreo,
            TxtPassword
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
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).catch(err =>{
            console.log(err);
        })

    }



        return(
            <div className="GestorDeEntrada">
            <div className="signup">
                <form action="">
                    <h1>Registrate!</h1>
                    <input id="TxtNombre" type="name" placeholder="Nombre"/>
                    <input id="TxtApellido" type="lastname" placeholder="Apellido"/>
                    <input id="TxtCorreo" type="email" placeholder="Correo electrónico"/>
                    <input id="TxtContra" type="password" placeholder="Contraseña (minimo 6 caracteres)"/>
                    <button onClick = {signUp}>Enviar datos</button>
                </form>
            </div>
            <div className="separador"></div>
            <div className="signin">
            <form action="">
                <h1>o Accede!</h1>
                <input ref={emailref} type="email" placeholder="Correo electrónico"/>
                <input ref={passwordref} type="password" placeholder="Contraseña"/>
                <button onClick = {signIn}>Acceder</button>
            </form>
            </div>
            <h5>Es necesario acceder para poder postear. Los posts tendran tu nombre y apellido.</h5>
            </div>
        
        )
}

export default Signin;