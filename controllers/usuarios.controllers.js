import { response } from "express"; //el response sirve para poder detectar el response generado por la condicional, es opcional es para ver las opciones que nos da el codificador asi podemos elegir sin equivocarnos




//Los controladores sirven para modularizar el codigo de las rutas, y para no hacerlo extenso. Es decir aca se agregara el contenido que nosotros queremos añadirle a las rutas.


const usuariosGet = (req, resp =response)=>{
    resp.json({
        msg:"get api",
    })
}


export {usuariosGet};