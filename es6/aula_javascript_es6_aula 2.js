/*Tipos e variaves
O JS possui 6 tipos primitivos de Variveis: Sting, Number, Boolean, Null, Undefined, Symbol(foi adicionado no ES6)
String - para textos devem estar entre "",
Number - para numeros,
Boolean - apenas armazena true ou false,
Null - nulo
Undefined - a variavel existe mas ainda não foi setado seu tipo
Symbol - Permite criar valores unicos.

e 3 tipos não primitivos: Object, Function, Array.

Object - funciona como um dicionario de dados, com propriedades e valores definidos a elas.

Function - também é um objeto e permite que o objeto seja chamado ( call label)

Array - é como um objeto mas ele tem relação com seus itens como posição e o que é atribuido



const text = "texto"

const textSize = text.length; //retorna o tamanho de uma string
console.log("quantidade de letras: " + textSize);

const spplittedText = text.split("x"); // retorna um array quebrando a string por um delimitador
console.log(spplittedText);

// busca um valor e substitui por outro, o primeiro valor é o que vai ser procurado e o segundo a substituição
const replacedText = text.replace("texto", "txeto"); 
console.log(replacedText);

// as 3 a seguir retorna uma fatia de um valor
const lastChar = text.slice(-1);
console.log(lastChar)

const allWithoutLastChar = text.slice(0, -1);
console.log(allWithoutLastChar);

const secondToEnd = text.slice(1);
console.log(secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforefirstPos = text.substr(0, 2);
console.log(twoCharsBeforefirstPos);


const myNumber = 12.4032;

//transformar numero para string
const numberAsString = myNumber.toString();
console.log(typeof numberAsString);

//retorna numero com um numero de casa decimais
const fixedTwoDecimals = myNumber.toFixed(0);
console.log(fixedTwoDecimals);

//Transforma uma string em float
console.log(parseFloat("13.22"));

//Transforma String em inteiro
console.log(parseInt("13.20"))



const nullVar = null;
console.log(typeof nullVar); //tipo null apesar de primitivo quando usamos typeof irá aparecer object


let undefinedVar; //apenas let ou var pondem ser usados para undefined
console.log(undefinedVar)

Object - permite que registremos propriedades e valores dessa propriedade e é declarado com chave {}

let user = {name: "damião", lastName: "Santos", idade: 29};

//alterando a propriedade de um objeto
user.name = "dam";
user["name"] = "miao";

const prop = "name";
user[prop] = "damdam"


//criando uma propriedade
user.middleName = "Carneiro dos"
 

//deletando uma propriedade
delete user.name;
console.log(user);

Funções de Objeto:

const user = {name: "Damião", lastName: "Santos"};

//recupera as chaves do objeto
console.log('Propriedades do objeto user', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de Arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//mergear propriedades de objeto
Object.assign(user, {fullName: 'Damião Santos'});

console.log('\nAdiciona a propriedade fullName ao objeto user:', user);

//esse assign iniciando com a {} indica que é um novo array e não estaremos mexendo no onjeto existente
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user,  {idade: 29}));

//Previne todas as modificações em um objeto
const newObj = {foo: "bar"};
Object.freeze(newObj);

newObj.foo = 'Changes';
delete newObj.foo;

console.log(newObj)

//permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Damião'};
Object.seal(person); // o seal so permite alteração na propriedade existente, não deixa criar uma nova nem dele uma existente

person.name = 'Tenorio dos santos'
delete person.name;
person.age = 29;
console.log(person);

Symbol - conseguimos criar, chamando sua função, um cara(valor) unico, eles são unicos por mais que sejam chamados com o
mesmo valor.

const symbol1 = Symbol();
const symbol2 = Symbol();

//symbols são unicos
console.log('symbol 1 é igual a symbol 2: ', symbol1 === symbol2);

//Previnem conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Damião', 
    [nameSymbol2]: 'Mião', 
    lastName: 'Carneiro dos Santos'
};

console.log(user);

//symbols criam propriedades que não são enumberables

for (const key in user){
    if (user.hasOwnProperty(key)){
        console.log('\nValor da chave ' + key + ': ' + user[key]);
    }
}
console.log('Propriedades do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user))

//acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user', Reflect.ownKeys(user));

//criar um enum
const direction = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};

console.log(direction);

Funções e Operadores

No js padrão tivemos o modelo padrão de função, funções são objetos que permitem serem chamados
ex:
function fn(){
    retunr 'codigo aqui'
}

E com a chegada do Es6 tivemos a introdução de um novo modelo de função: a Arrow Function
ex:
const arrowFn = () => 'code here'; // para expressão unica
ou
const arrowFn2 = () => {
    //para mais de uma expressão
    return 'code here'
}

As arrow function tem return explicito para execução de so uma expressão, ele pode ser omitido que o resultado é o mesmo
Por mais que se execute um typeof e apareça 'function' ela também é um objeto

//funções também são objetos
fn.prop = 'posso criar propriedade'

console.log(fn());
console.log(fn.prop);

//recebe parametros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//recebe e retorna funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
      return fnParam();
    }
}
const handleFnExecution = controlFnExec(fn)

handleFnExecution(true); // executará a função
handleFnExecution();// não executará

//controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }

}

Segundo exemplo:
(() => {
    this.name = 'arrowfunction'; 

    const getNameArrowFn = () => this.name; //o this sempre vai referenciar a este escopo de função

function getName(){ //em função padrão ela vai sempre referenciar pro contexto que ela foi criada
    return this.name;
}

const user = {
    name: 'nome do objeto de execução',
    getNameArrowFn, //quando a chave e o valor do objeto é a mesma pode ser feito dessa forma
    getName
}

console.log(user.getNameArrowFn());/* aqui como referencia uma arrow function, o this vai referenciar a sua primeira atribuição
independente da onde a função é chamada 
//console.log(user.getName()); Na função padrão o this vai referenciar ao objeto em que ela esta sendo executada
sendo assim ele irá se atribuir com o valor do objeto name.
})()

Arrays

const user = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
};

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];
//length - retorna a quantidade de itens de um array
console.log('items:', persons.length);

//isArray - verificar se é array
console.log('Person é array?', Array.isArray(persons));

//forEach - Iterar os itens do array
persons.forEach(person => {
    console.log("Nome: " + person.name);
});

//filter - filtrar um array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nLista de homens:', mens);

//map - retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'intro javascript';
    return person;
});

console.log('\nPessoas com a adição de course:', personsWithCourse);

//reduce - transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('soma das idades é:', totalAge);

//juntando operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age;
                                return age;
                            }, 0);

console.log('\nSoma de idades que são par', totalEvenAges);

Operadores: existem 6 tipos de operadores em javascript: Aritméticos, Atribuição, Comparacação, Condicional, Logicos e
o Spread(introduzido no ES6 - 2018)

Javascript possui tanto operadores unários, binarios quanto ternarios

operador binário - composto por 2 operandos, operando1 operador operando 2
ex: 1 + 1.

operador unário - ele so tem um operando e o operador pode vir antes ou depois do operando
operando operador
operador operando
ex: contador++ ou ++contador (operador de incremento)

OPERADORES ARITIMÉTICOS:

mod(modulo) - retorna um inteiro restante de uma divisão de dois operandos
12 % 5 - retorna 2

Incremento(++) e Decremento(--) - o Incremento adiocina 1 ao operando, e o decremento subtrai 1 do operando

++x
x++

--x
x--

A diferença é que em uma atribuição o ++x ja entra atribuido de +1 na variavel enquanto o x++ entra com seu valor padrão para depois ser atribuido
ex:
const a = ++2; // a irá receber 3
const b = 2++; // b irá receber 2

O mesmo vale para o decremento

Negação(-) e Adição(+)

-3 //negando 3
+"3" //retorna 3(basicamente funciona como parseInt e converte a string para number)
+true //retorna 1
+false //retorna 0
-true //retorna -1

Operador de Exponenciação(**) - basicamente é elevar um numero como na matematica
2 ** 3  //retorna 8
10 ** -1  //retorna 0.1

Operador de agrupamento () - caso eu queria resolver uma operação matematica antes de outra. Ele também agrupa
condionais como if() e etc
ex:
2 * (3 + 2)

OPERADORES DE ATRIBUIÇÃO:

Atribuição - atribui um valor a uma variavel
x = y \\retorna Y

Atribuição de Adição:
x = x + y //ou
x += y //o += é a mesma coisa que x = x + y

Atribuição de subtração:
x = x - y //ou
x -= y

Atribuição de Multiplicação:
x = x * y //ou
x *= y

Atribuição de Divisão:
x = x / y //ou
x /= y

Atribuição de Resto:
x = x % y //ou
x %= y

OPERADORES DE COMPARAÇÃO:

== - igual
=== - estritamente igual
!= - diferente
!== - estritamente diferente
> - maior que
>= - maior ou igual que
< - menor que
<= - menor ou igual que

OPERADORES CONDICIONAIS:

Utiliza operadores ternarios - condição ? valor1 : valor 2, se a condição é verdadeira ele recebe o primeiro valor
se a condição for falsa ele recebe o segundo valor
ex:
true ? foo : bar   //retorna foo
false ? foo : bar   //retorna bar

OPERADORES LOGICOS:

São &&(And), ||(or) e !(NOT)

AND(&&) - os dois valores precisam ser verdadeiros para retornar TRUE

OR(||) - apenas um dos valores precisa ser verdadeiro para retorna TRUE

NOT(!) - Ele apenas nega a condição

True - qualquer string preenchida retorna true
false - string vazia retorna false

OPERADOR SPREAD:

Spread foi incluido no ES6, ele consegue, no caso trabalhando com arrays e objetos, iterar cada item desse array ou objeto
e passar por parametro, ele é muito usado para concatenar arrays
ex:
let partes = ['ombro', 'joelhos'];
let musica = ['cabeça', ...partes, 'e', 'pé'];

function fn(x, y, z){ }
let args = [0, 1, 2];
fn(...args);

//deletar algo
delete algumacoisa;

//determinar algo ou ver seu tipo
typeof algumavariavel;

ESTRUTURAS CONDICIONAIS E REPETIÇÃO:

if, else e else if: Em portugues significa basicamente se, senão e senão se. If retorna o codigo se a condição for verdeira
else executa um codigo se a condição de if não for verdadeira
else if - executa uma condição após if e antes de else se a condição de if não for verdadeira

sintaxe: if(condition) {
    //code here;
}
ex: const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
    if(item % 2 === 0){
        console.log(' o numero ' + item + ' é par');
    }else{
        console.log(' o numero ' + item + ' é impar');
    }
});

ex2: 
const array = [2, 3, 4, 5, 6, 8, 10, 15];

 array.forEach(item => {
    if(item % 2 === 0){
        console.log(' o numero ' + item + ' é divisivel por 2');
    }else if(item % 3 === 0){
        console.log(' o numero ' + item + ' é divisivel por 3');
    }else if(item % 5 === 0){
        console.log(' o numero ' + item + ' é divisivel por 5');
    }
}); 

nesse exemplo verificamos se os numeros são divisiveis pelos divisores especificados, porém alguns número tem mais de
um divisor, mas os numeros que são divisiveis por 2 e por sempre irão parar na primeira condição por causa ela é a primeira
encadeada e o else if so executa se a condição anterior a ele nao executar. Para ter a informação correta o certo é tirar
os Else if e manter so if assim todos irão executar 

array.forEach(item => {
    if(item % 2 === 0){
        console.log(' o numero ' + item + ' é divisivel por 2');
    }if(item % 3 === 0){
        console.log(' o numero ' + item + ' é divisivel por 3');
    }if(item % 5 === 0){
        console.log(' o numero ' + item + ' é divisivel por 5');
    }
});

OPERADOR SWITCH - Normalmente não é comum ter muitos else if para uma questão de menu de escolha, nesse contexto
utiliza-se o operador Switch que irá executar um bloco caso a opção seja escolhida

sintaxe:
switch(expressão){
    case valor1:
        codehere;
    Break;
    case valorN:
        codehere;
    break;

    default
    break;
}
ex:
const fruta = 'pera';

switch(fruta){
    case 'banana':
        console.log('R$ 3,00/kg');
    break;
    case 'mamão': //neste caso, como mamão tem o mesmo valor da pera o valor n precisa ser repetido, se tiverem outras frutas na mesma faixa de preço basta incrementar com mais cases antes de pera
    case 'pera':
        console.log('R$ 2,00/kg');
    break;
    default: //é executado quando nenhum dos cases é valido
        console.log('Produto em falta no estoque');
    break;
}
//caso vc queira que a mensagem de defautl seja executada junto com o case anterior, basta retirar o break do case que o antecede

ESTRUTURA DE REPETIÇÃO: são for, while, do...while, for...in e a dois operadores que conseguem manipular essas estruturas
de repetição: 
continue - permite que possa pular uma iteração
break - quebra a execução

ESTRUTURA FOR: basicamente equivale a um Para no portugal, então para tal condição ele executará o codigo
sintaxe:
for(expressão inicial; condição; incremento){
    codigo
};

ex:
const array = ['one','two', 'three'];

for(let index = 0; index < array.length; index++){ //declara um index com valor 0; enquanto o index for menor que o tamanho do array; incrementa +1
    const element = array[index]; // o valor do do array em conjuto com a index é atribuido a element
    console.log('elemento: #' + index +' '+ element); 
};

ESTRUTURA WHILE: equivalente ao enquanto no portugol, ou seja, enqunato a condição for verdadeira o codigo será executado

sintaxe:
while(condição){
    codigo;
}

ex:
var n = 0;
var x = 0;
while(n < 3){
    n++;
    x += n;
}
console.log(x);

ESTRUTURA DO...WHILE - equivalente ao faça...enquanto do portugol, irá fazer o que foi especificado enquanto a condição for verdadeira.
A grande diferença entre while e o do..while é que o while primeiro avalia a condição pra depois executar o codigo e no
do...while o codigo no do é executado pelo menos uma vez antes de chegar no while.
Sintaxe:
do{
condição;
}while(condição);

ex:let i = 0;
do{
    i += 1
    console.log(i);
}while(i < 5);

ESTRUTURA FOR..IN-OFF - 
ex
let arr = [3, 5, 7];
arr.foo = "hello";

for(let i in arr){ //faz para cada propriedade do array index 0,1,2 e a propriedade foo que foi adicionada
    console.log(i);
};

for(let i of arr){ //so executa para as propriedades numeradas, que são os valores do array(somente 3, 5, 7)
    console.log(i);
};

CONTROLE DE REPETIÇÃO: CONTINUE E BREAK.
//break - ele termina o laço

console.log('exemplo de break');

var index = 0;

while(true){
    index++;
    if(index > 2){
        break;
    }
    console.log(index);
};

//continue - tem a capacidade de pular interação especificada

console.log('exemplo de continue');

const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++){
    const element = array[index];

    if(element % 2 === 0){
        continue; //se o numero for par ele vai pular e não ira fzr o log
    }
    console.log(element);
}


*/
