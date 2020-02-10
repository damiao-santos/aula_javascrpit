/*
Para iniciar o mocha utilizamos npm init -y para criar um arquivo package.json

em seguida npm i --save-dev mocha para iniciar o modo de desenvolvimento

emacs package.json acessa o arquivo package, ou basta acessar por um editor de texto

o mkdir assim como no git, cria a pasta de repositorio

O mocha por padrão vai buscar por aquivos que estejam na raiz do projeto na pasta test

por isso ao usar o mkdir sempre criamos com o mkdir test

para navegar para a pasta test utilizamos cd test assim como no git e para criar um arquivo também utilizamos o comando touch, porém esse comando não vem ativado como padrão no node
então instala-lo utilizamos a linha de comando npm install touch-cli -g

ao criar o arquivo colocamos uma identificação com seu nome e a palavra spec ex: math.spec.js

O mocha tem um padrão para vc descrever o seu teste que é com a palavra describe e seu primeiro argumento é a descrição do que você esta testando e no segundo uma função que irá
realizar o teste, dentro do describe pode se utilizar uma função it para especificar o funcionamento esperado da classe, para testar e validar esse comportamento precisamos de uma
função assert que é um modulo nativo do node e é declarada em uma const e importar a classe que iremos testar.

Dentro do It iremos descrever o comportamento esperado, então iremos instanciar a classe Math e descrever o comportamento no assert

ex: const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5, 5), 10);
    });
});

Em um outro js nos criamos a classe que será testada e exportamos ela para o teste como vimos no exemplo anterio na constante Math
nós podemos exportar a classe através do module.export

ex: class Math{
    sum = function sum(){

    }
}

module.exports = Math;


Ao exportar a classe acima e utilizar o comando "npm run test" obtemos a seguinte resposta 

ex:  Math class
    1) Sum two numbers


  0 passing (55ms)
  1 failing

  1) Math class
       Sum two numbers:
     AssertionError [ERR_ASSERTION]: undefined == 10
      at Context.<anonymous> (test\math.spec.js:8:16)
      at processImmediate (internal/timers.js:439:21)
;

Ela indica que o teste foi avaliado e não passou pois o resultado undefined não é igual a 10

Podemos incluir um try catch para conseguir logar o erro

ex const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(){
        const math = new Math();

        try{
        assert.equal(math.sum(5, 5), 10);
        }catch(err){
            console.log(err);
        }
    });
});

ao executar o run test obtemos:

> aula_javascrpit@1.0.0 test C:\projetos\aula_javascrpit
> mocha



  Math class
AssertionError [ERR_ASSERTION]: undefined == 10
    at Context.<anonymous> (C:\projetos\aula_javascrpit\test\math.spec.js:9:16)
    at callFn (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runnable.js:395:21)
    at Test.Runnable.run (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runnable.js:382:7)
    at Runner.runTest (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:541:10)
    at C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:667:12
    at next (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:450:14)
    at C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:460:7
    at next (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:362:14)
    at Immediate._onImmediate (C:\projetos\aula_javascrpit\node_modules\mocha\lib\runner.js:428:5)
    at processImmediate (internal/timers.js:439:21) {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: undefined,
  expected: 10,
  operator: '=='
}
    √ Sum two numbers


  1 passing (16ms)
;

Vemos que o erro foi pego, e o teste passou, pois o erro esta sendo tratado no try - catch, mas podemos observar o erro de asserção capturado pelo try catch
Então basicamente o Assert serve para que possamos descrever o comportamento para o mocha e ele teste e dispare o erro, para que não tenhamos que fazer de forma manual

Então agora que temos o teste, temos que fazer o codigo passar no teste, para isso modificamos o codigo e ele fica

ex: class Math{
    sum = function sum(a, b){
        return a + b;
    }
}

module.exports = Math;

e agora o npm run test nos retorna:

  Math class
    √ Sum two numbers


  1 passing (10ms)
;

Vemos aqui que o teste passou, mas o TDD não é apenas isso, temos a refatoração do codigo para garantir que ele possa ficar melhor e com isso o codigo fica:

class Math{
    sum(a, b){
        return a + b;
    }
}

module.exports = Math;

e vemos que o codigo também continua passando e com um tempo de resposta mais rapido

  Math class
    √ Sum two numbers


  1 passing (8ms)
;
e se ele fosse assincrono e com um terceiro argumento que é um callback? vamos modificar noss teste e nosso codigo para esta funcionalidade, o teste ficaria:

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(){
        const math = new Math();


        math.sum(5, 5, value => {assert.equal(value, 10)});
        
    });
});

e o codigo:

class Math{
    sum(a, b, callback){
        setTimeout(() => {
            callback(a + b)
        }, 5);
}
}

module.exports = Math;

e o resultado do teste

  Math class
    √ Sum two numbers


  1 passing (15ms)
;

Mas como fazemos a validação do codigo assincrono com o mocha? Para essa validação o mocha permite um parametro dentro do it que é o done e uma vez adicionado o done ele vai aguarda 
ele ser chamado e irá finalizar o teste

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(done){
        const math = new Math();


        math.sum(5, 5, value => {assert.equal(value, 10)});
        done();
    });
});

caso no setTimeout colacassemos 2000 com o done ele aguardaria 5 seg para o teste ser finalizado e como isso ele irá aguardar seja uma promise, um async await ou um callback.
porém o Mocha ele tem um timeout maximo de 2000 ms, caso coloque um valor acima disso ele retorna um erro.
O mocha não recomenda o uso de arrow function nos testes, então é ideal utilizarmos o function, pois caso precisemos utilizar um this em uma arrow function ela irá referenciar ao
describe não ao metodo it e tenhamos melhor controle de escopo

O interessante do Mocha é que podemos declarar outros testes com o IT, sem precisar colocar a função, para que possamos escrever depois da seguitne forma: 

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(done){
        const math = new Math();


        math.sum(5, 5, value => {assert.equal(value, 10)});
        done();
    });

    it('Mutiply two numbers');
});

e com isso obtemos o seguinte: 

Math class
    √ Sum two numbers
    - Mutiply two numbers


  1 passing (12ms)
  1 pending
//
Como podemos ver o teste que esta com sua function especificada passa normalmente, e o segundo teste sem parametros fica como pendente e não como falho

Um outra funcionalidade é metodo .only(), que so executa aquele teste especificado com o metodo como a seguir:

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');

describe('Math class', function() {
    it('Sum two numbers', function(done){
        const math = new Math();


        math.sum(5, 5, value => {assert.equal(value, 10)});
        done();
    });

    it.only('Mutiply two numbers', function(){
        const math = new Math();


        assert.equal(math.multiply(5, 5), 25);
    });
});

com o isso o resultado do teste é :

Math class
    1) Mutiply two numbers


  0 passing (54ms)
  1 failing

  1) Math class
      Mutiply two numbers:
    TypeError: math.multiply is not a function
//

so um teste foi executado e somente ele esta falhando

Temos tbm o metodo .skip(), que pula o teste especificado com ele e da um status de pendente

describe('Math class', function() {
    it('Sum two numbers', function(done){
        const math = new Math();


        math.sum(5, 5, value => {assert.equal(value, 10)});
        done();
    });

    it.skip('Mutiply two numbers', function(){
        const math = new Math();


        assert.equal(math.multiply(5, 5), 25);
    });
});

e ele retorna

  Math class
    √ Sum two numbers
    - Mutiply two numbers


  1 passing (11ms)
  1 pending
//

Existem outras funcionalidades que o mocha disponibiliza para o usuário que são os Hooks, mas o que são os hooks? São formas de executar o codigo e evitar repetição, por exemplo:

Se tivessemos algum valor dinâmico que quissesemos alterar:

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');
let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    }); // aqui estamos garantindo que antes de cada it executar a variavel tenha o valor 0

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);

        value = 5 //aqui estamos dizendo que ela vai valer 5
        math.sum(value, 5, value => {assert.equal(value, 10)});
        done();
    });

    it('Mutiply two numbers', function(){
        const math = new Math();


        assert.equal(math.multiply(value, 5), 0); //aqui utilizamos ela porem como não redefinimos seu valor dentro do escopo, ela deverá manter o valor do beforeEach
    });
});

com isso o resultado do teste é:

Math class
    √ Sum two numbers
    √ Mutiply two numbers


  2 passing (30ms)
//

Pois o valor no primeiro it foi redefinido para 5, mas como ela executa o o beforeEach antes de cada it o segundo manteve o valor de 0 e 5 *0 é igual 0, passando assim nos testes

aqui é um explicação de todos os hooks

describe('hooks', function() {
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});



*/
