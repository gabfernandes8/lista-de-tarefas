'use strict'

const opcoesArray = document.getElementsByClassName('opcoes')

for (let opcoes of opcoesArray){

    opcoes.addEventListener('click', () => {

        opcoes.classList.toggle('overflow-hidden')      
    
    })

    opcoes.addEventListener('mouseleave', () => {
        opcoes.classList.add('overflow-hidden') 
    })

}
 
