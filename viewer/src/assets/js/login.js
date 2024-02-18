'use strict'

import { listarUsuarios } from './funcoes-api.js'

const botaoLogin = document.getElementById('botao')
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
    const senha = document.getElementById('password').value

    const usuarios = await listarUsuarios()

    if(email != '' && senha != ''){
        
        usuarios.usuarios.forEach(usuario => {
    
            if(email == usuario.email && senha == usuario.senha){

                localStorage.setItem('usuarioId', usuario.id)   
                window.location.href = './assets/pages/tarefas.html'
    
            } else {
    
                alert('Email e/ou senha incorretos')
    
            }
    
        })

    }

}

botaoLogin.addEventListener('click', validarLogin)