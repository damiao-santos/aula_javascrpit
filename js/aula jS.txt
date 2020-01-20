//Javascript é uma linguagem de scrpit e multiplataforma e tem essa denominação de scrpit pq é executada em tempo real

/*Client Side - é executado do lado do cliente(usuário)
Tem capacidade de interagir com elementos de uma pagina html
muito utilizado no desenvolvimento de paginas e também aplicativos mobile hibridos  */

/* a interação do JS com o HTML so é possível graças ao DOM - Document Object Model, o DOm é o documento que o navegador gera quando carrega a página
ele é um modelo de elemento de arvore e graças a esse documento o js pode interagir e alterar qualquer elemento HTML
Também por causa do DOM é possivel com javascript alterar qualquer atributo ou estilo de CSS */

/*O javascript tem tipagem dinamica, ele não precisa declarar o tipo da variavel, se ela tiver entre "" ele ja sabe que é string*/



//var nome = "Damião Tenorio" //declara a variavel que podem ser do tipo - String, Number, Null, Boolean, Undefined
//var n1 = 29;
//var n2 = 5;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos"); //alert cria um pop-up de alerta na pagina, o + concatena strings
//alert(idade + idade2);
//console.log(nome); //console.log não emite um alerta com a informação, ele deixa amostra no console da pagina acessado atraves do f12
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); //Com o comando .replace("original", "subistituto") eu posso trocar palavras da string.
//console.log(frase.toUpperCase()); //Transforma toda string em maiuscula
//console.log(frase.toLowerCase()); //Transforma a string em minuscula

/* Arrays podem conter mais de uma informação, são declarados com var variavel = [], dado deve ser informado separado
por virgulas, e cada um tem uma posição começando a partir do 0, ou seja, o primeiro elemento do array fica
na posição 0. 
Ex: se eu quero o segundo elemento do array lista eu declaro console.log(lista[1]) */
//var lista = ["maça", "pêra", "laranja"];
//console.log(lista);
//lista.push("uva") //comando .push coloca um elemento no final do array
//lista.pop() // o comando .pop retira o elemento no fim do array
//console.log(lista.lenght) //o atributo .lenght mostra o tamanho do array
//console.log(lista.reverse()) //o metodo .reverse() mostra no console o array na ordem inversa
//console.log(lista.toString()) //mostra no console o array convertido como String
//console.log(lista.join(" - ")) // também transforma o elemento em String, mas ao inves de separar por virgula, separa pelo elemento especificado no metodo

/* Os Objetos também chamados de Dicionários se assemelham a Array, porém ao inves de usar [] na hora de declarar
utilizamos {} e os objetos contem uma Propriedade e um Valor
Ex: var fruta = {nome: "maçã", cor: "vermelha, quantidade: 30"} */
//var fruta = {nome: "maçã", cor: "vermelha", quantidade: 30};
//console.log(fruta);
//console.log(fruta.nome) //irá mostrar somente o valor da propriedade nome dentro do objeto fruta

//var frutas = [{nome:"laranja", cor:"laranja", quantidade:50}, {nome: "maçã", cor: "vermelha", quantidade: 30}]; // Aqui temos um Array de Objetos, onde dentro de cada index do array teremos um objeto
/*para pegar a informação de uma propriedade dentro do array deve se ter a posição do array.propriedade Ex:
console.log(frutas[0].quantidade);*/
//console.log(frutas);

/*As estruturas de condição em Js são If, Else if e Else, são utilizadas quando precisamos tomar uma decisão 
com base numa condição especifica para ter diferentes respostas */
//var idade = prompt("Por favor informe sua idade") //o comando prompt mostra uma mensagem em forma de alerta para captar informações e associa-la a variavel especificada
//var idade = 17;
/*if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
};*/

/* Laços de Repetição são usados quando queremos que um codigo rode pela quantidade de vezes que especificamos
e esses laços são While e For*/

/* var tabuada = prompt("informe qual numero vc deseja para tabuada");
var contador = 0
var limite = 10
while(contador <= limite){
    resultado = tabuada * contador;
    console.log(tabuada + " X " + contador + " = " + resultado); 
    contador++
} */

/* var tabuada = prompt("informe qual numero vc deseja para tabuada");
var contador;
var limite = 10
for(contador = 0; contador <= limite; contador++){
    resultado = tabuada * contador;
    console.log(tabuada + " X " + contador + " = " + resultado); 
} */

/* var d = new Date; // a declaração new Date pega a data atual no padrão americano informa tbm o gmt
console.log(d);
console.log(d.getMonth() + 1); //pega o Mês da data, mas deve-se sempre por o + 1 pois ele começa a contagem do 0
console.log(d.getDay());
console.log(d.getDate()); */

/* Funções podem realizar um bloco de codigo quando são chamadas pelos seus parametros */
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
// o metodo acima não executa nada a não ser que seus argumentos sejam chamados por um alert ou console.log
console.log(soma(5, 10)) // ao chamar a função e especificar seus argumentos temos a execução do codigo especificado
console.log(setReplace("Avante Japão","Japão","Brasil"))*/

/* quando uma variavel é declarada fora da função ela é uma variavel Global,
quando é declarada dentro da fyunção é uma variavel Local 

function validarIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Informe a idade");
alert(validarIdade(idade)); */

/*Elementos que devem ser adicionados no HTML para chamar uma função javascript:
onclick - Chama a função ao clicar no elemento especificado
onmouserover - chama a função ao passar o mouse por cima do local especificado
onmouserout - chama a função ao tirar o mouse do local especificado 
onload - chama a função ao carregar  o elemento
onchange - chama a função ao trocar uma escolha e vc pega o valor dessa troca. também troca o valor do elemento*/


/* o document.getElementByID me restringe a executar a função apenas no id especificado, ao adicionar uma variavel por ex: elemento
no parametro da função e especificar this na chamada da função no html eu posso trocar qualquer elemento com a função */


function clicou(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"; // o .innerHTML me permite inserir o dado que eu quiser onde tem a id especificada
    // document.getElementById("agradecimento")// pega o elemento html pela id designada a ele
    //alert("valeu menor, clicada zica")
}
function redirecionar(){
    window.open("https://www.facebook.com/"); // redireciona para o link especificado em outra aba
    //window.location.href = "https://www.facebook.com/"; // abre o link na pagina atual e não em uma nova, pois so muda a referencia
}
function trocar(elemento){
    elemento.innerHTML = "suck me motherfucker"
    //document.getElementById("mousemove").innerHTML = "suck me motherfucker";
    //alert("trocar texto")
}
function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui"
}
function load(){
    alert("Mo daijabu watashi ga kita");
}
function funcaoChange(elemento){
    console.log(elemento.value) //mostra o valor do elemento no console
}