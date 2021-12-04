/* Event Routes
/api/events
*/

const {Router} = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

//Todas debe pasar por valiacion de JWT

router.use( validarJWT );

//Crear un nuevo evento
router.post('/',[
    check('title', 'el titulo es obligatiorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligtorio').custom(isDate),
    check('end', 'Fecha de inicio es obligtorio').custom(isDate),
    validarCampos
] ,crearEvento);


//Actualizar evento
router.put('/:id', [
    check('title', 'el titulo es obligatiorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligtorio').custom(isDate),
    check('end', 'Fecha de inicio es obligtorio').custom(isDate),
    validarCampos
], actualizarEvento);


//Obtener eventos

router.get('/', getEventos);


//Eliminar evento

router.delete('/:id' ,eliminarEvento);



module.exports = router;










