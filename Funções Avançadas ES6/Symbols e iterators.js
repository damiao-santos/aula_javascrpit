/*

//
                                                            Symbols
//

Antes da introdrução dos Symbols do ES6 existiam 6 tipos, com a introdução dos Symbols ele trouxe algumas novas funcionalidades ao javascript.

Symbols são maneiras de gerar um identificador único e a forma de gerar esse identificador é invocando um symbol

ex: const uniqueId = Symbol(); //Symbol não pode ser usado invocado com new, nem outras coisas, apenas como semelhante a uma função

Um Symbol nunca é igual ao outro, o valor do symbol não é uma string não é um number, nem outro data type, ele é simplesmente um identificador, e pode ser usado para adicionar
metapropriedades aos objetos. Um valor pode ser dado ao Symbol, mas esse valor é usado apenas para questão de Debug, mas nao ta ligado ao seu valor de fato

ex: const uniqueId = Symbol('Hello');

Mesmo que um Symbol tenha o mesmo valor que outro ele nunca é o mesmo

ex: const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2) //Retorna Falso

Um symbol pdoe ser usado para gerar uma propriedade "privada"(não que sejam inacessiveis), mas é uma forma de dizer para um programador evitar que ela seja acessada de forma que não
seja intencionalmente.
Utilizando propriedades ja computados o uniqueId pode ser usado como propriedade de um objeto

ex:const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj); //retorna { [Symbol(Hello)]: 'Hello' }

Isso gera a propriedade Hello e que so pode ser acessivel pra que mtiver esse Symbol ou por um metodo, pois ao utilizar o Object.keys() ele não mostra a propriedade do objeto, o que
poderia ser classificada como "privada"

ex: const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(Object.keys(obj));// retorna []

Ja ao utilizar o metodo Object.getOwnPropertySymbols() temos:

ex:const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(Object.getOwnPropertySymbols(obj)); //retorna [ Symbol(Hello) ]

Antes do Es6 a forma de dizer que uma propriedade não deveria ser mexida era colocar underline ou duplo underline na frente da propriedade: _id ou __id 

Symbols tem uma serie de propriedades chamadas Well-Known Symbols tais como:

Symbols.iterator
Symbols.split
Symbols.toStringTag

todos esses tipos podem ser usados para adicionar propriedade e metapropriedades ao objeto, é feito com o nome de Symbol pois evita a colisão de propriedades

um iterador é uma interface onde basicamente se consome uma lista passo a passo

ex: const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//retorna { value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }


Cada vez que o next é invocado ele traz o valor do array da iteração e a propriedade Done, que indica se o array acabou ou não. A quantidade de console.log, pode ser diminuida utili-
-zando um loop while.

ex const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

while(true){
    let {value, done} = it.next();

    if(done){
        break;
    }
    console.log(value); //retorna 1, 2, 3, 4
};

Mas com o ES6 surgiu uma forma ainda mais simples,no qual não precismaos criar uma variavel para o iterador, é utilizando o "for (of)".

ex: const arr = [1, 2, 3, 4];

for (let value of arr) {
    console.log(value);
}

//retorna 1, 2, 3, 4


ele tbm funciona com strings:

ex: const str = 'damiao'

for (let value of str) {
    console.log(value);
}

Por causa do Symbol.iterator, também é possivel utilizar o spread operator, podendo utilizar o spread em uma string ou array, para criar um novo array

ex: const arr = [1, 2, 3, 4];
const str = 'damiao';

const arr2 = [...str, ...arr];
console.log(arr2); // retorna [
  'd', 'a', 'm', 'i', 'a',
  'o', 1,   2,   3,   4
]

Porém não era possivel utilizar em objetos, e no ES6 com o advento do Well Known Symbols, agr é possivel adicionar esta propriedade aos obejtos.
Para isso devemos construir uma função iteradora em um objeto como a vista abaixo:

const arr = [1, 2, 3, 4];
const obj = {
    values: [...arr],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());

E podemos ate mesmo iterar com o for (of):

const arr = [1, 2, 3, 4];
const obj = {
    values: [...arr],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

for (let value of obj){
    console.log(value);
}

e podemos tbm utilizar o spread operator para criar um array com o objeto

const arr = [1, 2, 3, 4];
const obj = {
    values: [...arr],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

const arr2 = [...obj];
console.log(arr2); //retorna [ 1, 2, 3, 4 ]


//
                                                                GENERATORS
//

Generators são funções com pausa que podem pausar e despausar para retornar valores atraves da interface de iteração, generators são identificados através de um * na frente de
function e com a palavra reservada yield como no exemplo a seguir:

ex: function* hello(){
    console.log('hello');
    yield;
    console.log('from');
    yield;
    console.log('function!');

};
const it = hello()
console.log(it.next()); //retorna hello
{ value: undefined, done: false }

console.log(it.next());// retorna from
{ value: undefined, done: false }

console.log(it.next());//retornar function!
{ value: undefined, done: true }

o value vem sempre como undefined, se quiser passar um value pra cada iteração, basta passar o valor no yield e ele funciona como nos iterators anteriores.

ex: function* hello(){
    console.log('hello');
    yield 1;
    console.log('from');
    yield 2;
    console.log('function!');

};
const it = hello()
console.log(it.next());
console.log(it.next());
console.log(it.next());

//retorna hello
{ value: 1, done: false }
from
{ value: 2, done: false }
function!
{ value: undefined, done: true }

Tambem podemos passar um valor de fora para o generators, e para passar o valor ele deve ser retornado no yield como no exemplo

ex: function* hello(){
    console.log('hello');
    yield 1;
    console.log('from');
    const value = yield 2;
    console.log(value);

};
const it = hello()
console.log(it.next());
console.log(it.next());
console.log(it.next('hell!!!!'));

//retorna hello
{ value: 1, done: false }
from
{ value: 2, done: false }
hell!!!!
{ value: undefined, done: true }

Com isso alem de pausar a função, pode-se mandar dados para que ela execute de forma diferente

Um generator também pode ser usado para criar um range de numeros como por exemplo numeros naturais

ex: function* natural(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}
const it = natural()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//retorna { value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }


Apesar de ser um loop infinito, podemos controlar atraves do generators pausando e despausando a função

Com o Generators é possivel gerar e construir a interface de iteração dos obejtos iteraveis, veja o exemplo que usado nas demonstrações anteriores:

const arr = [1, 2, 3, 4];
const obj = {
    values: [...arr],
    *[Symbol.iterator](){
        for(let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
    for (let value of obj) {
        console.log(value);
    }

com isso conseguimos construir uma iteração sem precisar de next e de forma mais simples e rapida.

Então com a o Generator alem de criar uma função com pausa, podemos usar pra criar o meta dado que transforma o objeto em iteravel

*/
const arr = [1, 2, 3, 4];
const obj = {
    values: [...arr],
    *[Symbol.iterator](){
        for(let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}
    for (let value of obj) {
        console.log(value);
    }