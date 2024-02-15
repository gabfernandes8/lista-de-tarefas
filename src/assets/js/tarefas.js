'use strict'

const containerTarefas = document.getElementById('container-tarefas') 
const botaoAdicionarTarefa = document.getElementById('adicionar-tarefa')

botaoAdicionarTarefa.addEventListener('click', () => {

    if(!botaoAdicionarTarefa.classList.contains('pointer-events-none'))
        botaoAdicionarTarefa.classList.add('pointer-events-none')


    let criarTarefa = document.createElement('form')
    criarTarefa.classList.add('absolute', 'h-4/5', 'w-3/5', 'rounded-md', 'bg-azulclaro', 'm-auto', 'inset-0', 'flex', 'flex-col', 'px-5', 'py-1', 'Formulario')
    criarTarefa.id = 'Formulario'

    let titulo = document.createElement('input')
    titulo.classList.add('h-1/5', 'bg-transparent', 'focus:outline-none', 'placeholder:text-3xl', 'placeholder:font-semibold', 'placeholder:drop-shadow-[2px_2px_1px_#CF9E76]', 'text-3xl', 'font-semibold', 'drop-shadow-[2px_2px_1px_#CF9E76]', 'placeholder:text-black', 'Formulario')
    titulo.placeholder = 'Título da tarefa'
    titulo.setAttribute('name', 'title')
    titulo.setAttribute('type', 'text')
    titulo.id = 'title'

    let descricao = document.createElement('textarea')
    descricao.classList.add('grow', 'bg-azulclarinho/30', 'rounded-lg', 'border-[1px]', 'border-azulmedio', 'px-3', 'py-2', 'focus:outline-none', 'placeholder:font-bold', 'placeholder:text-slate-700', 'font-bold', 'text-slate-700', 'resize-none', 'Formulario')
    descricao.placeholder = 'Descrição...'
    descricao.id = 'description'

    let divBotao = document.createElement('div')
    divBotao.classList.add('h-1/6', 'flex', 'justify-end', 'Formulario')

    let botaoSalvar = document.createElement('button')
    botaoSalvar.classList.add('h-full', 'Formulario')

    let imagemSalvar = document.createElement('img')
    imagemSalvar.src = '../img/svg/salvar.svg'
    imagemSalvar.alt = 'Salvar'
    imagemSalvar.classList.add('h-3/5', 'Formulario')
    
    criarTarefa.replaceChildren(titulo, descricao, divBotao)
    divBotao.appendChild(botaoSalvar)
    botaoSalvar.appendChild(imagemSalvar)

    containerTarefas.appendChild(criarTarefa)

    window.addEventListener('click', (e) => {

        if(containerTarefas.lastChild == criarTarefa){
    
            if(!e.target.classList.contains('Formulario') && e.target.id != 'adicionar-tarefa'){
        
                containerTarefas.removeChild(criarTarefa)
                botaoAdicionarTarefa.classList.remove('pointer-events-none')
        
            }
    
        }
        
    })

})

let tarefas = [

    {
        id: 1,
        titulo:'Fazer Compras',
        descricao:'Ir no mercado e comprar sorvete',
        concluido: false
    },
    {
        id: 2,
        titulo:'Fazer trabalhos da escola',
        descricao:'Redação de português e Slides de história',
        concluido: false
    }

]

