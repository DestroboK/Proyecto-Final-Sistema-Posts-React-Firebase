import { useEffect, useState } from 'react';
import './App.css';
import Sender from './componentes/Sender';
import Signin from './componentes/Signin';
import Posts from './componentes/Posts';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const cerrarSesion = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if(userAuth){
        setUser(user)
      }else{
          setUser(null)
      }
    })
    return cerrarSesion
    
  }, [])


  return (
    <div className="App">
      {user?<Sender/>:<Signin/>}
      <Posts/>

      <h5>Kelvin Ariel Hernandez Gonzalez, Agosto 2021</h5>
    </div>
  );
}

export default App;
