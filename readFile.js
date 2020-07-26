const fs = require('fs')

fs.readFile('./tharsis.txt',{encoding: 'utf-8'},(erro, dados) => {
    if(erro){
        console.log('Ocorreu uma falha na leitura')
    }else{
        console.log(dados)
    }
})