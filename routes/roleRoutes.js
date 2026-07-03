const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController');
const mockAuth = require('../middlewear/mockAuth');
const checkPermission = require('../middlewear/checkPermission');

router.post('/', mockAuth, checkPermission, roleController.createRole);
router.get('/', roleController.getRoles);
router.get('/:id', roleController.getRole);
router.put('/:id', mockAuth, checkPermission, roleController.updateRole);
router.delete('/:id', mockAuth, checkPermission, roleController.deleteRole);

module.exports = router;
