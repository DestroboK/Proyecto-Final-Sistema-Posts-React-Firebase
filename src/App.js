import { cleanup } from '@testing-library/react';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './componentes/Home';
import Signin from './componentes/Signin';
import Posts from './componentes/Posts';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if(userAuth){
        console.log(userAuth)
        setUser(user)
      }else{
          setUser(null)
      }
    })
    return unsubscribe
    
  }, [])
  return (
    <div className="App">
      {user?<Home/>:<Signin/>}
      <Posts/>
    </div>
  );
}

export default App;
