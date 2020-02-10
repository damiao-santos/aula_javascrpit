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

        res.restore();

        expect(res.load.args[0][0]).to.equal('index')
    });
});
