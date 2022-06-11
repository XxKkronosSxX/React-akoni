function Lista() {
    const array =["A","B","C"];
    return(
        array.map((elemento)=> <li> <h1>{elemento}</h1></li>)
    );
}

export default Lista;