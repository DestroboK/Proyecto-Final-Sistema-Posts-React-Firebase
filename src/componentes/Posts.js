import React, { useEffect, useState } from "react";
import { db } from '../firebase';
import '../App.css'

//Este componente muestra todos los posts pero siempre esta mostrandose, acorde a la asignacion.
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const getContacto=()=>{
        db.collection('posts')
        .get()
        .then(( snapshot ) => {
            const Posts= [];
            snapshot.forEach( doc => {
                Posts.push(doc.data());
            })
            console.log(snapshot)
            setPosts(Posts);
        })
    }
    useEffect(()=>{
        getContacto()
      },[])

    return (

        <div className="Lista">
        <h1>Posts</h1>
        {
            posts && posts.length>0 && posts.map((item)=><p className="post"><span className="Username">{item.Nombre}</span> dice: {item.Contenido}</p>)
        }
        </div>
    )
};
export default Posts;