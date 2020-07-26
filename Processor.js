class Processor{
    static Process(data){
        var a = data.split('\r\n')
        var rows = []

        a.forEach(row => {
            var arr = row.split(',')
            rows.push(arr)
        })
        // console.log(a)
        // console.log(rows)
        return rows
    }
}

module.exports = Processor