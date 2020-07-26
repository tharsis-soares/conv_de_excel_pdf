const fs = require('fs')

fs.writeFile('./tharsis.txt','Novo conteudo do arquivo!',(erro) => {
    if(erro){
        console.log('Ocorreu uma falha na leitura')
    }
})