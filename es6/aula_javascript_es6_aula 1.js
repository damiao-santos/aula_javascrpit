/* O JS foi lançado em setembro de 1995 juntamente com a versão beta do navegador netscape, inicialmente tinha o nome de
moca e depois live script, ate receber o nome de javascript.
Ele foi criado na Sun em maio de 1995 por James Gosling e brendan eich que é o pai do JS

ECMAScript -> é uma especificação da linguagem de programação, que é padronizado pela ECMA262 da ECMAinternational, servindo
como base para futuras implementações de outras linguagens script como javascript, jscript e actionscript.
TC39 - é o comite responsavel pela evolução do javascript e seus integrantes são colaboradores dos maiores browsers atuais
ele mantém e atualiza os padrões(ECMA262) do ECMAScript, ele identifica e desenvolve e mantem padrões de bibliotecas que estendem
as features do ECMAScript que é o ECMA402 e faz suites de teste para as propostas aprovadas serem testadas(projeto ECMATR 104)

links tc39:
https://github.com/tc39
https://github.com/tc39/proposals

fluxo das proposta:
stage 0: strawman - submete-se um formulario com a ideia de evolução do ECMAScript, e a submissão deve ser feito por um
membro ou contribuidor registrado no tc39, aqui o documento é analisado e adicionado as paginas da proposta como stage 0

stage 1: proposal - é nesta etapa que surge a proposta formal da funcionalidade, é nessa etapa que é escolhido um campeão
 e ele precisa ser mebro tc39, o objetivo da proposta tem que estar bem descrito e tem que ter exemplos, se a proposta for
 aceita o tc39 vai examinar e contribuir com essa proposta.

Stage 2: Draft - é a primeira versão dessa proposta que vai entrar na especificação, a proposta precisa novamente de uma
descrição formal da sintaxe e semantica da funcionalidade e tem que ser o mais completa possivel, podem haver alterações
incrementais nessa proposta, duas implementações são necessaria nessa proposta sendo que uma delas pode rodar pelo Babel

Stage 3: candidate - Proposta quase finalizada, necessita de um feedback de implementação e de usuários para progredir
a especificação tem que estar completa nessa etapa, algumas revisões da tc 39 que não podem ser revisões feitas pelo campeão
responsável e o editor da revisão do ECMAScript precisa assinar essa especificação. Tem que ter pelo duas especificações
compativeis com a implementação

Stage 4: finished - Proposta pronta pra ser incluida na especificação mas ainda tem pontos para progredi, é obrigatorio estar
passando na suite de teste com duas especificações compativeis passando no teste, tem que ter uma experiencia pratica signi-
-ficativa na implementação baseado no feedback da etapa anterior e o editor da especificação da ECMAScript tem que assinar
essa especificação

ultimas especificações:

ES2018 - nela foram incluidas Operadores rest/spread - Operações Assíncronas - Promise.prototype.finally()
ES.Next - é uma futura implementação, não ta disponivel mas pode ser testada pelo BABEL em
https://babeljs.io/
Babel é ums compilador(transpilador) que converte as implemetações mais atuais de JS para versões antigas e 
mais aceitas para browser em geral

Conceitos do Javascript:

Linguagem interpretada - o codigo é executado de cima para baixo e o resultado dessa execução é imediatamente retornado
e o codigo não precisa ser transformado em algo diferente antes de ser executado.

Linguagem de Tipagem Fraca e Dinâmica - tipagem fraca quer dizer que não ha verificação em todas as operações no JS, ou seja,
é possivel utilizar o operador de soma com uma string e um numero sem que ocorra erro. Tipagem Dinamica - não é preciso
especificar a tipagem da variavel na declaração, o tipo de variável é assumido pelo valor associado

Typescript - é um superset da linguagem da javascript, alem de conseguir adicionar tipos em tempo de desenvolvimento
e adiciona funcionalidades que o JS não tem por padrão https://www.typescriptlang.org 

Flow (https://flow.org/en/) - semelhante ao typescript em relação a checagem de tipo mas não é um superset do JS

Funções de Primeira Classe e Ordem maior - quer dizer que a função pode ser atribuida a uma variável, atribuida uma estrutura
de dados(seja object ou array) e ela pode ser passada por argumentos e ate retornadas por outras funções.

Closure - é a capacidade uma função lembrar do ambiente em que ela foi criada, não é um modelo ideal de trabalho
o ideal é usar uma função pura, que recebe um parametro e retorna um valor

*/

