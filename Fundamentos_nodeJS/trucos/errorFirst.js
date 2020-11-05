function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error)
        }
    }, 1000);
}

    asincrona((error, dato)=>{
        if (error) {
            console.error(`Tenemos un error: ${error}`)
            return false
            //throw error //!throw error no va a funcionar con funciones asíncronas
        }else{
            console.log(`Todo ha ido bien, mi dato es: ${dato}`)
        }
    })
