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

const animais = [
    {nome:"Gato", tipo:"Doméstico"},
    {nome:"Cachorro", tipo:"Doméstico"},
    {nome:"Pato", tipo:"Doméstico"},
    {nome:"Leão", tipo:"Selvagem"},
    {nome:"Peixe-boi", tipo:"Selvagem"}
]

let animalSelvagem="";
let animalDoméstico="";

animais.forEach(analiseAnimais=>{
    if(analiseAnimais.tipo ==='Doméstico'){
        animalDoméstico += `Nome: ${analiseAnimais.nome}<br>`
    }
    else if(analiseAnimais.tipo ==='Selvagem'){
        animalSelvagem += `Nome: ${analiseAnimais.nome}<br>`
    }
})

document.getElementById("animaisSelvagens").innerHTML = animalSelvagem
document.getElementById("animaisDomesticos").innerHTML = animalDoméstico