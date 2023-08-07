import './App.css';
import { useState } from 'react';

function App() {
  //state (état, données)
const [compteur, setCompteur]=useState(1);

  //Comportements
const  handleClick = ()=>{
  //compteur = compteur +1 
  setCompteur(compteur + 1);
};

   //affichage (render)
  return (
  <div>
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  </div>
  );
}

export default App;
