/*
                        MANIPULAÇÃO E ITERAÇÃO DE ARRAY

Criar um array => declarar uma variavel e utiliza-se conchetes
ex de sintaxe:

const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3); // isto é um array instanciado

Função Array.of => Cria uma nova instância de Array a partir do número de parâmetros informados, indepen
- dente do tipo, cada parametro passado para a função vira array

ex de sintaxe:

const arr = Array.of(1, 2, 3);

ex:

const person = Array.of('Jonas', 'Damião', 'Rayanne');

person
(3) ["Jonas", "Damião", "Rayanne"]0: "Jonas"1: "Damião"2: "Rayanne"length: 3__proto__: Array(0)

const numberAndStrings = Array.of(1, 2, 'lucian', 'Senna');

numberAndStrings
(4) [1, 2, "lucian", "Senna"]

Função Array => Cria uma nova instancia de Array de acordo com os parâmetros informados, se for pas-
-sado apenas um parametro para essa função e ela for do tipo inteiro, será criado um array com N
posições vazias.

ex de sintaxe:

const arr = Array(3); //cria 3 posições vazias [Empty x3]

const arr2 = Array(3, 2); //cria o array [3, 2]

exemplo:
const arrEmpty = Array(5);

arrEmpty
(5) [empty × 5] length: 5 __proto__: Array(0)

Função Array.from => Cria uma nova instânca de Array a partir de um parâmetro array-like ou
iterable object, um array like pode ser um node list e o iterable object seria um setmap

ex:
const divs = document.querySelectorAll('div'); //armazena todas as divs encontradas na pagina na variavel
const arr = Array.from(divs);

INSERIR E REMOVER ELEMENTOS

Push => Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array

Ex: const frutas = ['maçã', 'uva'];

frutas.push('laranja'); //insere laranja no final do array
3 //retorna o tamanho do novo array

frutas 
(3) ["maçã", "uva", "laranja"] // novo array

Pop => Remove o ultimo elemento do final do array e retorna o elemento removido.

Ex: const nomes = ['damiao', 'Rayanne', 'Maya'];

nomes.pop()
"Maya"

nomes
(2) ["damiao", "Rayanne"]

Unshift => Adiciona um ou mais elementos no inicio do array e retorna o tamanho do novo array

ex:nomes
(2) ["damiao", "Rayanne"]

nomes.unshift('Gael');
3

nomes
(3) ["Gael", "damiao", "Rayanne"]

Shift => Remove o primeiro elemento do final do array e retorna o elemento removido.

Ex: nomes
(3) ["Gael", "damiao", "Rayanne"]0: "Gael"1: "damiao"2: "Rayanne"length: 3__proto__: Array(0)

nomes.shift()
"Gael"

nomes
(2) ["damiao", "Rayanne"]

Concat => Concatena um ou mais arrays e retorna um novo array e o concat não altera os arrays
utilizados na concatenação.

Ex: frutas
(3) ["maçã", "uva", "laranja"]

const salgados = ['coxinha', 'kibe', 'empada'];

const alimentos = frutas.concat(salgados);

alimentos
(6) ["maçã", "uva", "laranja", "coxinha", "kibe", "empada"]

Slice => é imutavel como o concat, retorna um novo array "fatiando" o array de acordo com o 
inicio e fim, no caso de qual indice ate qual indice ele irá cortar. Porém não é obrigatorio
ter 2 parametros.

const arr = [1, 2, 3, 4, 5]
arr.slice(0, 2); //[1, 2]
arr.slice(2); //[3, 4, 5]
arr.slice(-1); //[5]
arr.slice(-3); //[3, 4, 5]

Splice => Não é imutavel, ele mexe no array. Altera um array adicionando novos elementos enquanto
remove elementos antigos

const arr = [1, 2, 3, 4, 5]

arr.splice(2) //remove os elementos a partir da posição 2 [3, 4, 5]
console.log(arr); //retorna [1, 2], pois o array é alterado em sua referencia

arr.splice(0, 0, 'first') //[], basicamente os parametros dizem, no indice 0, não sera removido itens e sera adicionado 'first' 
console.log(arr); //['first', 1, 2]

ITERAR ELEMENTOS:

forEach => Iteração de cada elemento dentro de um array

ex: const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(index + ": " + value);
});

Map => Retorna um novo array, de mesmo tamanho, iterando cada item de um array

ex:
const arr = [1, 2, 3, 4, 5];

const arrMap = arr.map(value => value * 2);

console.log(arrMap);

Flat => Retorna um novo Array com todos os elementos de um sub-array concatenados de forma recursiva
de acordo com a profundidade especificada(depth)

ex de sintaxe:
const arr = [1, 2, [3, 4]];

const arrFlat = arr.flat(); //quando o nivel não é especificado ele é naturalmente 1, o numero entre os () especifica o depth

console.log(arrFlat); // resultado [1, 2, 3, 4]

flatMap => Retorna um novo array assim como a função map e executa um flat de profundidade 1

ex:
const arr = [1, 2, 3, 4];

const arrFlat = arr.flatMap(value => [value * 2]);
const arrFlat2 = arr.flatMap(value => [[value * 2]]);

console.log(arrFlat); //retorna [ 2, 4, 6, 8 ] pois o nivel de profundidade 1 ja desfaz o [] ao redor de value
console.log(arrFlat2); // retorna [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ] //como o nivel de profundidade é 1 ele apenas sobe 1 array

keys => retorna um Array Iterator que contém as chaves(index) para cada elemento do array

ex: 
const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

console.log(arrIterator.next(), arrIterator.next()); //retorna { value: 0, done: false } { value: 1, done: false }
//done indica quando o array termina no caso como so pegamos as duas primeiras o o done ainda é false

values => retorna um Array Iterator que contém os valores para cada elemento do array

ex:
const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

console.log(arrIterator.next(), arrIterator.next());
// retorna { value: 1, done: false } { value: 2, done: false }

entries => Retorna um Array Iterator que contém os pares chaves/valor para cada elemento do array

ex:
const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

console.log(arrIterator.next(), arrIterator.next());
//retorna { value: [ 0, 1 ], done: false } { value: [ 1, 2 ], done: false }

BUSCAR ELEMENTOS:

find => Retorna o primeiro item do array que satifaz a condição

ex const arr = [1, 2, 3, 4];

const arrGreater = arr.find(value => value > 3);

console.log(arrGreater); //Retorna 4 que é o primeiro item do array que é maior que 3.

findIndex => Retorna o Indice do primeiro item de um array que satisfaz a condição.

ex: const arr = [1, 2, 3, 4];

const arrIndexGreater = arr.findIndex(value => value > 3);

console.log(arrIndexGreater); //Retorna 3 que é o index do valor 4 que é o primeiro elemento que satisfaz a condição.

filter => retorna todos os elementos que satisfazem a condição

ex:const arr = [1, 2, 3, 4];

const arrGreater = arr.filter(value => value > 1);

console.log(arrGreater); //retorna [ 2, 3, 4 ]

indexOf => retorna o primeiro indice em que um elemento pode ser encontrado no array

ex: const arr = [1, 3, 3, 4, 3];

const arrIndex = arr.indexOf(3); //procura a primeira ocorrencia do valor 3 no array e retorna esse indice

console.log(arrIndex); //retorna 1 pois é o primeiro indice que possui 3.

lastIndexOf => funciona como o indexOf porém retorna o ultimo indice em que um elemento pode ser 
encontrado no array

ex: const arr = [1, 3, 3, 4, 3];

const arrIndexOf = arr.lastIndexOf(3);

console.log(arrIndexOf); //retorna 4 pois é o indice com a ultima ocorrencia do elemento 3

includes => retorna um booleano verificando se determinado elemento existe no array.

ex: const arr = [1, 3, 3, 4, 3];

const hasOne = arr.includes(1);
const hasTwo = arr.includes(2);

console.log(hasOne); //retorna True pois tem o 1 no array
console.log(hasTwo); //retorna False pois não tem 2 no array

some => retorna um booleano verificando se pelo menos um dos item do array satisfaz a condição

ex: const arr = [1, 3, 3, 4, 3];

const temPar = arr.some(value => value % 2 === 0);
//retorna True pois pelo menos o numero 4 é par

console.log(temPar);

every => retorna um booleano verificando se todos os item do array satisfazem a condição

ex: const arr = [1, 3, 3, 4, 3];

const temPar = arr.every(value => value % 2 === 0);
// Retorna False pois há numeros impares tbm

console.log(temPar);

sort => ordena os elementos de um array de acordo com uma condição.

ex: const students = [
    {name: 'damiao', grade: 6},
    {name: 'vitoria', grade: 7},
    {name: 'Rayanne', grade: 9},
    {name: 'Edson', grade: 4}
];

const sortStudents = students.sort((current, next) => current.grade - next.grade); //tbm pode ser feito na ordem inversa e com isso fica do maior para o menor


console.log(sortStudents);
retorna [
  { name: 'Edson', grade: 4 },
  { name: 'damiao', grade: 6 },
  { name: 'vitoria', grade: 7 },
  { name: 'Rayanne', grade: 9 }
] pois colocou pela ordem das notas

reverse => inverte os elementos de um array

ex: const arr = [1, 2, 3, 4, 5];

const inverter = arr.reverse();


console.log(inverter); //retorna [ 5, 4, 3, 2, 1 ]


TRANSFORMAR EM OUTRO TIPO DE DADOS:

join => Junta todos os elementos de um array, separados por um delimitador e retorna uma string

ex: const arr = [1, 2, 3, 4, 5];

const inverter = arr.join(' - ');


console.log(inverter); //retorna a string 1 - 2 - 3 - 4 - 5

reduce => retorna um novo tipo de dado iterando cada posição de um array. 

ex: const arr = [1, 2, 3, 4, 5];

const inverter = arr.reduce((total, value) => total += value, 0); // o 0 é o tipo de dado no caso 
um inteiro de valor 0, se fosse uma String o valor seria ''
// o primeiro argumento, no caso total, é o que vai ser retornado. 
//o segundo argumento é o que vai ser iterado, value, index ou array
// total += value => vai pegar cada valor e somar ao total


console.log(inverter); //Retorna 15




*/

const frutas = ["amora", "laranja", "melancia", "acerola"];




