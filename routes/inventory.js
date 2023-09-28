const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventory');

router
    .get('/', inventoryController.getAll)
    .get('/:id', inventoryController.getSingle)
    .post('/', inventoryController.createItem)
    .put('/:id', inventoryController.updateItem)
    .delete('/:id', inventoryController.deleteItem);

module.exports = router;