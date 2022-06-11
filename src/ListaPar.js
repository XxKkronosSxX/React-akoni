function ListaPar(){
    const arraybunerico = [1,2,3,4,5,6,7,8,9,10];

    return(
        arraybunerico.map((numero) => {
            return numero%2 !=1 && <p>{numero}</p>
        })
     )
}

export default ListaPar;