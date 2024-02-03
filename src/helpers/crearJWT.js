
import jwt from "jsonwebtoken";


//             pasamos el id, rol
const generarJWT = (id,rol)=>{
    return jwt.sign({id,rol},process.env.JWT_SECRET,{expiresIn:"1d"})
}
// priemro emcripta usa el token y expira


export default  generarJWT