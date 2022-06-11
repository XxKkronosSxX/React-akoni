function Formulario() {
    return(
        <>
        <label for = "nome">Nome</label>
        <input id ="nome" type= "text"></input>
        <button onClick={salvar}>Salvar</button>
        </>
    );
}

function salvar() {
    console.log("Salvou");
    window.alert("salvou!")
}

export default Formulario;