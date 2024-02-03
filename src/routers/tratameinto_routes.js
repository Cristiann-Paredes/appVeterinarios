import {Router} from 'express'
const router = Router()
import verificarAutenticacion from "../middlewares/autenticacion.js";


import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";



router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)
router
    .route('/tratamiento/:id')
    .get(verificarAutenticacion,detalleTratamiento)
    .put(verificarAutenticacion,actualizarTratamiento)
    .delete(verificarAutenticacion,eliminarTratamiento)

router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)

export default router