const button = document.getElementById('login')

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