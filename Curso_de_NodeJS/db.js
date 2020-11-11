const db = require('mongoose')

db.Promise = global.Promise

async function connect(url) {
    //*mongodb+srv://Mike:contrasenaAtlas@cluster0.rckow.mongodb.net/telegrom?retryWrites=true&w=majority
    await db.connect(url,{
    useNewUrlParser:true,
    })
    console.log('[db] Conectada con éxito')
}

module.exports = connect