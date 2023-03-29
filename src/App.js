import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Bangla from './Component/Banagram/Bangla';

function App() {
  return (
    <div className="App">      
        <Bangla></Bangla>
    </div>
  );
}

// function LoadCountries () {
//   const [countries , setcountries] = useState([])

//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//     .then (res => res.json())
//     .then (data => setcountries(data))
//   },[])

//   return (
//     <div>
//       <h1>this is not working .</h1>
//       <h3>Available Conotries : {countries.length}</h3>
//       {
//         countries.map (country => <Country name= {country.name.common} population = {country.population} area={country.area} flags= {country.flags.png
//         }></Country>)
//       }
//     </div>
//   )
// }


// function Country (props){
//   return(
//     <div className='country'>
//       <img src={props.flags} alt="" />
//       <h1>Name : {props.name}</h1>
//       <h3>Population : {props.population}</h3>
//       <h5>Area : {props.area}</h5>
//     </div>
//   )
// }

export default App;