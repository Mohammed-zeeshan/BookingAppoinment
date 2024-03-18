const express = require('express');

const router = express.Router();

const path = require('path');

const adminController = require('../controllers/user-controller');

router.get('/', adminController.getuser);
router.get('/user/add-user', adminController.getpostuser);
router.post('/user/add-user', adminController.postuser);
router.post('/user/delete', adminController.deleteusers);

module.exports = router;