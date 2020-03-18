/*
console.log(name);
const name = 'Damião Tenorio'

console.log('Keep going...')

ao executar o codigo acima é retornado o seguinte erro:

ReferenceError: Cannot access 'name' before initialization

isso porque constantes não tem propriedade de Hoisting então não pode ser feito o log antes da inicialização da variavel, isso também se aplica a variavel declarada com let
e apesar de ter um segundo console.log que é correto o javascrip quando estoura um erro ele trava toda a execução do codigo

a maneira normal de fazer o tratamento do erro é utilizando blocos de try{}catch, com isso conseguimos visualizar o erro a ser tratado e ele não trava a execução do código como no
exemplo a seguir:

try{
console.log(name);
const name = 'Damião Tenorio';
}catch(err){
    console.log(err)
}
console.log('Keep going...');

com isso o retorno é:
ReferenceError: Cannot access 'name' before initialization

Keep going...

vemos que o erro foi capturado pelo try catch para que possamos trata-lo mais a frente e não travou a execução do codigo.

Erros no javascript são classes então podemos dar um throw e gerar nosso erro de forma dinâmica, para isso, basta instanciar o seu erro em uma constante  como no exemplo abaixo

try{
const name = 'Damião Tenorio';

const myError = new Error('Custom Massage')
throw myError;
}catch(err){
    console.log(err)
}finally{
    console.log('Keep Going...')
}

O retorno do codigo é:

Error: Custom Massage
Keep Going...

Outro fato insteressante é que podemos não so passar Strings para a classe de erro, mas também podemos extende-la, para explicar melhor veja o exemplo abaixo com uma classe dinamica

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}


try{
const name = 'Damião Tenorio';

const myError = new CustomError({
    message: 'Custom Massage yo',
    data: {
        type: 'Server Error'
    }
});
throw myError;
}catch(err){
    console.log(err)
    console.log(err.data)
}finally{
    console.log('Keep Going...')
}

e isso retorna

CustomError: Custom Massage yo
{ type: 'Server Error' }
Keep Going...

A partir do momento que estabelecemos o catch, poderiamos também por condições diferentes como if e else entre outros, Lembrando que essa é a maneira classica de tratar erros 
no Javascript




*/
class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}


try{
const name = 'Damião Tenorio';

const myError = new CustomError({
    message: 'Custom Massage yo',
    data: {
        type: 'Server Error'
    }
});
throw myError;
}catch(err){
    console.log(err)
    console.log(err.data)
}finally{
    console.log('Keep Going...')
}

