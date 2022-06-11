import logo from './logo.svg';
import './App.css';

import Componente from "./Componente2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//Aula 4 - Modulo 2
//import mock from "./mock.json"
//import ListaDeUsuarios from './ListaDeUsuarios';



//Aula 3 - Modulo 2
//import { useState, useEffect } from 'react';

//Aula 2 - Modulo 2
//import Componente from './componente.js';
//import Formulario from './Formulario';
//import Lista from './Lista';
//import ListaPar from './ListaPar'; 

//function App() {
//  return (
//    <div>
//      <div className='meu-css'>
//        <Componente nome="Roberth"></Componente>
//     </div>
//        <div>
//        {2 == 2 &&  <Formulario></Formulario>}
//        </div>
//         <div>
//            <Lista></Lista>
//          </div>
//          <div>
//            <ListaPar></ListaPar>
//          </div>
//    </div>
//
//    );
//  }

//Aula 3 - Modulo 2

//function App() {
//  let valor = 0;
//  const [valorReativo, setValorReativo] = useState(0);
//
// return(
//    <div>
//     <h1>Estático {valor}</h1>
//     <h1>Reativo {valorReativo}</h1>
//    <button
//       onClick={()=> {
//       valor++;
//        setValorReativo(valorReativo+ 1);
//         }}
//         >
//           Incrementar
//     </button>
//
//    </div>
//
//);
//}

//Aula 3 - Modulo 2

//function App() {
//  const [string,setString] = useState("");
//  return(
//    <div>
//      <h1>Minha string: {string}</h1>
//      <button onClick={()=> setString(string+ "a")}>botao</button>
//    </div>
//  );
//}

//Aula 3 - Modulo 2

//function App() {
// const [contador, setContador] = useState(0);
// const [mudou, setMudou] = useState(false);
//
//useEffect(() => {
//  if (contador != 0)
//  window.alert("MUDOUUUUUUUUUUUUUUUU");
//},[contador]);
//
// return(
//    <div>
//      <h1>Contador {contador}</h1>
//     <h2>{mudou}</h2>
//      <button onClick={() => setContador(contador + 1)}>botao</button>
//    </div>
//  );
//}

//Aula 3 - Modulo 2

//function App() {
//  const [valor, setValor] = useState("")
// 
//
// useEffect(()=> console.log(valor),[valor]
//  )
//   return(
//     <div>
//      <input type="text" value={valor} onChange={(evento)=>setValor(evento.target.value)}></input>
//     </div>
//   );
// }

//Aula 3 - Modulo 2-  - Parte final
 
//const assinantes = [];

//function App() {
//  const [nome, setNome] = useState("");
//  const [cpf, setCPF] = useState("");

 

// // const [assinantes, setAssinantes] = useState([]);
// //
// // useEffect(()=> {
// // console.log(assinantes);
// //}, [assinantes]);

//  const salvar = ()=> {
//    let pessoa = {
//     nome: nome,
//     cpf: cpf,
//    };
      
//        assinantes.push(pessoa);
//       console.log(assinantes)
//      };
  

//  return(
//    <div>
//      <label htmlFor="nome">Nome</label>
//      <br/>
//     <input
//        id="nome"
//        type="text"
//        value={nome}
//        onChange={(evento)=> setNome(evento.target.value)}
//      ></input>
//      <br/>
//      <label htmlFor="cpf">CPF</label>
//      <br/>
//      <input
//        id="cpf"
//      type="text"
//      value={cpf}
//      onChange={(evento)=> setCPF(evento.target.value)}
//      ></input>
//      <br/>
//      <button onClick={salvar}>Salvar</button>
//      <button onClick={()=> buscar(cpf)}>Buscar CPF</button>
//    </div>
//
//  );
//}

// //function salvar(nomeParametro, cpfParametro, setAssinantes){
// // let pessoa = {
// //   nome: nomeParametro,
// //   cpf: cpfParametro
// //}
// //
// // setAssinantes(pessoa);
// // //console.log(assinantes)
//}


//  function buscar(cpf){
//    for(let i = 0; i< assinantes.length; i++){
//     if(cpf == assinantes[i].cpf){
//        window.alert(`${assinantes[i].nome} ${assinantes[i].cpf}`)
//      }
//    }
//  }

//Aula 4 - Modulo 2


//function App() {
//  
// return(
//   <div>
//    <ListaDeUsuarios></ListaDeUsuarios>
//
//  </div>
//  );
//}



 function App() {
  
  return(
  <BrowserRouter>
  <nav className="navbar is-dark" >
    <div className="navbar-menu">
      <div className="navbar-start">
    <Link className="navbar-item" to="/">Home</Link>
    <br/>
    <Link className="navbar-item" to="/roberth">Roberth</Link>
    <br/>
    <Link className="navbar-item" to="/componente">Componente</Link>
    </div>
    </div>
  </nav>
    <Routes>
      <Route path="*" element={<h1>Pagina Home</h1>}></Route>
      <Route path="/componente" element={<p>pagina componente</p>}></Route>
      <Route path="/roberth" element={<p>Esta é a pagina do roberth</p>}></Route>

    </Routes>
  </BrowserRouter>
  );
}


 export default App;