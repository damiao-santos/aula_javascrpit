/*
                                        INTRODUÇÃO A ORIENTAÇÃO A OBJETOS

OBJETIVOS - Herança, Classes, Modificadores de Acesso, Encapsulamento e Static

HERANÇA: No javascript a herança é baseada em prototipos e veremos em muitos lugares a variavel prototype

prototype - é a variavel que armazena as definições do objeto), toda vez que que criamos uma variavel no javascript ela tem
a referencia _proto_ que a ponta para o prototype do tipo que criamos, esse tipo é chamado de constructor, então baseado
em um constructor é criado um prototype e nessa variavel é a armazena sua referência pelo _proto_, tudo isso é feito por
baixo dos panos no JS

'use strict';
const myText = String('Hello Prototype'); //esta usando a função construtora String que carrega um prototype(função construtora tem um prototype atrelado a ela)

myText.split(''); //de onde vem esse split?
//essa declaração é a mesma que a a seguir
console.log(myText.__proto__.split === String.prototype.split); // f split() {(native code)}
console.log(myText.constructor === String)

//__proto__ -> prototype -> constructor //o proto aponta pra um prototype e esse proptotype é criado a partir de um constructor
//console.log(String.prototype)
//basicamente isso quer dizer que mytext.constructor é uma String e o seu __proto__ é igual ao String.prototype

//e em uma função? quem é o constructor dela?
'use strict';

function animal(){}

console.log(animal.constructor); //f function(){(code)}
//no caso o constructor da função é um function, isso porque o constructor dela aponta para o function que é o contrutor de função
//o function aponta para o function.prototype.constructor que aponta para função construtora Object{} que aponta para um
//object.prototype = null, não tem nada por ser uma estrutura padrao do javascript

'use strict';

function Animal(){
    this.qtdepatas = 4
}
const cachorro = new Animal(); //aqui esta criando o atributo dentro da variavel com a quantidade de patas

console.log(cachorro.qtdepatas);

o que acontece quando se pega uma função construtora e a chamamos com o atributo new?
1 - um objeto novo é criado e ele herda o prototype da função construtora, o __proto__ aponta para o prototype da função
2 - A função construtora é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explicito, será respeitado o seu return. Senão sera retornado o objeto criado
no passo 1. o return sobrepoem qualquer valor de argumento que for passado para a variavel

função .call() - permite que se passe um contexto para a função ser executada
ex
'use strict';
function Animal(qtdepatas){
    this.qtdepatas = qtdepatas;
    this.movimentar = function(){}
}
function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function(){
        console.log('au au')
    }
}

const pug = new Cachorro('não');
const pitbull = new Cachorro('sim');
console.log(pug, pitbull)

//uma função construtora permite que vc escreva no prototype(ele contem a definição do objeto)
//nesse modelo, se um novo atributo for adcionado junto ao prototype, não preciso redeclarar a variavel, ele ja é adicionado dentro dela
'use strict';
function Animal(){}
    Animal.prototype.qtdepatas = 0
    Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
}
Cachorro.prototype = Object.create(Animal); //isso fala que ele é derivado do prototype de animal
Cachorro.prototype.latir = function(){
        console.log('au au');
    }


const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
console.log(pug, pitbull);

CLASSES: Foi criado no ES6, para simplificação da herança de prototipos, sempr utilizado com a palavra chave class antes
ex padrão x class

PADRAO

'use strict';
function Animal(qtdepatas){
    this.qtdepatas = qtdepatas;
    this.movimentar = function(){}
}
function Cachorro(morde){
    Animal.call(this, 4);

    this.morde = morde;
    
}
const pug = new Cachorro('não');

console.log(pug);

CLASSE
'use strict'

class Animal{
    constructor(qtdepatas){
        this.qtdepatas = 4;
    }
}
class Cachorro extends Animal{
    constructor(morde){
        super(4); //acessa a classe pai de uma classe
        this.morde = morde;
    }
}
const pug = new Cachorro(false);
console.log(pug)

MODIFICADORES DE ACESSO - os Browsers ainda nãp tem suporte para modificadores de acesso, isso pode ser feito no node, pois
o JS não tem esse modificador.
Modificadores controlam o que é publico e o que privado dentro de uma classe, o # é o modificador de acesso

Ex: Forma atual
'use strict'
function Person(initialName){
    let name = initialName;
    this.getName = function(){
        return name;
    }
    this.setName = function(newName){
        name = newName;
    }   
}
const p = new Person('Damião');

Forma com Modificar

class Person{
    #name = ''; //variavel sendo declarada diretamente na classe

    constructor(initialName){
        this.#name = initialName;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}

ENCAPSULAMENTO - Serve para ocultar detalhes do funcionamento interno

STATIC - Permite Acessar metodos/atributos sem instanciar
ex: 
Sem static e instanciando:
'use strict'
function Person() {}

Person.walk = function() {
    console.log(!walking..');
}
console.log(Person.walk());

Com Static:
'use strict'
class Person {
    static walk(){
        console.log('walking..');
    }
}
console.log(Person.walk());


                                            DESIGN PATTERNS

definição: Design Patterns ou padrões de projeto são soluções generalistas para problemas recorrentes durante o desenvolvimento
de um software. não se trata de um framework ou codigo pronto, mas de uma definição de alto nível de como um problema
comum pode ser solucionado

Livro Pattern Language
- de 1978
- criado por Christopher Alexander, Sara Ishikawa, Murray Silvestein
- tem mapeado 253 tipos de problemas/desafios de projetos

Na pattern language é que foi definito o formato de um pattern
- Nome
- Exemplo de sua utilização
- Contexto aplicado
- Problema que ele resolve
- Solução( forma que ele resolve)

Using Pattern languages for Object-Oriented Programs (palestra)
- em 1987
- por kent beck(responsavel pela criação do extreme program e do TDD) e ward cunningham
- descreveram 5 padrões de projetos

livro-> Design Patterns: Elements of Reusable object-oriented Software
- de 1994
- criado pela Gang of Four(GoF) - Erich Gamma, Richard Helm, Ralph johnson e John Vlissides

Neste livro os patterns são categorizados em 3 tipos
- Criação 
- Estruturais
- Comportamentais

Padrões de criação - São aqueles que abstraem e/ou adiam o processo de criação dos objetos. eles ajudam a tornar um sistema
independente de como seus objetos são criados, compostos e representados. Dentro desse padrão os mais famosos são:
- Abstract Factory
- Builder
- Facthory Method
- Prototype
- Singleton

Padrões Estruturais - Se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.
Dentre os padrões temos:
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Business Delegate
- Flyweight
- Proxy

Padrões Comportamentais - se concentram nos algoritmos e atribuição de responsabilidades entre os objetos. Eles não
descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicações entre os objetos.
Dentre os padrões temos:
- Chain of Responsability
- Command
- Intepreter
- Iterator  
- Mediator
- Observer
- State
- Strategy
- Template Method
- Visitor

Patterns Mais Utilizados:
- Factory - Todas as funções que retornam um objeto, sem a necessidade de chama-los com o new, são considerados funções factory 
Ex:
não Factory:

function FakeUser() {
    this.name: 'Damião';
    this.lastName: 'Tenorio';
}
const user = new FakeUser();

Com Factory:

function FakeUser(){
    return {
        name: 'Damião';
        lastName: 'Tenorio';
    }
}

const user = FakeUser();

Um factory tbm aceitar que um atributo seja passado na função, ele é um dos padrões mais utilizados e mais simples

- Singleton - seu objetivo é criar uma unica instancia de uma função construtora e retorna-la toda vez em que for
necessário utiliza-la. Jquery é padrão muito popular de singleton
Ex:
podem ser em variavel global: mas com o es6 não há mais necessidade de usar escopo global
var SETTINGS = {api: 'http://localhost', trackJsToken: '12345'};

função singleton?

function MyApp(){
    if (!Myapp.instance){
        MyApp.instance - this;
    }
    return MyApp.instance;
}

o singleton uma vez instanciado por mais que uma nova atribuição seja enviada a atribuição anterior não sera mudada

- Decorator - recebe uma outra função como parametro e estende o seu comportamento sem modifica-la explicitamente.
sua proposta ainda esta no stage 2, mas é posivel utiliza-lo no typescript
ex: 
function readOnly(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
}
class job{
    @readOnly
    title (){return 'CEO'};
}

- Observer - É um pattern muito popular em aplicações javascript. A instância(subscriber) mantém uma coleção de objetos
(observers) e notifica todos eles quando ocorrem mudanças no estado. exemplos desse pattern são o Vue e RxJs. Os observers
ficam "escutando" e quando ouver uma alteração eles chamam todos os subscriber
ex:
class Observable{
    constructor(){
        this.observers = []; //mantem uma lista de observers
    }
    subscribe(fn) { //tem que ter uma função subscribe que adicione subscribe nesses observers
        this.observers.push(fn);
    }
    unsubscribe(fn){
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }
    notify(data){ // e tem que ter uma função notify
        this.observers.forEach(observer => observer(data));
    }
}


- Module - Posiibilita organizarmos melhor o nosso codigo, sem a necessidade de expor variaveis globais
Antigamente era criado uma If(função de execução imediata)
ex: (function($){
    //plugin here
})(jQuery);

Com o ES6 foi permitido que declaremos uma classe, função ou objeto, e que exportemos ela e importar o que precisamos
ex:
class Person{
    constructor(name){
        this.name = name;
    }
}
export default Person;

//utilizar person
import Person from './models/person';


*/


