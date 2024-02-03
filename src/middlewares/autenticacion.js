//IMPORTAR JWT Y MODELO
import jwt from 'jsonwebtoken'
import Veterinario from '../models/Veterinario.js'
import Paciente from '../models/Paciente.js'

//METODO PARA PROTEGER RUTAS
const verificarAutenticacion = async (req,res,next)=>{

//VALIDACION SI SE ESTA ENVIANDO EL TOKEN     
if(!req.headers.authorization) return res.status(404).json({msg:"Lo sentimos, debes proprocionar un token"})    

//DESESTRUCTURAR EL TOKEN DEL HEADERS    
const {authorization} = req.headers



    try {
        //VERIFICAR EL TOKEN RECUPERADO CON EL ALMACENADO
        const {id,rol} = jwt.verify(authorization.split(' ')[1],process.env.JWT_SECRET)
        //VERIFICAR EL ROL
        if (rol==="veterinario"){
            //OBTENER EL USUARIO
            req.veterinarioBDD = await Veterinario.findById(id).lean().select("-password")
            //PARA QUE CONTINUE EL PROCESO
            next()
        }
        else{
            req.pacienteBDD = await Paciente.findById(id).lean().select("-password")
            next()
        }
    } catch (error) {
        //CAPTURAR Y PRESENTAR ERRORES
        const e = new Error("Formato del token no válido")
        return res.status(404).json({msg:e.message})
    }
}

//EXPORTAR EL METODO
export default verificarAutenticacion

