import { Schema, model } from "mongoose";

const usuarioSchema = Schema({
    //modelo de la base de datos de usuarios - creando el modelo
    nombre:{
        type:String,
        require:[true, "El nombre es obligatorio"]
    },
    correo:{
        type:String,
        require:[true, "El nombre es obligatorio"],
        unique:true, //permite que mongo no inserta correctos duplicados.
    },
    Contrasena:{
        type:String,
        require:[true, "La contraseña es obligatorio"]
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        emun:["ADMIN_ROLE", "USER_ROLE"]//emun -> si ustedes quierne validar por medio de una numeracion "admin_role","user_role" para poder asignar un rol.

    },
    estado:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    }
})

export default model("usuario",usuarioSchema) //mongo por defecto le va poner la s a la coleccion

//el model lo que sirve es para poder exportar el modelo a la base de datos se agrega el nombre y el esquema.