const criarTarefas = () => {

    tarefas.forEach((tarefa)=>{

        let divTarefa = document.createElement('div')
        divTarefa.classList.add('flex', 'flex-col', 'h-[24vh]', 'bg-azulclaro/30', 'rounded-md', 'p-4', 'gap-3', 'tarefas', 'hover:bg-azulclaro/50', 'ease-linear', 'duration-150')
        
        let containerTop = document.createElement('div')
        containerTop.classList.add('flex', 'justify-between')
        
        let tituloTarefa = document.createElement('h3')
        tituloTarefa.classList.add('font-semibold', 'text-2xl')
        tituloTarefa.textContent = tarefa.titulo

        let containerOpcoes = document.createElement('div')
        containerOpcoes.classList.add('overflow-hidden', 'cursor-pointer', 'relative', 'flex', 'items-center', 'justify-center')

        let imgOpcoes = document.createElement('img')
        imgOpcoes.classList.add('w-8', 'h-8')
        imgOpcoes.src = '../img/svg/pontos.svg'
        imgOpcoes.alt = '3 pontos na horizontal'

        let opcoes = document.createElement('div')
        opcoes.classList.add('absolute', 'top-[100%]', 'right-0', 'w-fit','py-1', 'bg-azulbonito', 'rounded-lg', 'rounded-tr-none')

        let botaoEditar = document.createElement('button')
        botaoEditar.classList.add('text-white', 'px-4', 'flex', 'items-center', 'justify-center', 'text-end', 'w-full', 'font-medium', 'border-b-azulclaro', 'border-b-[1px]', 'hover:text-azulclaro')
        
        let editar = document.createElement('span')
        editar.textContent = 'Editar'

        let botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('text-white', 'px-4', 'flex', 'items-center', 'justify-center', 'text-end', 'w-full', 'font-medium', 'hover:text-azulclaro')

        let excluir = document.createElement('span')
        excluir.textContent = 'Excluir'

        let descricaoTarefa = document.createElement('p')
        descricaoTarefa.classList.add('text-xl', 'grow')
        descricaoTarefa.textContent = tarefa.descricao

        let divBotaoSalvar = document.createElement('div')
        divBotaoSalvar.classList.add('w-full', 'flex', 'gap-2', 'items-center', 'justify-end')

        let inputConcluido = document.createElement('input')
        inputConcluido.classList.add('hidden', 'concluido')
        inputConcluido.setAttribute('type', 'checkbox')
        inputConcluido.id = `conclusão-${tarefa.id}`

        let labelConcluido = document.createElement('label')
        labelConcluido.classList.add('cursor-pointer', 'relative', "before:content-['']", 'before:absolute', 'before:-left-[120px]', 'before:top-0', 'before:bottom-0', 'before:right-0', 'before:m-auto','before:w-4', 'before:h-4', 'before:rounded', 'before:border-[1px]', 'before:border-solid', 'before:border-black', 'before:inline-block')
        labelConcluido.htmlFor = `conclusão-${tarefa.id}`

        let spanConcluido = document.createElement('span')
        spanConcluido.classList.add('text-lg', 'select-none')
        spanConcluido.textContent = 'Concluído'

        divTarefa.replaceChildren(containerTop, descricaoTarefa, divBotaoSalvar)
        containerTop.replaceChildren(tituloTarefa, containerOpcoes)
        containerOpcoes.replaceChildren(imgOpcoes, opcoes)
        opcoes.replaceChildren(botaoEditar, botaoExcluir)
        botaoEditar.appendChild(editar)
        botaoExcluir.appendChild(excluir)
        divBotaoSalvar.replaceChildren(inputConcluido, labelConcluido)
        labelConcluido.appendChild(spanConcluido)
        containerTarefas.appendChild(divTarefa)

        containerOpcoes.addEventListener('click', () => {

            containerOpcoes.classList.toggle('overflow-hidden')      
        
        })
    
        containerOpcoes.addEventListener('mouseleave', () => {
            containerOpcoes.classList.add('overflow-hidden') 
        })
    
        labelConcluido.addEventListener('click', () => {

            if(inputConcluido.checked == false){

                tituloTarefa.classList.add('line-through')
                descricaoTarefa.classList.add('line-through')

            } else {

                tituloTarefa.classList.remove('line-through')
                descricaoTarefa.classList.remove('line-through')

            }

        })


    })

}

const botaoConcluido = document.getElementById('concluido')

botaoConcluido.addEventListener('click', () => {

    criarTarefas('tarefasNaoConcluidas')

})

// window.onload = () => {
//     criarTarefas()
// }



/*
<form action="" class="absolute h-4/5 w-3/5 rounded-md bg-azulclaro m-auto inset-0 flex flex-col px-5 py-1">
    <input type="text" name="title" id="title" placeholder="Título da tarefa" class="h-1/5 bg-transparent focus:outline-none placeholder:text-3xl placeholder:font-semibold placeholder:drop-shadow-[2px_2px_1px_#CF9E76] text-3xl font-semibold drop-shadow-[2px_2px_1px_#CF9E76] placeholder:text-black">
    <textarea id="text" placeholder="Descrição..." class="grow bg-azulclarinho/30 rounded-lg border-[1px] border-azulmedio px-3 py-2 focus:outline-none placeholder:font-bold placeholder:text-slate-700 font-bold text-slate-700"></textarea>
    <div class="h-1/6 flex justify-end">
        <button class="h-full">
            <img src="../img/svg/salvar.svg" alt="Salvar" class="h-3/5">
        </button>
    </div>
</form> 
*/

/* 
<div class="flex flex-col h-[24vh] bg-azulclaro/30 rounded-md p-4 gap-3 tarefas hover:bg-azulclaro/50 ease-linear duration-150">
    <div class="flex justify-between">
        <h3 class="font-semibold text-2xl">Fazer compras</h3>
        <div class="opcoes overflow-hidden cursor-pointer relative flex items-center justify-center">
            <img src="../img/svg/pontos.svg" alt="3 pontos na horizontal" class="w-8 h-8">
            <div class="absolute top-[100%] right-0 w-fit py-1 bg-azulbonito/50 rounded-lg rounded-tr-none">
                <button class="text-white px-4 flex items-center justify-center text-end w-full font-medium border-b-azulbonito border-b-[1px] hover:text-azulescuro">
                    <span>
                        Editar
                    </span>
                </button>
                <button class="text-white px-4 flex items-center justify-center text-end w-full font-medium hover:text-azulescuro">
                    <span>
                        Excluir
                    </span>
                </button>
            </div>
        </div>
    </div>
    <p class="text-xl grow">
        Ir no mercado e comprar sorvete
    </p>

    <div class="w-full flex gap-2 items-center justify-end">
        <input type="checkbox" class="hidden concluido" id="conclusao">
        <label for="conclusao" class="cursor-pointer relative before:content-[''] before:absolute before:-left-[22px] before:top-[5px] before:w-4 before:h-4 before:rounded
                                    before:border-[1px] before:border-solid before:border-black before:inline-block">
            <span class="text-lg select-none"> Concluído </span>
        </label>
    </div>
</div>
*/

