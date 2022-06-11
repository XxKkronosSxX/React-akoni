import { useEffect, useState } from "react";
import mock from "./mock.json"

function ListaDeUsuarios() {
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {
        setTimeout(()=>setCarregando(false), 5000);
    },[]);


    if(carregando){
        return <p className="m-5">Carregando</p>;
    } else{

        }
    
    
 //       console.log(mock)
    return (
       <div className="collumns">
           {carregando && <p className="m-5">Carregando...</p>}
          {mock.usuários.map((usuario)=>(
            <div className="card m-1 p-4 has-text-info columns" key={usuario.nome}>
                <div className="colum">
                 <p>{usuario.nome}</p>
                </div>
                <div className="colum">
                 <p>{usuario.ativo.toString()}</p>
                </div>
            </div>
         ))} 

        </div>
    );
}

export default ListaDeUsuarios;