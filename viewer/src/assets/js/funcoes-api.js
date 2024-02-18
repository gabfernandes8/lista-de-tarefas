'use strict'

const listarUsuarios = async() => {

    const url = ''
    const response = await fetch(url, {
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Request-Headers': 'Content-Type, Authorization',
        'method': 'GET'
    })
    const data = response.json()
    return data

}

const pegarIdUsuario = async(email) => {} //GET
const cadastrarUsuario = async(usuario) => {} //POST
const pegarUsuario = async(id) => {} //GET
const atualizarUsuario = async(usuario) => {} //UPDATE
const tarefasUsuario = async(id) => {} //GET
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