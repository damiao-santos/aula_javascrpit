/*

O mocha por si só, não provê uma ferramenta de assert ele utiliza o assert que é um modo built-in do node, so que ele é limitado, porque na hora de comparar objetos e propriedades
além da forma como ele é escrito ele não é tão descritivo quanto poderia ser, para melhorar isso podemos utilizar uma lib chamada Chai.

Para instalar o chai basta executar o comando npm i --save-dev chai

O chai é uma ferramenta de Assert e ela vai fazer o que o Assert do node faz só que de uma maneira muito mais descritiva

para importar o chai expect utilizamos const expect = require('chai').expect;

Feito isso, substituimos o metodo assert do primeiro it e fica da seguinte forma:

const assert = require('assert');
const Math = require('c:/projetos/aula_javascrpit/test/Math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {
    //hooks
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);

        value = 5 
        math.sum(value, 5, value => {
        expect(value).to.equal(10);
        done();
    });
        
    });

    it('Mutiply two numbers', function(){
        const math = new Math();


        expect(math.multiply(value, 5)).to.equal(0);
    });
});

e os testes continuam passando normalmente.

Com o chai podemos testar objetos como no exemplo abaixo:

it('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };


        expect(math.multiply(value, 5)).to.equal(0);
        expect(obj).to.have.property('name');
    });
});

pode se verificar o valor da propriedade também:

    it('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };


        expect(math.multiply(value, 5)).to.equal(0);
        expect(obj)
        .to.have.property('name')
        .equal('Damião Tenorio');
    });
});

Podemos também comparar objetos com objetos, porém temos que nos atentar que o to.equal vai comparar a referencia do objeto e não os valores então por mais que sejam iguais
como no exemplo abaixo:

    it.only('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };
        const obj2 = {
            name: 'Damião Tenorio'
        };

        expect(obj).to.equal(obj2);
    });

ele retorna o seguinte erro:

  Mutiply two numbers:

      AssertionError: expected { name: 'Damião Tenorio' } to equal { name: 'Damião Tenorio' }
      + expected - actual
//

então como ele compara referências, deveria ser:

 it.only('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };
        const obj2 = obj;

        expect(obj).to.equal(obj2);
});

Assim o teste passa, porém não é o tipo de comportamento que queremos, para comparar os valores utilizamos o to.deep.equal

it.only('Mutiply two numbers', function(){
        const math = new Math();
        const obj = {
            name: 'Damião Tenorio'
        };
        const obj2 = {
            name: 'Damião Tenorio'
        };

        expect(obj).to.deep.equal(obj2);
});

assim o teste passa da maneira que precisamos

com isso percebemos que o chai é muita mais descritivo e permite trabalhar com diversos tipos, como objetos entre outros e ele funciona muito bem com mocha


*/