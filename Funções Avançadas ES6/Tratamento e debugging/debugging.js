/*
console.warn(); - a mensagem do console aparece com um faixa amarela e o simbolo de exclamação pois é um aviso(warning)
console.error(); - a mensagem aparece em vermelho com o X de error

console.trace(); - diz onde o item especificado foi executado

console.group();
console.log('....');
console.log('....');
console.groupEnd(); - o console.group e groupEnd formam um bloco onde dentro deles especificamos alguns logs e eles o alinham como um grupo

console.time('log time');
setTimeout(() => {
    console.timeEnd('log Time');
}, 2000); - ele é muito utilizado para acompanhar o tempo de execução de uma função

console.table() - formata os objetos e arrays em formato de tabela

console.assert(1 === '1', 'ops') - vai esperar que a condição seja verdadeira e se ela nao for retorna o erro especificado após a condição ex:Assertion failed: ops

o console.log também permite que ele seja estilizado



*/

console.log('%c styled log', 'color: blue; font-size: 30px')
