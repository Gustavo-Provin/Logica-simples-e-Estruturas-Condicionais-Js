const idade = 19;
document.write(`Minha idade é ${idade} anos </br>
</br>`)


const n1 = 10;
const n2 = 12;

const soma = n1 + n2
document.write(`O resultado da soma de ${n1} e ${n2} = ${soma} </br>
</br>`)


const total = 220.50;
const parcelas = 12
const valorParcela = total / parcelas

document.write(`O valor total de ${total} parcelado em 12x é igual a R$: ${valorParcela.toFixed(2).replace(".", ",") } </br>
</br>`)



//4.Minutos
        
        
const totalMinutos = 120;
const totalSegundos = totalMinutos * 60;
document.write(`${totalMinutos} minutos equivale à ${totalSegundos} segundos! </br>`)

//5.
const nomeA = 'Gustavo';

const nota1 = 9;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
document.write(`</br>O aluno ${nomeA} ficou com média ${media}</br>`)

//6. a, b, c
let a = 10;
let b = 20;
let c = a;

a = b;
b = c;
        
document.write(`</br> ${a} e ${b}`)

//7. porcentagemTotal
const totalE =  100
const vB = 20
const vN = 10

const porcentagemTotal = ((100 - 30) / totalE) * 100
const porcVB = (vB / totalE) * 100
const porcVN = (vN / totalE) * 100

document.write(`</br></br>Pocentagem total dos votos ${porcentagemTotal}%, porcentagem de votos em branco ${vB}% porcentagem de votos nulos ${vN}%`)

//8 maior, primeiro, segundo
let valor1 = 200;
let valor2 = 200;

if(valor1 === valor2){
    document.write("</br></br>Os valores são iguais")
} if (valor1 > valor2) {
        document.write(`</br></br>O primeiro número é maior!`)
} else{
    document.write(`</br></br>O segundo número é maior`)
}

//9. Maças

let nMacas = 11
let precoM = 0

if(nMacas < 12){
        precoM = 0.30;
} else if(nMacas >= 12){
    precoM = 0.25
}

document.write(`</br></br>O preço a pagar pelas maças será R$: ${nMacas * precoM}`)

//10. nome, idade, ano

const nU = 'Gustavo'
let iU = 19;
let ano = 2023 - 19;
document.write(`</br></br>Nome: ${nU}, Idade: ${iU} anos, nasceu em ${ano}`)

//11. par impar
let numero = 10;

if(numero % 2 == 0){
    alert('Número é par')
} else {
    alert('Número é ímpar')
}


//12.   date novamente
let anoA = 2023;
let anoN = 2004;
const anao = anoA - anoN;
if(anao >= 16){
    document.write(`</br></br>Você poderá votar esse ano!!`)
}else{
    document.write(`</br></br>Você não pode votar!`)
}
        
