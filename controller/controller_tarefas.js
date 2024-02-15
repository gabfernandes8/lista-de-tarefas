/***************************************************************************************
* Objetivo: arquivo responsável pela interação entre o app e a model, que teremos todas
* as tratativas e a regra de negócio para o CRUD de tarefas
* Data: 15/02/2024
* Autor: Gabriela Fernandes
* Versão: 1.0
***************************************************************************************/

// import do arquivo DAO para manipular dados do BD
const tarefasDAO = require('../model/DAO/tarefa.js')

// função para inserir uma nova tarefa no DBA
const setNovaTarefa = async() => {}

//função para atualizar uma tarefa existente
const setAtualizarTarefa = async() => {}

// função para excluir uma tarefa existente
const setExcluirTarefa = async() => {}

// função para listar todos as tarefas existentes no DBA
const getListarTarefas = async() => {
    let tarefasJSON = {}

    let dadosTarefa = await tarefasDAO.selectAllTarefas()

    if (dadosTarefa){
        tarefasJSON.tarefas = dadosTarefa
        tarefasJSON.qt = dadosTarefa.length 
        tarefasJSON.status_code = 200
        return tarefasJSON
    } else {
        return false
    }
}

// função para buscar uma tarefa pelo ID
const getBuscarTarefa = async(id) => {
    let tarefasJSON = {}

    let dadosTarefa = await tarefasDAO.selectByIdTarefa()

    if (dadosTarefa){
        tarefasJSON.tarefas = dadosTarefa
        tarefasJSON.status_code = 200
        return tarefasJSON
    } else {
        return false
    }
}

const getTarefasNaoConcluidas = async(concluido) => {
    let tarefasJSON = {}

    let dadosTarefa = await tarefasDAO.selectTarefasNaoConcluidas()

    if (dadosTarefa){
        tarefasJSON.tarefas = dadosTarefa
        tarefasJSON.qt = dadosTarefa.length 
        tarefasJSON.status_code = 200
        return tarefasJSON
    } else {
        return false
    }
}

module.exports={
    setNovaTarefa,
    setAtualizarTarefa,
    setExcluirTarefa,
    getListarTarefas,
    getBuscarTarefa
}