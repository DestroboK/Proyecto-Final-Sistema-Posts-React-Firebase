import React, { useRef } from 'react'
import { auth } from '../firebase';
import './Signin.css'
const Signin = () => {
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then(user =>{
            console.log(user)
        }).catch(err =>{
            console.log(err);
        })
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
                <input type="name" placeholder="Nombre"/>
                <input type="lastname" placeholder="Apellido"/>
                <input ref={emailref} type="email" placeholder="Correo electrónico"/>
                <input ref={passwordref} type="password" placeholder="Contraseña"/>
                <button onClick = {signIn}>Log in</button>
                <h6>¿No tienes cuenta? <span onClick={signUp} className="signin__link">Registrate!</span></h6>
            </form>
        </div>
    )
}

export default Signin;