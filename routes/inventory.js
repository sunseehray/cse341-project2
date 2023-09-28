const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory');

router
    .get('/', inventoryController.getAllItems)
    .get('/:id', inventoryController.getSingleItem)
    .post('/', inventoryController.createItem)
    .put('/:id', inventoryController.updateItem)
    .delete('/:id', inventoryController.deleteItem);

module.exports = router;