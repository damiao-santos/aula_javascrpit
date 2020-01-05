//Javascript é uma linguagem de scrpit e multiplataforma e tem essa denominação de scrpit pq é executada em tempo real

/*Client Side - é executado do lado do cliente(usuário)
Tem capacidade de interagir com elementos de uma pagina html
muito utilizado no desenvolvimento de paginas e também aplicativos mobile hibridos  */

/* a interação do JS com o HTML so é possível graças ao DOM - Document Object Model, o DOm é o documento que o navegador gera quando carrega a página
ele é um modelo de elemento de arvore e graças a esse documento o js pode interagir e alterar qualquer elemento HTML
Também por causa do DOM é possivel com javascript alterar qualquer atributo ou estilo de CSS */

/*O javascript tem tipagem dinamica, ele não precisa declarar o tipo da variavel, se ela tiver entre "" ele ja sabe que é string*/



var nome = "Damião Tenorio" //declara a variavel que podem ser do tipo - String, Number, Null, Boolean, Undefined
var n1 = 29;
var n2 = 5;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos"); //alert cria um pop-up de alerta na pagina, o + concatena strings
//alert(idade + idade2);
console.log(nome); //console.log não emite um alerta com a informação, ele deixa amostra no console da pagina acessado atraves do f12
console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil")); //Com o comando .replace("original", "subistituto") eu posso trocar palavras da string.
//console.log(frase.toUpperCase()); //Transforma toda string em maiuscula
console.log(frase.toLowerCase()); //Transforma a string em minuscula