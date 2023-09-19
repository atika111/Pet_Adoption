const express = require('express') 
const router = express.Router();
const petController = require('../controllers/petController')

// CREATE
router.post('/', petController.addPet) // Add Pet API

router.post('/:id/adopt') // Adopt/Foster API

router.post('/:id/return') // Return Pet API

router.post('/:id/save') // Save Pet API

// READ 
router.get('/:id') // Get Pet By ID API

router.get('/') // Get Pets API

router.get('/user/:id') // Get Pets By User ID API

// UPDATE
router.put('/:id') // Edit Pet API

// DELETE
router.delete('/:id/save') // Delete Saved Pet API

module.exports = router;