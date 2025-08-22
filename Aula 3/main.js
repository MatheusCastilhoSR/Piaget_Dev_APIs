/*
const tipo ={
    A: Symbol('Novo'),
    B: Symbol('Usado'),
    C: Symbol('Danificado')
}

const notebooks =[
    {
        nome: 'Dell G15',
        cor: 'Preto',
        uso: tipo.C
    },
    {
        nome: 'ASUS LOQ-e',
        cor: 'Prata',
        uso: tipo.B
    },
    {
        nome: 'Lenovo',
        cor: 'Preto',
        uso: tipo.A
    }
]

if(notebooks[0].uso === tipo.A){
    alert("Notebook novo.")
} else if(notebooks[0].uso === tipo.B){
    alert("Notebook usado.")
}else{
    alert("Notebook danificado.")
}

*/
//document.getElementById("teste").innerHTML = JSON.stringify(notebooks);

/*CONDICIONAL 

const a = 5
if (a===5) {
    alert("Igual a 5!")
} else if(a<10){
    alert("Menor que 5!")
} else{
    alert("Maior que 5!")
}
*/

const carros = [
    {nome:"Tesla", uso:"novo"},
    {nome:"Berlinda", uso:"usado"},
    {nome:"Fusca", uso:"usado"},
    {nome:"Uno", uso:"novo"},
    {nome:"Gol bola", uso:"usado"}
]

let saidaUsado="";
let saidaNovo="";

carros.forEach(copiaCarros=>{
    if(copiaCarros.uso ==='novo'){
        saidaNovo += `Nome: ${copiaCarros.nome}<br>`
    }
    else if(copiaCarros.uso ==='usado'){
        saidaUsado += `Nome: ${copiaCarros.nome}<br>`
    }
})

document.getElementById("carroUsados").innerHTML = saidaUsado
document.getElementById("carroNovos").innerHTML = saidaNovo