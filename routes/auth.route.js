const router = require('express').Router();
const { authController } = require('../controllers');
const { payloadValidation } = require('../middlewares');
const { login, register } = require('../schemas');

router.post('/register', payloadValidation(register), authController.register);
router.post('/login', payloadValidation(login), authController.login);

module.exports = router;