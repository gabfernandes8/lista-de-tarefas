'use strict'

import { listarUsuarios } from './funcoes-api.js'
import { pegarIdUsuario } from './funcoes-api.js'
import { cadastrarUsuario } from './funcoes-api.js'

const olho = document.getElementById('olho')
const inputSenha = document.getElementById('password')
const botaoCadastro = document.getElementById('botao')
let boolean = false 

olho.addEventListener('click', () => {

    if(boolean == true){
        olho.src = '../img/svg/olho.svg'
        boolean = false
        inputSenha.type = 'password'
    }
    else {
        olho.src = '../img/svg/olho-fechado.svg'
        boolean = true
        inputSenha.type = 'text'
    }


})

const cadastrar = async() => {
 
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value
    const nome = document.getElementById('name').value

    const usuarios = await listarUsuarios()

    if(email != '' && senha != '' && nome != '' && email.includes('@')){

        usuarios.usuarios.forEach(usuario => {
    
            if(email == usuario.email){

                alert('Email já cadastrado')
                
            } else {

                let usuario = {
                    nome: nome,
                    email: email,
                    senha: senha
                }

                cadastrarUsuario(usuario)
                let id = pegarIdUsuario(email)

                localStorage.setItem('usuarioId', id)   
                window.location.href = './tarefas.html'

            }
    
        })

    }

}

botaoCadastro.addEventListener('click', cadastrar)