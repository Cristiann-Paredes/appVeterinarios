//IMPORTAR MONGOS
import mongoose from 'mongoose'

//PERMITE QUE SOLO LOS ACAMPOS DEFINIDOS DE EL SCHEMA SEAN ALMACENADOS
//enn LA BDD
mongoose.set('strictQuery', true)

//CREAR UNA FUNCION LLAMADA CONNECCTION
const connection = async()=>{
    try {
        //ESTABLECER LA CONEXION CON LA BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        //PRESENTAR LA CONEXION EN LA CONSOLA
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        //CAPTURAR EL ERROR DE LA CONEXION
        console.log(error);
    }
}

//EXPORTAR LA FUNCION
export default  connection