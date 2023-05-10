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
const usuariosPost = (req, resp =response)=>{
    //IMPORTANTE: El objeto "req" contiene información sobre la solicitud realizada por el cliente al servidor. 

    const {nombre, apellido} = req.body //Aca la estamos diciendo que la informacion que nos estan enviando proviene del body.
    //req ->
    resp.json({
        msg:"Post api",
        nombre,
        apellido,
    })
}


//put sirve paa actualizar la informacion.
const usuariosPut = (req, resp =response)=>{

    const { id } = req.params //esta es una propiedad que trae por defecto express para poder dar diferentes elementos que se agreguen despues del / por ejemplo en este caso diferentes ID.

    resp.json({
        msg:"put api",
        id
    })
}



export {usuariosGet, usuariosPost, usuariosPut};