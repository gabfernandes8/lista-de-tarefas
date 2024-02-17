'use strict'

const olho = document.getElementById('olho')
const inputSenha = document.getElementById('password')
const inputFoto = document.getElementById('foto-perfil')
const imagemLabel = document.getElementById('imagem')
const botaoVoltar = document.getElementById('voltar')
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
            imagemLabel.style.backgroundImage = `url(${readerTarget.result})`
           
            if(imagemLabel.children[0].classList.contains('hidden') == false)
            imagemLabel.children[0].classList.add('hidden')
            
        })
    
    reader.readAsDataURL(file);

    }

})

botaoVoltar.addEventListener('click', () => {

    window.location.href = './tarefas.html'

})



