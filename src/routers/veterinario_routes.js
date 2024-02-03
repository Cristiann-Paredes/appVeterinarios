import verificarAutenticacion from '../middlewares/autenticacion.js'
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';

//IMPORTAR ROUTER DE EXPRESS
import {Router} from 'express'

//CREAR UNA INSTANCIA DE ROUTER
const router = Router()

//IMPORTAR LOS METODOS DEL CONTROLADOR 

import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";


//DEFINIR LAS RUTAS

//RUTAS PUBLICAS
//RUTA PARA EL LOGIN
//    VERBO   RUTA    METODO
router.post("/login", login);
//RUTA PARA EL REGISTRO
router.post('/registro',validacionVeterinario,registro)
//RUTA PARA LA CONFIRMACION DEL EMAIL
router.get("/confirmar/:token", confirmEmail);
//RUTA PARA LISTAR VETERINARIOS
router.get("/veterinarios", listarVeterinarios);
//RUTA PARA RECUPERAR EL PASSWORD
router.get("/recuperar-password", recuperarPassword);
//RUTA PARA RECUPERAR POR TOKEN
router.get("/recuperar-password/:token", comprobarTokenPasword);
//RUTA PARA GENERAR EL NUEVO PASSWORD
router.post("/nuevo-password/:token", nuevoPassword);



//RUTAS PRIVADAS
//RUTA PARA MOSTRAR EL PERFIL DRL USUARIO
//           RUTA          MIDDLEWAR      CONTROLADOR 
router.get('/perfil',verificarAutenticacion,perfil)
//RUTA PARA ACTUALIZAR EL PASSWORD
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
//RUTA PARA MOSTRAR DETALLE DE UN VETERINARIO PARTICULAR
router.get('/veterinario/:id',verificarAutenticacion,detalleVeterinario)
//RUTA PARA ACTUALIZAR UN VETERINARIO
router.put('/veterinario/:id',verificarAutenticacion,actualizarPerfil)



//EXPORTAR LA VARIABLE ROUTER 
export default router