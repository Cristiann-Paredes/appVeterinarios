import Tratamiento from "../models/Tratamiento.js"
import mongoose from "mongoose";



//METODO PARA VER EL DETALLE DE EL TRATAMIENTO

const detalleTratamiento = async(req,res)=>{
    const {id} = req.params
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`});
    const tratamiento = await Tratamiento.findById(id).populate('paciente','_id nombre')
    res.status(200).json(tratamiento)
}


//METODO PARA REGISTRAR EL TRATAMIENTO
const registrarTratamiento = async (req,res)=>{
    const {paciente} = req.body
    if( !mongoose.Types.ObjectId.isValid(paciente) ) return res.status(404).json({msg:`Lo sentimos, debe ser un id válido`});
    const tratamiento = await Tratamiento.create(req.body)
    res.status(200).json({msg:`Registro exitoso del tratamiento ${tratamiento._id}`,tratamiento})
}


//METODO PARA ACTUALIZAR EL TRATAMIENTO
const actualizarTratamiento = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe el tratamiento ${id}`})
    await Tratamiento.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del tratamiento"})
}

//METODO PARA ELIMINAR EL TRATAMIENTO
const eliminarTratamiento = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if( !mongoose.Types.ObjectId.isValid(id) ) return res.status(404).json({msg:`Lo sentimos, no existe ese tratamiento`})
    await Tratamiento.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Tratamiento eliminado exitosamente"})
}


//METODO PARA CAMBIAR EL TRATAMIENTO
const cambiarEstado = (req,res)=>{
    res.send("Cambiar estado del tratamiento")
}

export {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
}