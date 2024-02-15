/***************************************************************************************
* Objetivo: criar a integração com o banco de dados MySQL para fazer o CRUD de tarefas
* Data: 15/02/2024
* Autor: Gabriela Fernandes
* Versão: 1.0
***************************************************************************************/

// import da biblioteca do prisma client
const {PrismaClient} = require('@prisma/client')

// instanciando o objeto prisma com as caracteristicas do prisma client
const prisma = new PrismaClient

// inserir uma nova tarefa
const insertTarefa = async(tarefa) => {
    let sql = `insert into tbl_tarefa (titulo, descricao, concluido)
    
    (${tarefa.titulo}, ${tarefa.descricao}, ${tarefa.concluido})`
}

// atualizar uma tarefa existente filtrando pelo ID
const updateTarefa = async(id) => {
    let sql = `update tbl_tarefa where id=${id}`
}

// excluir uma tarefa existente filtrando pelo ID
const deleteTarefa = async(id) => {
    let sql = `delete from tbl_tarefa where id=${id}`
}

// listar todas as tarefas
const selectAllTarefas = async() => {
    let sql = 'select * from tbl_tarefa'

    // $queryrawUnsafe(‘encaminha apenas a variavel’)
    // $queryRaw(‘codigo digitado aqui’)

    // executa o scriptSQL no BD e recebe o retorno dos dados na variável rsTarefas
    let rsTarefas = await prisma.$queryRawUnsafe(sql)
    
    // tratamento de erro para retornar os dados ou retornar falsy
    if (rsTarefas.length > 0) {
        return rsTarefas
    } else {
        return false
    }
    
}

// buscar a tarefa existente filtrando pelo ID
const selectByIdTarefa = async(id) => {
    let sql = `select from tbl_tarefa where id=${id}`
}

// buscar tarefas não concluídas
const selectTarefasNaoConcluidas = async(concluido) => {
    let sql = `select from tbl_tarefa where concluido=false`
}

// marcar tarefa concluída
const updateTarefaConcluida = async() => {
    let sql = `update tbl_tarefa set concluido=true where id=${id}`
}

module.exports={
    insertTarefa,
    updateTarefa,
    deleteTarefa,
    selectAllTarefas,
    selectByIdTarefa,
    selectTarefasNaoConcluidas
}