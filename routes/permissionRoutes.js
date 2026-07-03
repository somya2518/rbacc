const express = require('express');
const router = express.Router();
const permissionController = require('../controller/permissionController');
const mockAuth = require('../middlewear/mockAuth');
const checkPermission = require('../middlewear/checkPermission');

// Protected routes: authenticate with mockAuth then authorize with checkPermission
router.post('/', mockAuth, checkPermission, permissionController.createPermission);
router.get('/', permissionController.getPermissions);
router.get('/:id', permissionController.getPermission);
router.put('/:id', mockAuth, checkPermission, permissionController.updatePermission);
router.delete('/:id', mockAuth, checkPermission, permissionController.deletePermission);

module.exports = router;
