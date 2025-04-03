function Calcular(valorInformado, valorMaximo) {
    let x = 0;
    let ArrayDeResultados = [];

    for (let i = 0; i < valorMaximo; i++) {
        x += valorInformado;
        ArrayDeResultados.push(x) //Push é basicamente o append
        console.log(valorInformado, "*", i + 1, "=", x);
    }
    console.log(ArrayDeResultados);
    return ArrayDeResultados; //Devolve Array
}

function EscreverTabuada(arrayInformado) {
    console.log(arrayInformado);
    document.getElementById("Parafragro").innerHTML = ""; // innerHTML = "" Deleta os filhotes do Paragrafo Similar ao CleanChilds()

    for (let i = 0; i < arrayInformado.length; i++) {
        

        var novoParagrafo = document.createElement("p");

        novoParagrafo.classList.add("TextoDeOutput") // Adiciona uma classe de css para os paragrafrosque vão ser cirados

        novoParagrafo.textContent = String(i + 1) + " * " + String(arrayInformado[0]) + " = " + String(arrayInformado[i]) ,"</p>";
        document.getElementById("Parafragro").appendChild(novoParagrafo)

    }

}


//Essa é a função main
function Iniciar() {
    // Pega o valor do text feild
    let Numero = document.getElementById("lname").value;
    let maximo = document.getElementById("lmax").value; //Pega os dois valores

    console.log(Numero);

    //Processa o valor da tabuada e retorna como um array
    let y = Calcular(parseInt(Numero), maximo);

    //Usa os dados do array e cria a tabuada
    console.log( EscreverTabuada(y) );
}


//Isso aqui em baixo é só para teste de debugging
// let ValorDaTabuada = 12;
// let ValorMaximo = 10;
// EscreverTabuada(Calcular(ValorDaTabuada, ValorMaximo));
