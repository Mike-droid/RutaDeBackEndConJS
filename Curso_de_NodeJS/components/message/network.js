const express = require('express')
const multer = require('multer')
const config = require('./../../config');
const response = require('./../../network/response')
const controller = require('./controller')
const router = express.Router()

const upload = multer({
    dest : 'public/'+ config.filesRoute +'/',
})

router.get('/' , (req,res)=>{ //!El método get será UNICAMENTE para las peticiones get
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req,res, messageList,200)
        })
        .catch(e => {
            response.error(req , res , `Unexpected Error: ${e}` , 500)
        })
})

router.post('/' ,upload.single('file'), (req,res)=>{ //!El método post será UNICAMENTE para las peticiones post
    controller.addMessage(req.body.user , req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req,res, fullMessage ,201)
        })
        .catch(e =>{
            response.error(req, res, 'Información inválida',400, `Error en el contenido: ${e}`);
        })
})

router.patch('/:id', (req,res)=>{ //!Sirve para actualizar
    controller.updateMessage(req.params.id, req.body.message)
        .then((data)=>{
            response.success(req,res,data,200)
        })
        .catch(e=>{
            response.error(req,res, 'Error interno',500,e)
        })
})

router.delete('/:id' , (req,res)=>{
    controller.deleteMessage(req.params.id)
        .then(()=>{
            response.success(req,res,`Mensaje ${req.params.id} eliminado`,200)
        })
        .catch(e=>{
            response.error(req,res,'Error interno',500,e)
        })
})

module.exports = router