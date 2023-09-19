const express = require('express') 
const router = express.Router();
const userController = require('../controllers/userController')
const {verifyToken} = require('../middleware/authenticationMiddleware') 

// READ
router.get('/:id') // Get User By ID API

router.get('/') // Get Users API

router.get('/:id') // Get User By ID API

router.get('/full', verifyToken, userController.sendLoggedInUser) // Get full User By ID API


// UPDATE
router.put('/:id') // Update User API

module.exports = router;