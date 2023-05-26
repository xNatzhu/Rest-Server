import { Router } from "express";
import { check } from "express-validator";
import { usuariosGet, usuariosPost, usuariosPut } from "../controllers/usuarios.controllers.js";
import Role from "../db/rol.js";
import validarCampos from "../middlewares/validarCampos.js";
const router = Router() //creamos una instancia.

//En resumen, Router se utiliza para definir las rutas y controladores en una aplicación web basada en Express, lo que permite dirigir las solicitudes HTTP entrantes a las partes adecuadas de la aplicación.

router.get('/', usuariosGet)//esto nos ayuda a poder crear una separacion de forma independiente de las rutas y poderla administrar en otro lugar

router.post('/',[
    check("correo", "el correo no es valido").isEmail(), // lo que hace es chequear -> despues pregunta que parte del body desea chequear, luego el error que tendra y despues el formato que debe validar ese chequeo en este caso en correo.
    check("nombre","Debe agregar un nombre").not().isEmpty(), //not = no / isEmpty = vacio [No debe estar vacio]
    check("Contrasena","Debe añadir una contraseña").isLength({min:6}), //aca decimos que la longitud de la contraseña tiene que ser 6 o superior
    check("rol").custom(async (rol="")=>{ //el custom sirve que va estar buscando un dato personalizado en la base de datos -----
        const existeRol = await Role.findOne({rol}) // findOne va buscar de Roles uno por uno, si existe el rol añadido como parametro.
        if( !existeRol ){
            throw new Error(`Hay un error ${rol} no se encuentra en la base de datos`)
        }
    }),
    validarCampos //Lo que hara este midd es que cuando procese toda la informacion de los checkeos, va dejar pasar al controlador o no dependiendo si esta bien
], usuariosPost) //El segundo item en el caso que haya 3, es donde se almacenan los mideware.

router.put('/:id', usuariosPut) // de esta manera agregara el contenido de los diferentes ID.


export default router