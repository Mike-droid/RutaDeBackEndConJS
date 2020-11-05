const bcrpyt =require('bcrypt')

const password = '1234Segura!'

bcrpyt.hash(password, 5, (error,hash) => {
    console.log(hash)

    bcrpyt.compare(password , hash, (error,result)=>{
        //console.log(error)
        console.log(result)
    })
})