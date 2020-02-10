/*
e se melhoressemos nossa classe como no exemplo abaixo

class Math{
    sum(a, b, callback){
        setTimeout(() => {
            callback(a + b)
        }, 2000);
}
    multiply(a, b){
        const result = a * b;

        return result;
    }
    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;

Como se garantiria que e o resultado de printSum seria carregado? até é possivel fazer isso com mocha e chai, mas existe uma ferramenta igualmente poderosa que é o Sinon

então como as outras para adiciona-la como uma dependencia de desenvolvimento utilizamos

npm i --save-dev sinon

e para importa-la utilizamos o mesmo metodo que as outras declarando como uma constante

const sinon = require('sinon');

utilizando o sinon podemos mochar funções e ver se elas foram invocadas como no exemplo a seguir

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math(); //instanciamento da classe
        this.timeout(3000);

        value = 5 
        math.sum(value, 5, value => {
        expect(value).to.equal(10);
        done();
    });
        
    });

    it('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };
        const obj2 = {
            name: 'Damião Tenorio'
        };

        expect(obj).to.deep.equal(obj2);
    });

    it('call res with sum and index', function() {
        const req = {}; //fica so como objeto pois não esta sendo 'utilizado'
        const res = {
            load: sinon.spy() //metodo spy do sinon
        };
        const math = new Math();

        math.printSum(req, res, 5, 5)

        expect(res.load.calledOnce).to.be.true;
    })
});

Podemos também verificar a index do metodo

 it.only('call res with sum and index', function() {
        const req = {}; //fica so como objeto pois não esta sendo 'utilizado'
        const res = {
            load: sinon.spy() //metodo spy do sinon
        };
        const math = new Math();

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][0]).to.equal('index')
    })
});

retorna  Math class
    √ call res with sum and index


1 passing (48ms)

com o Sinon podemos espionar as funções e saber se foram chamadas, como foram chamadas, as vezes que foram chamadas.

pode se usar o spy até em funções construidas, como no exemplo:

    it.only('call res with sum and index', function() {
        const req = {}; //fica so como objeto pois não esta sendo 'utilizado'
        const res = {
            load: function load(){
                console.log('Called!!!')
            } //metodo spy do sinon
        };

        sinon.spy(res, 'load');
        const math = new Math();

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][0]).to.equal('index')
});


o teste retorna:

Math class
Called!!!
    √ call res with sum and index


1 passing (21ms)

Há também um metodo do Sinon chamado de .stub() que você consegue substituir metodos e colocar um return customizado.

ex:
it.only('call res with sum and index', function() {
        const req = {}; //fica so como objeto pois não esta sendo 'utilizado'
        const res = {
            load: function load(){
                console.log('Called!!!')
            } //metodo spy do sinon
        };

        sinon.stub(res, 'load').returns('cool dude!');
        const math = new Math();

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][0]).to.equal('index')
});

mas para esse metodo aparecer no log temos que tbm fazer o console.log da printSum

class Math{
    sum(a, b, callback){
        setTimeout(() => {
            callback(a + b)
        }, 2000);
}
    multiply(a, b){
        const result = a * b;

        return result;
    }
    printSum(req, res, a, b) {
        console.log(res.load('index', a + b));
    }
}

module.exports = Math;

e com isso ele retorna

 Math class
cool dude!
    √ call res with sum and index


1 passing (39ms)

e com isso também poderiamos apr













*/