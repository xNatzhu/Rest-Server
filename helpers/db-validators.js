//Importamos el Role ya que la validacion se van ejecutar a traves de esta importacion que buscara 1 x 1 si existe.

import Role from "../db/rol.js";

//Agregamos en helpers esta funcion para no estar copiando y pegando, y solo enviar la funcion establecida en el custom.


const esRoleValido = async (rol="")=>{ //el custom sirve que va estar buscando un dato personalizado en la base de datos -----
    const existeRol = await Role.findOne({rol}) // findOne va buscar de Roles uno por uno, si existe el rol añadido como parametro.
    if( !existeRol ){
        throw new Error(`Hay un error ${rol} no se encuentra en la base de datos`)
    }
}



export {esRoleValido} 