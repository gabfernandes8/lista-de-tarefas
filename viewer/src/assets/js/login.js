'use strict'

const button = document.getElementById('login')
const olho = document.getElementById('olho')
const inputSenha = document.getElementById('password')
let boolean = false 

olho.addEventListener('click', () => {

    if(boolean == true){
        olho.src = './assets/img/svg/olho.svg'
        boolean = false
        inputSenha.type = 'password'
    }
    else {
        olho.src = './assets/img/svg/olho-fechado.svg'
        boolean = true
        inputSenha.type = 'text'
    }


})

const validarLogin = async() => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(email === '' || senha === ''){
        alert('Preencha todos os campos')
    }else{
        const users = await fetch('localhost:8080/usuarios')
        const listUsers = await users.json()

        listUsers.forEach((user) => {
            if(email === user.email && senha === user.senha){
                window.location.href = ''
            }
        })

    }

}

window.onload = () => {

}