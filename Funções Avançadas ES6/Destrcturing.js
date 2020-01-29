/*

DESTRUCTURING ASSIGNMENT

Antes do Es6 para atribuir cada item de um array a yma variavel tinhamos que fazer da seguinte forma

ex: var frutas = ['Maçã', 'Banana', 'Laranja'];

var maça = frutas[0];
var banana = frutas[1];
var laranja = frutas[2];

Com o surgimento do ES6 e do Destructuring assignment, o destructuring é representado pelos conchetes
de um array do lado da declaração de variaveis, como podemos ver a seguir:

ex: var [maça2, banana2, laranja2] = ['Maçã', 'Banana', 'Laranja'];

console.log(maça2); //retorna Maçã

No lado do destructuring, declaramos as variaveis de acordo com o index do array.

Caso tenhamos um array dentro de outro array, o mesmo deve acontecer com a variavel dentro do destructuring

ex: var [maça2, banana2, laranja2, [tomate2]] = ['Maçã', 'Banana', 'Laranja', ['tomate']];

console.log(tomate2); //Retorna tomate

Sempre temos que tomar cuidado com esse tipo de array multi-dimensional, para fazer a desconstrução
de forma correta e nos niveis corretos.

Caso o valor correspondente da variavel não exista no array ele vira como undefined

POdemos usar Destructuring também para objetos

var obj = {
    name: 'Celso'
};

var {name} = obj;

console.log(name);

nos definimos a estrutura com {} como em um objeto, para sinalizar que esse é o objeto que ele vai destruir
e encontrar a propridade name, pegar o seu valor e atribuir para uma variavel name, porém isso não é 
uma definição de nome de variavel como no array, no destructuring de objetos normalmente utilizamos o
nome da propriedade e ela atribui a uma variavel com identificação igual a da propriedade.

Para atribuir uma variavel a um destructuring de objeto devemos fazer da seguinte forma

var {name: objectName} = obj;

Com isso sinalizamos que estramos destruindo a propriedade name e atribuindo a variavel objectName. 
Podemos Alterar essa variavel criada que ela não irá o objeto original.

Assim como os nested array(array dentro de array) podemos fazer o destructuring com nested object, e
também podemos definir variaveis a ele da mesma foi que fazemos num destructuring de objeto normal

var obj = {
    name: 'Celso',
    props:{
        age:45
    }
};

var {name: objectName, props:{ age: objectAge }} = obj;

console.log(objectName, objectAge);

Também pode ser feito destructuring de array dentro de objetos e vice-versa, ao adicionar o Array a
propriedade favColor podemos fazer seu destructuring da seguinte forma

var obj = {
    name: 'Celso',
    props:{
        age:45,
        favColor: ['black', 'blue']
    }
};

var {name: objectName, props:{ age: objectAge, favColor: [color1, color2] }} = obj; //destructuring multiniveis com array

console.log(objectName, objectAge, color1, color2); //Retorna Celso 45 black blue

Agora para pegar as propriedades do do objeto dentro de um Array fazemos da seguinte forma:

var arr = [{name: 'apple', type: 'fruta'}]

var [{ name: name1, type: tipo }] = arr;

console.log(name1, tipo); //retorna apple fruta

O Destructuring também pode ser feito como uma lista de argumentos de uma função, antes quando utiliza-
-mos arrays em função era desta forma

function sum(arr) {
    return arr[0] + arr[1];
}
console.log(sum([5, 10])); //retorna 15

Porém também podemos usar o destructuring, pegando indices e atribuindo a variavéis

function sum([a, b]) {
    return a + b;
}
console.log(sum([5, 10])); //retorna 15 

Podemos ainda utilizar Destructuring com default values

function sum([a, b] = [5 , 5]) {
    return a + b;
}
console.log(sum()); // retorna 10, pois não foram passados argumentos, porém caso sejam passados eles iram
ignorar o default value estabelecido e serão utilizados pela função

Também pode ser feito com objetos

function sum({a, b}) {
    return a + b;
}
console.log(sum({a: 5, b: 10})); //retorna 15


*/

function sum({a, b}) {
    return a + b;
}
console.log(sum({a: 5, b: 10}));