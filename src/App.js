import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    
  const[pokeName,setPokeName]=useState(null);
  const [pokeImg,setImg]=useState("images/pokeball.png");
  const [text,setText]=useState(null);  
  const [link,setLink]=useState(null);
  const [name,setName]=useState(null);
  function pikachu(event){
    const name=event.target.value;
    setPokeName(name);
  }

  async function bringPokemon(){
    console.log(pokeName);
    let url="https://pokeapi.co/api/v2/pokemon/"+pokeName;
    const response = await fetch(url);
    let data = await response.json();
    const image=data.sprites.other.dream_world.front_default
    const name=data.name;
    const weight=data.weight;
    setImg(image);
    setName(name);
    setText("Weight: "+weight);
    setLink("Search for "+name);
  }

  return (
    <div className="App" style={{height: '100vh'}}>
      <div className='main' style={{width:500}}>
        <div className='search'>
          <input placeholder='Enter an Pokemon Name...' onChange={pikachu}></input>
          <br></br>
          <button type='submit' onClick={bringPokemon}>Search</button>
        </div>
        <div className='card' >
          <img className="card-img-top" src={pokeImg} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <a href={"https://www.google.com/search?q="+pokeName} className="btn btn-primary">{link}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
