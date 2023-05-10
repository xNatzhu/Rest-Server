import { Router } from "express";
import { usuariosGet, usuariosPost, usuariosPut } from "../controllers/usuarios.controllers.js";

const router = Router() //creamos una instancia.

//En resumen, Router se utiliza para definir las rutas y controladores en una aplicación web basada en Express, lo que permite dirigir las solicitudes HTTP entrantes a las partes adecuadas de la aplicación.

router.get('/', usuariosGet)//esto nos ayuda a poder crear una separacion de forma independiente de las rutas y poderla administrar en otro lugar

router.post('/', usuariosPost)

router.put('/:id', usuariosPut) // de esta manera agregara el contenido de los diferentes ID.


export default router