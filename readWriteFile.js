const fs = require('fs')


function modificaDados(nome, curso, categoria){
    fs.readFile('./db_tharsis.json',{encoding: 'utf-8'},(erro, dados) => {
        if(erro){
            console.log('Ocorreu uma falha na leitura')
        }else{
            var conteudo = JSON.parse(dados)
            
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
            
            fs.writeFile('./db_tharsis.json',JSON.stringify(conteudo),(erro) => {
                if(erro){
                    console.log('erro na escrita')
                }
            })
            console.log(conteudo)
        }
    })
}

modificaDados('Tharsis', 'React', 'Teste')