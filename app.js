/*****************************************************************
* Objetivo: criar uma api para responder as tarefas da empresa GARY's TASKS
* Data: 15/02/2024
* Autor: Gabriela Fernandes
* Versão: 1.0
*****************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//index do backend
const app = express()

// para funcionar
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*')
    response.header('Acess-Control-Allow-Methods', 'GET')
    app.use(cors)
    next()
})

/*************** IMPORTS DE ARQUIVOS E BIBLIOTECAS DO PROJETO *******************/
    const controllerTarefas = require('./controller/controller_tarefas.js')
/****************************************************************************** */

app.get('/v1/lista-de-tarefas/tarefas', cors(), async(request, response, next) => {

    // chama a função para retornar os dados da tarefas
    let dadosTarefa = await controllerTarefas.getListarTarefas()

    // validação para verificar se existem dados
    if (dadosTarefa){
        response.json(dadosTarefa)
        response.status(200)
    } else {
        response.json({message: "Nenhum registro encontrado"})
        response.status(404)
    }
})


app.listen(8080, () => {})