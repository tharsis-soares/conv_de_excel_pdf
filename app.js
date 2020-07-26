var Reader = require('./Reader')
var Writer = require('./Writer')
var Processor = require('./Processor')
var Table = require('./Table')
var HtmlParser = require('./HtmlParser')
var PDFWriter = require('./PDFWriter')


var leitor = new Reader()
var escritor = new Writer()

async function main(){
    var dados = await leitor.Read('./dados.csv')
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    var html = await HtmlParser.Parse(usuarios)
    
    escritor.Write(Date.now() + '.html',html)
    PDFWriter.WritePDF(Date.now() + '.pdf',html)
    // console.log(usuarios.rows)
    // usuarios.rows.push(['Ferrugem','Silveira Storm','JS','2020'])
    // console.log(usuarios.RowCount)
    // console.log(usuarios.ColumnCount)
}

main()