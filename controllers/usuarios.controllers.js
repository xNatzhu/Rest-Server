import Usuario from "../db/usuario.js"
import bcryptjs from "bcryptjs"

import { response } from "express"; //el response sirve para poder detectar el response generado por la condicional, es opcional es para ver las opciones que nos da el codificador asi podemos elegir sin equivocarnos

/*
TEORIA:

Request (solicitud): Una solicitud es enviada por el cliente al servidor con el objetivo de solicitar un recurso o servicio específico. La solicitud contiene información como el tipo de solicitud (GET, POST, PUT, DELETE, etc.), la dirección URL del recurso solicitado, parámetros adicionales y, en el caso de solicitudes POST o PUT, los datos que se envían al servidor. En resumen, una solicitud es una petición de acción o información.


Response (respuesta): Una respuesta es enviada por el servidor como resultado de la solicitud recibida. La respuesta contiene información sobre el estado de la solicitud, así como los datos solicitados (en caso de que la solicitud haya tenido éxito). 




Request (solicitud): Tú le dices al mesero qué comida quieres, cómo la quieres preparada y cualquier otra información adicional, como bebidas o postres. El mesero toma tu pedido y lo lleva a la cocina.

Response (respuesta): Después de un tiempo, el mesero regresa con tu comida. La respuesta que recibes es la comida que pediste. Puede estar preparada exactamente como lo pediste, o tal vez haya cambios si algo no estaba disponible. También puede venir con algún mensaje adicional, como "disfruta tu comida" o "aquí está tu factura".



*/
//Los controladores sirven para modularizar el codigo de las rutas, y para no hacerlo extenso. Es decir aca se agregara el contenido que nosotros queremos añadirle a las rutas.


//sirve para mostrar informacion

const usuariosGet = (req, resp =response)=>{

    const query = req.query // es una propiedad que permite al usuario añadir parametros en la url opcionales.
   
    //las querys van estar compuestas por "?" y luego le sigue nombre=aaa y para agregarle mas datos se usa & para separarlo se puede usar uno o dos.
   
    // ?query=pokemon&apikey=15892164&lenguaje=es
    
    resp.json({
        msg:"get api",
        query
    })
}


//Sirve para enviar informacion.
const usuariosPost = async(req, resp =response)=>{
    //IMPORTANTE: El objeto "req" contiene información sobre la solicitud realizada por el cliente al servidor. 

    const body = req.body //Aca la estamos diciendo que la informacion que nos estan enviando proviene del body.


    const creacionDeUsuario = await new Usuario(body) //el valor ingresado en el post se va almacenar en la configuracion de usuarios.


    //Encriptacion de contraseña recibida del post -> encriptada a la bases de datos.

    //paso 1 crear un salt

    const encrypt = bcryptjs.genSaltSync(10) //va ser una encrypt donde vamos determinar el numeros de caracteres que tendran el encript nomrlamente se deja asi que seria 10 default

    //paso 2 vincular el salta, con el dato recibido y encriptarlo.

    creacionDeUsuario.Contrasena = bcryptjs.hashSync(body.Contrasena, encrypt) //esto va encriptando de una sola via

    

    creacionDeUsuario.save() // esto permite que el usuario añadido en el post se guarde en la base de datos.



 
    resp.json({
        msg:"Post api",
        creacionDeUsuario
    })
}



//put sirve paa actualizar la informacion.
const usuariosPut = async(req, resp =response)=>{

    const { id } = req.params //esta es una propiedad que trae por defecto express para poder dar diferentes elementos que se agreguen despues del / por ejemplo en este caso diferentes ID.

    const {Contrasena, google, correo, ...resto} = req.body

    if(Contrasena){
    const encrypt = bcryptjs.genSaltSync(10) 
    resto.Contrasena = bcryptjs.hashSync(req.body.Contrasena, encrypt) 
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto) // es un metodo que permite podes buscar el ID en la base de datos. y el segundo es la  informacion que va estar actualizando, 
    
    //[[[es decir este metodo busca el ID y una vez buscado actualiza la informacion.]]] find -> BUSCA / ById -> EL ID / And -> Y / Update -> ACTUALIZA

    resp.json({
        msg:"put api",
        usuario
    })
}



export {usuariosGet, usuariosPost, usuariosPut};