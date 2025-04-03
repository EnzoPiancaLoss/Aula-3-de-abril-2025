function Calcular(valorInformado, valorMaximo) {
    let x = 0;
    let ArrayDeResultados = [];

    for (let i = 0; i < valorMaximo; i++) {
        x += valorInformado;
        ArrayDeResultados.push(x)    
        console.log(valorInformado, "*", i + 1, "=", x);
    }
    console.log(ArrayDeResultados);
    return ArrayDeResultados;
}

function EscreverTabuada(arrayInformado) {
    console.log(arrayInformado);
    document.getElementById("Parafragro").innerHTML = "";

    for (let i = 0; i < arrayInformado.length; i++) {
        

        //let div = document.getElementById("Parafragro");
        //div.removeChild(div.firstChild);
        
        var novoParagrafo = document.createElement("p");

        novoParagrafo.classList.add("TextoDeOutput")

        novoParagrafo.textContent = String(i + 1) + " * " + String(arrayInformado[0]) + " = " + String(arrayInformado[i]) ,"</p>";
        document.getElementById("Parafragro").appendChild(novoParagrafo)

        //document.writeln();
    }

}


//Essa é a função main
function Iniciar() {
    // Pega o valor do text feild
    let Numero = document.getElementById("lname").value;
    let maximo = document.getElementById("lmax").value;

    console.log(Numero);

    //Processa o valor da tabuada e retorna como um array
    let y = Calcular(parseInt(Numero), maximo);

    //Usa os dados do array e cria a tabuada
    console.log( EscreverTabuada(y) );
}

// let ValorDaTabuada = 12;
// let ValorMaximo = 10;
// EscreverTabuada(Calcular(ValorDaTabuada, ValorMaximo));
//Teste();