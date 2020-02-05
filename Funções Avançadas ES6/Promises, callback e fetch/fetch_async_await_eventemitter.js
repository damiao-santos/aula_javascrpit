/*
Tradicionalmente para fazer requisições, seja consumir um xml ou um json de apis, arquivos e etc. era utilizada uma api do browser chamada xmlhttprequest, e para lidar com isso acabariamos
emtrando no quesito dos callbacks e que nos levaria um callback hell pensando nisso foi introduzida uma nova API chamada Fetch.


                                                                            FETCH
//
Fetch tem o mesmo intuito do XMLhttprequest que é de fazer requisições mas ela trabalha d uma maneira diferente utilizando Promises

para exemplificar, digamos que queiramos fazer uma chamada para um local host

ex: fetch('/Funções Avançadas ES6/Promises, callback e fetch/data.json').then(responseStream => {
    console.log(responseStream);
});

Para conseguir transformar os dados desse String temos que processa-lo e ai assim vamos obeter seu valor de fato

fetch('/Funções Avançadas ES6/Promises, callback e fetch/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    });
}); //retorna o array [1, 2, 3] contido no arquivo json

Podemos também encadear os then para tornar mais legivel

    fetch('/Funções Avançadas ES6/Promises, callback e fetch/data.json').then(responseStream => 
        responseStream.json()).then(data => {console.log(data)});
//
Algo importante é que somente se ouver um erro de rede é que o erro será pego num catch, foi adicionada uma porta errada para simular o erro

fetch('http://localhost:5501/Funções Avançadas ES6/Promises, callback e fetch/data.json').then(responseStream => 
    responseStream.json()).then(data => {console.log(data)}).catch(err => { console.log('Error: ', err)});
//retorna     Error:  TypeError: Failed to fetch

Então o Fetch so apresentará o erro no catch se for um erro de rede, qualquer outro não irá ser pego por ele

Para pegar um erro que não seja de Rede, temos que fazer o seguinte

fetch('/Funções Avançadas ES6/Promises, callback e fetch/datia.json')
.then(responseStream => {
    if (responseStream.status === 200){
        return responseStream.json();
}else{
    throw new Error('Request Error');
}
})
    .then(data => {console.log(data)})
    .catch(err => { console.log('Error: ', err)
}); //Retorna Error:  Error: Request Error

pois como o nome estava errado ele retorno o erro 404 e foi direto para o Else e deu erro

O fetch se torna muito bom pela sua simplicidade e por seu retorno ser uma Promise, caso queiramos fazer algo diferente de um get, o fetch permite um segundo parametro como um 
objeto, onde poderiamos mandar method, headers, body entre outros

ex:fetch('/Funções Avançadas ES6/Promises, callback e fetch/data.json', {
method: 'post',
headers: 'show'
})
.then(responseStream => {
    if (responseStream.status === 200){
        return responseStream.json();
}else{
    throw new Error('Request Error');
}
})
    .then(data => {console.log(data)})
    .catch(err => { console.log('Error: ', err)
});

                                                                    Async e Await
//

Foram implementados a partir do ES7, eles são uma forma de criar Promises de uma maneira mais simples e lhe dar com Promises dentro de Promises de uma maneira simples e enxuta
foram inspirados em outras linguagens de programação como o c# que tem metodos de comportamento parecido 

Para utilizar o Async basta coloca-la antes de uma arrow function ou uma function padrão e o async define que sua função é assincrona e toda função assincrona retorna uma promise resolvida

ex const simpleFunc = async () =>{
    return 12345
};

console.log(simpleFunc()); //retorna Promise {<resolved>: 12345}

Para retornar somente o dado sem indicar que é uma promise, basta somente executar um then como numa promise padrão

ex: const simpleFunc = async () =>{
    return 12345
};

simpleFunc().then(data => {console.log(data)}); //retorna 12345

Podemos tambem tratar erros de forma padrão

const simpleFunc = async () =>{
    throw new Error('vish')
    return 12345
};

simpleFunc().then(data => {console.log(data)}).catch(err => console.log(err)); //retorna Error: vish

So que o async nunca é utilizada sozinha, ela vem em par juntamente com o await e o await espera que outras promises sejam resolvidas, então sempre que eu tiver uma promise e eu quiser
aguardar que ela seja resolvida, podemos utilizar o await

ex:const timer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 1000);
});

const simpleFunc = async () =>{
    const data = await timer();
    console.log(data);
    return 12345
};

simpleFunc()
.then(data => {console.log(data)})
.catch(err => console.log(err));
//retorna 123456 - com delay de 1sec, porém as duas aparecem ao mesmo tempo
12345

então basicamente o awai faz duas funções assincronas executarem de maneira sequencial, para executar de forma paralela basta colocar um promise.all junto do await

ex: const timer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123456);
    }, 1000);
});

const simpleFunc = async () =>{
    const data = await Promise.all([timer(), fetch('/Funções Avançadas ES6/Promises, callback e fetch/data.json').then(responseStream => 
        responseStream.json()
    )]);
   
    return data;
};

simpleFunc()
.then(data => {console.log(data)})
.catch(err => console.log(err));

                                                        EVENT EMITTER
//

Tudo que foi mostrado ate o momento de promises pode ser utilizado dentro do node.js, mas se quisermos deixar mais estruturado dentro node e utilizar um pattern de eventos e assim por
diante utilizamos o Event Emitter.

O Event Emitter é algo exclusivo do node, para utilizar o event emitter primeiro temos que importar o seu modulo, a classe event emitter é disponibilizada através do modulo events

ex: const EventEmitter = require('events');

Para utilizar essa classe basta instancia-la ou inscreve-la

ex: const emitter = new EventEmitter();

a partir desse ponto com instancia criada, pode subescrever a um evento especifico e também pode emitir eventos

ex: const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User Logged', data => {console.log(data)});

emitter.emit('User Logged', {user: 'Damião Tenorio'});

*/


const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User Logged', data => {console.log(data)});

emitter.emit('User Logged', {user: 'Damião Tenorio'});