'use strict'

const listarUsuarios = async() => {} // GET
const pegarIdUsuario = async(email) => {} //GET
const pegarUsuario = async(id) => {} //GET
const atualizarUsuario = async(usuario) => {} //UPDATE
const cadastrarUsuario = async(usuario) => {} //POST



const tarefasUsuario = async(id) => {

    try {
        
        const url = `http://localhost:8080/v1/lista-de-tarefas/tarefas/${id}`
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, options)
        const data = response.json()
        console.log(data)
        return data
        
    } catch (error) {

        console.log('ERRO')
        return false
        
    }


} //GET

const tarefasUsuarioNaoConcluidas = async(id) => {} //GET
const concluirTarefa = async(id) => {} //UPDATE
const tarefaNaoConcluida = async(id) => {} //UPDATE
const removerTarefa = async(id) => {} //DELETE
const selecionarTarefa = async(id) => {} //GET
const criarTarefa = async(tarefa) => {} //POST
const atualizarTarefa = async(tarefa) => {} //UPDATE

export {
    listarUsuarios,
    pegarIdUsuario,
    cadastrarUsuario,
    pegarUsuario,
    atualizarUsuario,
    tarefasUsuario,
    tarefasUsuarioNaoConcluidas,
    concluirTarefa,
    tarefaNaoConcluida,
    removerTarefa,
    selecionarTarefa,
    criarTarefa,
    atualizarTarefa
}