
import { validationResult } from "express-validator";

const validarCampos = (req, resp, next)=>{

    const error = validationResult(req); // lo que hace aca es tomar la verificacion del chech que estaba almacenada en el req.

    if( !error.isEmpty()){ // y aca decimos que en el caso que sea un error el proceso se dentrenta y lanzara el respectivo error.
        return resp.status(400).json(error)
    }


    
    //Cuando creamos middlewares vamos a tener un tercer parametro que es next. Next lo que permite es que una vez que el codigo se haya ejecutado sin problemas lo que hara sera IR CON EL SIGUIENTE MIDDLEWARS O SEGUIR CON LA ESTRUCTURA DEL CODIGO DEL CONTROLADOR.

    next()
}

export default validarCampos