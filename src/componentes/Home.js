import React from 'react'
import { auth } from '../firebase';
const Home = () => {
    return(
        <div>
            Home
            <p><button onClick={()=>auth.signOut()}>Cerrar Sesion</button></p>
        </div>
    )
}

export default Home;