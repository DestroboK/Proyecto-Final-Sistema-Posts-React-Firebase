import React, { useRef } from 'react'
import { db,auth, crearUsuario } from '../firebase';
import './Signin.css'
const Signin = () => {
    const nombreref = useRef(null);
    const apellidoref = useRef(null);
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const signUp = async (e) => {
        e.preventDefault();
        try{
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(credenciales =>{
                db.collection("usuarios").doc(credenciales.user.uid).set({
                nombre: nombreref,
                apellido: apellidoref,
                correo: emailref
            });
        }).then(()=>{
            console.log("fire store va bien");
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
        ).then(user =>{
            console.log(user)
        }).catch(err =>{
            console.log(err);
        })
    }
    return(
        <div className="signin">
            <form action="">
                <h1>Log in</h1>
                <input ref={nombreref} type="name" placeholder="Nombre"/>
                <input ref={apellidoref}  type="lastname" placeholder="Apellido"/>
                <input ref={emailref} type="email" placeholder="Correo electrónico"/>
                <input ref={passwordref} type="password" placeholder="Contraseña"/>
                <button onClick = {signIn}>Log in</button>
                <h6>¿No tienes cuenta? <span onClick={signUp} className="signin__link">Registrate!</span></h6>
            </form>
        </div>
    )
}

export default Signin;