/* js não é por padrão uma linguagem funcional, porém consegue se escrever codigos funcionais com ele e ir
adaptando ela 

currying - é a tecnica de transformar uma função com N parametros em apenas uma função que recebe um parametro e 
para cada parametro vai retornando uma nova função

Ex: 
function soma(a, b){
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

ao inves de ficar sempre repetindo o primeiro parametro podemos usar o currying:

function soma(a){
    return function(b){
        return a + b;
    }

}
const soma2 = soma(2)

console.log(soma2(2));

Hoisting - significa levantar ou suspender algo, é um comportamento que ocorre no JS em declaração de variaveis e funções
a declaração de escopo e funções são elevadas ao escopo em que ela está seja bloco, função ou global. Pode ser separado
em dois tipos: de variaveis e de funções. 

Hoisting de variavel - so eleva a criação da variavel e não sua atribuição.

Ex:

function fn(){  // aqui terá o mesmo efeito da segunda função
    console.log(text);
    var text = "exemplo";
    console.log(text);
}


function fn(){
    var text; // a variavel é declarada e elevada
    console.log(text); //aqui não vai haver reference error, apenas ira retornar o valor undefined pois esta vazia
    text = "exemplo"; 
    console.log(text); //após atribuição do valor ele é retornado na tela
}


Hoisting de função - é elevada como um todo, até mesmo sua assinatura.

Ex:
    function fn(){
        log("hoisting da função");

        function log(value){
            console.log(value);
        }
    }

    fn();

    function fn(){
        function log(value){
            console.log(value);
        }

           log("hoisting da função");
    }

    fn();

    Por mais que o log seja declarado antes da função em si o hoisting de função eleva a função como um todo e o
    console.log do value irá aparecer normalmente como na segunda função. Mas o ideal é configurar o linter para não
    permitir hoisting de função e fazer com ela seja chamada antes dela ser criada, pois é uma boa pratica criar a função
    antes de usar.

    Imutabilidade - Dados de uma variavel,objeto ou array imutaveis e não podem ser alterados, se algum novo dado tiver
    que ser incluido ou alterado, um novo deve ser feito e concatenado através de função. Isso é conseguido através da
    declaração de variavel no modo const, que é uma constante, ou seja, seu valor nunca irá mudar

    Ex:

    const user = {
        name: "Damião",
        lastName: "Tenorio Vasconcellos"
    };
    
    function getUserWithFullName(user){
        return {
        ...user,
        fullName: user.name + ' ' +user.lastName
    }
    }

    const userWithFullName = getUserWithFullName(user);

    console.log(userWithFullName);

    Objetos e Array são passados para uma função como referência. Se eu altera-lo ele irá alterar o mesmo local que a variavel aponta.

    outro exemplo

   const students = [
    {
        name: 'Grace',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 10
    }
];
function getApprovedStudents(studentsList){
    return studentsList.filter(students => students.grade >= 7);
}
console.log("alunos Aprovados: ");
console.log(getApprovedStudents(students));

console.log("\nLista de Alunos: ");
console.log(students);


Tipos e Variaveis Existem 3 formas de declarar variaveis:

var - é o pioneiro e unico meio utilizado antes do ES6, somente aceita declarção em escopo global e de função


let - aceita ser declarada em escopo de bloco alem de global e função. Tem o mesmo funcionamento padrão do var


const - aceita ser declarada em escopo de bloco alem de global e função. é feito para criar uma constante, porém tem algumas particularidades
quando o const é atribuido a um tipo primitivo como o String, ele não permite a troca do valor, porém ao criar um onjeto
ele permite que as propriedades possam ser mudadas. Quando criamos um array ou objeto, o que não pode ser mudado é para
onde ele esta apontando(sua referência)

obs: antigamente com o var o js so tinha escopo de função e global, com a introdução do let e const acrescentou-se o escopo
de bloco ( tudo que tiver entre {} é um escopo de bloco)
ex:

//escopo de global
{
    //escopo de bloco
}

function name(){
    // escopo de função
}

exemplo let e const: ambos se comportam da mesma forma
(() => {
    let test = "valor função";
    console.log(`Valor da função é: ${test}`);
    if (true){
        let test = "valor if";
        console.log(`Valor dentro de if é:${test}`);
    }
    if(true){
        let test = "valor outro if";
        console.log(`Valor dentro de outro if é: ${test}`);
    }
    console.log(`Valor apos execução do if  é: ${test}`);
}   
)(); // o valor de let é alterado dentro dos if mas fora continua o mesmo pq ele respeita o escopo de bloco

${} => isso é uma expressão que faz parte da template string e deve ser usada entre acentos graves(``)




*/

(() => {
    let test = "valor função";
    console.log(`Valor da função é: ${test}`);
    if (true){
        let test = "valor if";
        console.log(`Valor dentro de if é:${test}`);
    }
    if(true){
        let test = "valor outro if";
        console.log(`Valor dentro de outro if é: ${test}`);
    }
    console.log(`Valor apos execução do if  é: ${test}`);
}   
)();