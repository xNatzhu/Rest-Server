import mongoose from "mongoose"


const dbConnection = async()=>{
    //Al ser un elemento de bases de datos, puede fallar por ese motivo es importante añadir un try y catch

   
    try{


         //Paso 1. Conectar la db = mongoose.connect

        //Paso 2. Ingresar la url de conexion de la db.
        mongoose.connect(`mongodb+srv://user_node_natzu:Control2011@cluster0.nqiy5gm.mongodb.net/`,{
            // PASO 3. -> Se debe agregar unos objetos para poder completar el proceso:
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conexión exitosa a la base de datos');
        //esto esta regresando una promesa tipo mongoo, esta promesa quiere decir que va recibir un valor. En este caso se hizo aync la funcion pero se podia ver hecho el then y cath.

        



    }catch(error){
        console.log(error);
        throw new Error("Error a la hora de iniciar la bases de datos")
    }
}

export default dbConnection