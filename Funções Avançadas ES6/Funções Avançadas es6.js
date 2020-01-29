/*
ARROW FUNCTION:

Funções anônima antes deveriam estar associadas a uma variavel, ou sendo passadas como paramêtros de
outra funções

Arrow function teve seu nome originado da junção de = e > que forma => uma flecha, elas tbm são anônimas
e por isso so podem ser passadas por variáveis ou como paramêtro de outra função.

ex:
função antiga:

var sumOld = function(a, b){
    return a +b;
};
console.log(sumOld(5, 5));

Arrow Function:

var sum = (a, b) => a + b;

console.log(sum(5, 5));

Como o lado direito da arrow function é apenas uma expressão o Return pode ser omitido. agora caso 
seja necessario fazer Statements(declarar variaveis, usar ifs entre outros) as chaves devem ser utilizadas.

ex:
var sum = (a, b) => {
    var x = 10;

    if (a > b){

    }

    return a + b;
}

Há outras formas de escriver arrow function, caso haja apenas um argumento os parenteses podem ser 
omitidos.

ex: var sum = a => a + 5;

Caso sejam 2 argumentos os () são obrigatorios, eles também se tornam obrigatórios caso haja destructuring
ou em caso de rest operator(...a) e tbm com default values (a = 5) => a

no ES6 há também funções construtoras
function car(){
    this.marca = 'audi'
}
console.log(new car());

na função acima criamos um objeto com a propriedade marca e valor audi no obejto carro, porém isso
não pode ser feito com uma Arrow function

Ao trabalhar com arrow functions, devemos levar em conta a caracteristica de hoisting que as funções
clássicas tinham, hoisting é a caracteristica das funções e variaveis(declaradas com var) de serem 
movidas para o topo do escopo, podendo invocar a função antes de defini-la, porém isso não é correto
Essa caracteristica não funciona com arrow functions, elas não aceitam o hoisting e não podem ser 
chamadas antes de serem declaradas.


var obj = {
    showContext: function showContext(){
        console.log(this);
    },
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();

showContext faz o log da função, o this dentro do metodo está referenciando ao proprio objeto, porque
as funções no JS tem contexto de invocação, ou seja, elas são executadas no contexto de onde são invocadas

var obj = {
    showContext: function showContext(){
        this.log('teste');
    },
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();

ao utilizar o this para chamar o log ele funciona normalmente pois ele referencia ao objeto e este
objeto possui outro metodo chamado log

setTimeout(function(){}, 1000), onde o primeiro argumento é a função a executar e o segundo é o 
tempo em milisegundos

var obj = {
    showContext: function showContext(){
        this.log('teste');
        setTimeout(function(){
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();

ao executar essa função da um erro de this.log is not a function, pois função de timer ou callback 
e request e event listeners são invocadas num contexto global, para resolver isso existe um metodo
dentro das funções chamado bind ou apply eles tem suas diferenças mas ambos permitem que se fixe o
contexto da função

var obj = {
    showContext: function showContext(){
        this.log('teste');
        setTimeout(function(){
            this.log('after 1000ms');
        }.bind(this), 1000);
    },
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();

Porém isso fica muito "poluido" e nesse contexto podemos utilizar arrow function

var obj = {
    showContext: function showContext(){
       
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value)
    }
};

obj.showContext();

pois a Arrow function tem um contexto igual ao do codigo que a envolve, isso se chama contexto léxico
, ou seja, ela obtem seu contexto do contexto superior

DEFAULT FUNCTION ARGUMENTS

Através do ES6 agora é possivel atribuir valor padrão a um argumento da função, com isso é possível
adicionador um valor ao argumento caso o mesmo seja passado como undefined ou não seja passado ao
chamar a função

ex: function multiply(a, b = 1){
    return a * b;
};
console.log(multiply(5, 0)); //retorna 0

Desta forma podemos escrever de maneira enxuta e atribuir um valor caso seja esquecido, podemos tbm 
referenciar um paramêtro com outro

ex:function multiply(a, b = a){
    return a * b;
};
console.log(multiply(5)); //retorna 25

Um ponto importante é que a ordem é importante, ou seja, não podemos referenciar um paramêtro sem ele
ser declarado antes.

Ex: (b = a, a) //retornaria um erro informando que não pode ser referenciado pois não foi inicializado


lazy evaluation => uma função so é invocada se a outra função for chamada sem o paramêtro.

ex: function randomNumber(){
    return Math.random() * 10;
};

function multiply(a, b = randomNumber()){
    return a * b;
};
console.log(multiply(5));

No caso a função randomNumber só vai ser chamada se o parametro não for passado para o argumento b
da função multiply gerando assim uma lazy evaluation, e isso é bom para gerar ids randomicos, pois ela
so será executada no momento certo

ENHANCED OBJECT LITERALS

A maneira classica de declarar objetos no js é var obj = {prop: value}, uma outra forma é referenciando
uma variavel como a seguir:

ex: var prop1 = "DIO"
var obj = {
    prop1: prop1
}

Isso tbm pode ser feito omitindo o lado esquerdo que teria o mesmo efeito

ex: var prop1 = "DIO"
var obj = {
    prop1
}

Ele tbm pode ser passado como metodo de uma função

function method1(){
    console.log('Method called')
}

var obj = {
    method1
};

obj.method1();

a função também pode estar no valor da propriedade

ex: var obj = {
    sum: function sum(a, b){
        return a + b;
    } 
};
console.log(obj.sum(5, 5));

um outro shorthand do es6 é que podemos declarar a função omitindo a palavra function e funcionaria
da mesma forma

ex: var obj = {
    sum(a, b){
        return a + b;
    } 
};
console.log(obj.sum(5, 5))

esse metodo encurta e nos ajuda a trabalhar e ler melhor os objetos literais.

um forma comum de criar uma propriedade e atribuir valor a ela é declarar a propriedade como variavel
e um objeto vazio da seguinte forma:

ex: var propName = 'test';
var obj = {
};

obj[propName] = 'teste';

console.log(obj); // retorna { test: 'teste' }

operações tbm podem ser feitos na parte em que se atribui o valor a propriedade como a seguir:

ex: var propName = 'test';
var obj = {
};

obj[propName + ' de concate'] = 'teste';

console.log(obj); // retorna { 'test de concate': 'teste' }

Mas tudo isso era antes do ES6, com o advento do ES6 agora podemos fazer diretamente no objeto

ex: var propName = 'test';
var obj = {
    [propName + ' de concate']: 'teste'
};


console.log(obj); //retorna { 'test de concate': 'teste' }

com isso aumentamos a legibilidade e otimizamos a forma de trabalhar com objetos literais

*/
var propName = 'test';
var obj = {
    [propName + ' de concate']: 'teste'
};


console.log(obj);