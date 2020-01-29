/*

Quando o rest operator é utilizado nos argumentos de uma função, além da lista de argumentos, ele também traz:
Os métodos e propriedades de array por ser uma instância de um array.


Rest e Spread Operator

arguments - é uma variavel reservada que se refere a todos os argumentos de uma função
Antes do ES6 para uma função utilizar um numero indefinido de argumentos e não precisasse saber os itens
passado para as funções faziamos:

function sum(a, b){
    var value = 0
for(i=0; i < arguments.length; i++){
    value += arguments[i];
}

    return value
}

console.log(5, 5, 5, 2, 3,);

com o ES6 tivemos a inclusão de alguns operadores novos, um que nos ajuda nessa questão é o:

Rest operator => ele escreve de uma maneira semelhante do spread operator com três pontos(...), quando
vemos os três pontos obrigatoriamente dentro da lista de argumentos temos o rest operator, ele vai
transformar os argumentos da função em um array, diferente da variavel reservada arguments que o
proto é objeto e com isso manipular com os metodos de array normal.

ex: function sum(...args){
   return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3)); //retorna 20 que é a soma de todos os valores.

Em casos de Arrow function não é possivel acerssar a lista de argumentos pela variavel arguments, pois
ela consta como indefinida, um outro fato do rest é que ele pode ser usado para pegar parametros
restantes, podemos definir um elemento como a e b e o restante formam o array do rest operator

ex: const sum = (a, b, ...rest) => {
    console.log(a, b, rest); //retorna 5 5 [ 5, 2, 3 ]
}

console.log(sum(5, 5, 5, 2, 3)); //retorna undefined

Antes quando queriamos passar os argumentos de uma função para outra faziamos da seguinte forma:

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
   return multiply.apply(undefined, rest); //utilizavamos o metodo apply, com o primeiro argumento como undefined e o segundo passamos o rest operator da função que tem os argumentos
}

console.log(sum(5, 5, 5, 2, 3));

Porém essa forma cai no problema de ficar um codigo dificil de entender pois a pessoa vai ter que 
entender se vc quer redefinir o contexto ou não, se quer passar uma lista de argumentos de outra função

Com o ES6 Surgiu o Spread Operator e ele se escreve da mesma forma que o Rest Operator com os 3 pontos,
porém seu funcionamento é diferente do Rest. O Rest pega todos os paramêtros de uma função e transforma
num Array enquanto o Spread pega todos os itens do array e transforma em paramêtros para uma segunda função
Como podemos ver no exemplo a seguir:

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
   return multiply(...rest);
}

console.log(sum(5, 5, 5, 2, 3));

Só que o Spread Operator ele não se limita apenas a listas, ele pode ser usado em Strings, Arrays e em
Objetos para construir outros objetos literais e funciona também em Objetos iteráveis. Basicamente ele
tem a função de quebrar itens e passar para outro lugar seja como paramêtro de função


Strings =>

const name = 'Damião';

function nameArgs(...args) { //rest operator
    console.log(args);
}
nameArgs(...name); //Spread operator
// retorna [ 'D', 'a', 'm', 'i', 'ã', 'o' ]

No caso o Spread quebrou a string em caracteres e cada letra ocupa um index no array

Arrays =>

const arr = [3, 6, 1, 8];

function logArgs(a, b, c, d) {
    console.log(a, b, c, d);
}
logArgs(...arr); // o Spread retorna 3 6 1 8

Cada o array foi quebrado e cada item no array foi passado como argumento para os paramêtros da função

O Spread também pode ser usado para construir arrays, ao inves de usar o .concat que é a forma normal
de se juntar 2 arrays, podemos usar o spread na hora da criação do segundo array ficando:

const arr = [3, 6, 1, 8];


const arr2 = [...arr, 9, 10, 11 ];

console.log(arr2); retorna [3, 6, 1, 8, 9, 10, 11]

E ele pode ser usado para criar novos arrays sem problemas e quantas vezes necessarias

Objetos Literais =>

Quando Utilizamos Spread em objetos literais eles so podem ser usados para construir novos objetos

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    name: 'damião'
};

console.log(obj2); retorna { test: 123, name: 'damião' }

um spread de objeto não pode ser usado para outra coisa que não seja construir um objeto literal, para 
usar o spread fora de um objeto literal ele teria que ser um Objeto iteravel.
a Ordem em que é feito o spread dita quais propriedades serão mantidas caso elas se repitam no segundo
objeto.

Outra coisa que o Spread é muita utilizada no objeto é para fazer clone do objeto, pois se referenciar-
-mos um objeto a outro e depois alterar uma propriedade desse segundo objeto como no exemplo abaixo

const obj = {
    test: 123
};

const obj2 = obj
obj2.test = 456
console.log(obj); //retorna 456, pois altera a referencia

Veremos que o valor de obj é alterado pois ele esta referenciado no obj 2, então para evitar isso fazemos
um clone como no exemplo abaixo

const obj = {
    test: 123
};

const obj2 = {...obj}
obj2.test = 456
console.log(obj); //retorna 123

O primeiro objeto não é alterado pois não esta mais sendo referenciado no segundo. Porém o clone realizado
é chamado de Shallow clone, ou seja ele é um clone raso, se ele tiver um outro objeto dentro dele, e 
tentarmos alterar uma propriedade desse "sub-objeto" no seu clone, então o promeiro objeto será alterado
como no exemplo a seguir:

const obj = {
    test: 123,
    subObject: {
        test: 123
    }
};

const obj2 = {...obj};
obj2.subObject.test = 456;

console.log(obj); // retorna { test: 123, subObject: { test: 456 } }

Para driblar esse comportamento temos que fazer um Spread do subobjeto como no exemplo:

const obj = {
    test: 123,
    subObject: {
        test: 123
    }
};

const obj2 = {...obj, subObject: {...obj.subObject}};
obj2.subObject.test = 456;
console.log(obj); // retorna { test: 123, subObject: { test: 123 } }

Assim fazemos um clone do subobjeto e o programa funciona de maneira correta.



*/

const obj = {
    test: 123,
    subObject: {
        test: 123
    }
};

const obj2 = {...obj, subObject: {...obj.subObject}};
obj2.subObject.test = 456;
console.log(obj2);





