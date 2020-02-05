/*
Nativamente no javascript era muito comum utilizar funções de callback para executar algo após uma determinada tarefa sincrona ter sido executada

como exemplo digamos que temos duas funções que executam duas coisas, porém queremos que elas nos retorne o dado de forma sequencial

ex:  function doSomething(callback) {
    setTimeout(function(){
        callback('First data');
    }, 1000);
};

function doOtherThing(callback) {
    setTimeout(function(){
        callback('Second data');
    }, 1000);
};

function doAll(){
    doSomething(function(data){
        let processData = data.split('');

        doOtherThing(function(data2) {
            let processData2 = data2.split('');

            setTimeout(function() {
                console.log(processData, processData2)
            }, 1000);
        });
    });
};

doAll();

//retorna [
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
] [
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]

agora se quisermos ver erros de cada etapa: 
function doAll(){
    try{
    doSomething(function(data){
        let processData = data.split('');
        
        try{
        doOtherThing(function(data2) {
            let processData2 = data2.split('');

            try{
            setTimeout(function() {
                console.log(processData, processData2)
            }, 1000);
            }catch (err){
                //handle error
            }
        });
    }catch (err) {
        //handle error
    }
    });
} catch(err){
    //handle error
}
};

doAll();

So que esse cenario nos leva ao que chamava de callback hell, no qual ficava um codigo muito grande e de dificil entendimento

Porem poderia ser feito de uma forma mais estruturada através das Promises, para fazer uma Promise no ES6 é preciso simplesmente invocar o construtor de uma promise passando pra ela
uma função recebendo como argumento resolve e reject, e para realizar o que tem que ser feito primeiro chamamos o resolved, caso de erro utilizamos o rejected

exemplo de sintaxe: const myPromise = new Promise((resolve, reject) => {

});

Uma Promise pode ter 3 status: Pending(pendente ou em em execução), Fulfilled(quando terminou de executar), Rejected(caso aconteça erro)

const doSomethingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

console.log(doSomethingPromise) //retorna Promise { <pending> } pois ela so executaria após 1 segundo


Para executar o console.log da maneira corretar, temos que pegar a promise e adicionar um metodo .then(doSomethingPromise.then) com uma arrow function para receber o dado

ex: const doSomethingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data)); //retorna First data

E caso aconteça um erro:

const doSomethingPromise = new Promise((resolve, reject) => {
throw new Error('deu xablau maluco');
    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data)); //retorna(node:7036) UnhandledPromiseRejectionWarning: Error: deu xablau maluco

Para tratar esse erro, adicionamos um .catch logo após o then

const doSomethingPromise = new Promise((resolve, reject) => {
throw new Error('deu xablau maluco');
    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error)); //retorna Error: deu xablau maluco


E se Quiséssemos pegar esses dados e invocar uma nova promises? As promises permitem que vc encadeie uma na outra, então caso encadeie uma promise em um .then, podemos colocar outro
.then na nova promise

ex: const doSomethingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise.then(data => doOtherThingPromise).then(data2 => console.log(data2)) //retorna Second data


Caso queiramos retorna os dois resultados sequencialmente podemos fazer:

const doSomethingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise
    .then(data =>{
        console.log(data); 
        return doOtherThingPromise
        })
        .then(data2 => console.log(data2)); 
//retorna First data Second data

Podemos também também fazer funções que geram promises e assim elas vão ser executadas no tempo esperado 

ex: const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data =>{
        console.log(data); 
        return doOtherThingPromise()
        })
        .then(data2 => console.log(data2));
// retorna First data Second data 1 seg após o outro como deveria


ao adicionar o .catch ao final do encadeamento, qualquer erro dentro de qualquer uma das promises será tratado pelo catch.

exconst doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
throw new Error('new error');
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data =>{
        console.log(data); 
        return doOtherThingPromise()
        })
        .then(data2 => console.log(data2))
        .catch(error => console.log('ops', error));
// retorna First data, mas na execução da segunda retorna o erro


Com isso consegue deixar todo o tratamento de erro gigantesco que tinhamos no callback, mais enxuto e com melhor legibilidade, assim todo aquele callback anterior fica reduzido a:

const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise()
    .then(data =>{
        console.log(data.split('')); 
        return doOtherThingPromise()
        })
        .then(data2 => console.log(data2.split('')));
//

para executar as promisses em paralelo utilizamos o metodo Promise.all() utilizando as duas promises em forma de array e utilizando o .then para armazena os dados da execução

const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => console.log(data)); //retornar [ 'First data', 'Second data' ]


Para ter o mesmo comportamento da anterior retornando cada letra em separado podemos fazer:

const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split('')); 
    console.log(data[1].split(''));
});

No promise all se tiver um .catch e houver um erro em qualquer uma das funções ele cancela a execução das duas e retorna so o erro

Uma outra de forma de resolver varias promises porém a que resolver primeiro será executada é com promises.race

ex: const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data); //retorna Second data

});



19:40
*/

const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data); 

});













