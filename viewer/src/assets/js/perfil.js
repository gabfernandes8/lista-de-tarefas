'use strict'

// import { pegarUsuario } from './funcoes-api.js'
// import { atualizarUsuario } from './funcoes-api.js'

const olho = document.getElementById('olho')
const inputSenha = document.getElementById('password')
const inputNome = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputFoto = document.getElementById('foto-perfil')
const imagemLabel = document.getElementById('imagem')
const botaoVoltar = document.getElementById('voltar')
const botaoSair = document.getElementById('sair')
const botaoSalvar = document.getElementById('salvar')
const id = localStorage.getItem('usuarioId')
let boolean = false 

let usuario = {
    nome: 'Ryan Alves',
    email: 'ryan@email.com',
    senha: 123
}

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

// const encurtarLink = async(linkParametro) => {

//     let apiKey = '9OZYpSzl5SrA2AKZdutWGOV9RuNLlJQPzT2OVhp1KWmJfunnt5QTj3kl5WkV'

//     let link = linkParametro
//     const url = `https://api.tinyurl.com/create?api_token=${apiKey}`
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//             url: `${linkParametro}`,
//             domain: "tinyurl.com"
//         })
//       })

//     const linkEncurtado = await response.json()

//     console.log(linkEncurtado)

// }

inputFoto.addEventListener('change', async() => {

    let file = inputFoto.files[0]
    
    if (file) {

        const reader = new FileReader();
    
        reader.addEventListener('load', (e) => {
            const readerTarget = e.target

            localStorage.setItem('imagem', readerTarget.result)
            imagemLabel.style.backgroundImage = `url(${localStorage.getItem('imagem')})`

            if(imagemLabel.children[0].classList.contains('hidden') == false)
                imagemLabel.children[0].classList.add('hidden') 
            
        })
    
    reader.readAsDataURL(file);

    }

})

const montarPerfil = (usuario) => {

    inputNome.value = usuario.nome
    inputEmail.value = usuario.email
    inputSenha.value = usuario.senha

}

botaoVoltar.addEventListener('click', () => {

    window.location.href = './tarefas.html'

})

botaoSair.addEventListener('click', () => {

    window.location.href = '../../index.html'

})

botaoSalvar.addEventListener('click', () => {

    let novoUsuario = {
        id: id,
        nome:  inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value
    }

    // atualizarUsuario(novoUsuario)

})

window.addEventListener('load', () => {

    //let usuario = pegarUsuario(id)

    montarPerfil(usuario)

    if(localStorage.getItem('imagem')){
        
        imagemLabel.style.backgroundImage = `url(${localStorage.getItem('imagem')})`

        if(imagemLabel.children[0].classList.contains('hidden') == false)
            imagemLabel.children[0].classList.add('hidden') 
    
    }

})
