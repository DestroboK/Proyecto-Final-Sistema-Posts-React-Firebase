import { render } from "@testing-library/react";
import React, {useState, useEffect, setState} from "react";
import { db } from '../firebase';
const Lista = document.getElementById("PostsListados");
function renderizarPosts(doc){
    let li = document.createElement('li');
    let nombre = document.createElement('span');
    let contenido = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    nombre.textContent = doc.data().Nombre;
    contenido.textContent = doc.data().Contenido;

    li.appendChild(nombre);
    li.appendChild(contenido);

    Lista.appendChild(li);
}

const Posts = () => {
    db.collection('posts')
        .get()
        .then(( snapshot ) => {
            snapshot.forEach( doc => {
            })
            console.log(snapshot)
        })
    return (
        <div className="posts">
            <h1>Posts</h1>
            <ul id="PostsListados">Lista de posts</ul>
        </div>
    );

};
export default Posts;