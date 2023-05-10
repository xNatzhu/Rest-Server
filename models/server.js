import express from "express"
import cors from "cors"
import router from "../routes/user.js";


class Server{
    constructor(){
        this.app = express();
        //En Node.js, los middlewares son funciones que se utilizan para procesar las solicitudes HTTP o las respuestas HTTP antes de que sean manejadas por la aplicación principal. 
        
        this.usuarioPath = "/api/usuarios" //de esta manera sera mas facil gestionar los cambios y modificaciones de rutas.
        this.middlewares()
        this.routing()
        this.port = process.env.PORT || 3000;
        

    }

    routing(){
        this.app.use(this.usuarioPath, router);

        //este middlewares es que cuando la peticion pase por ahi, le añadira esa ruta es como un condicional.<
    }

    middlewares(){
        //En Node.js, CORS se puede utilizar para permitir que una aplicación web construida con Node.js permita solicitudes de recursos de origen cruzado desde otros dominios. Al utilizar el paquete cors en Node.js, se pueden configurar las opciones de CORS para permitir o denegar solicitudes de origen cruzado y especificar los encabezados que se permiten en las solicitudes. Esto es útil para aplicaciones que necesitan acceder a recursos en diferentes dominios, como APIs o recursos de terceros, mientras se asegura que se mantienen los niveles adecuados de seguridad y privacidad.

        this.app.use(cors())

        //Para recibir la informacion  enviada mediante un post/delete tenemos que especificar de que formato queremos hacer que esa informacion recibida sea colocada por ejemplo xml, json, ect.

        this.app.use(express.json()) // de esta manera se serializa la infomacion enviada y se trasforma en un json.
        /* 
        Ir a controlador post - para saber que sucede.
        */


        this.app.use(express.static("public"));
    }

    listen(){
        this.app.listen(this.port);
    }

}

export default Server