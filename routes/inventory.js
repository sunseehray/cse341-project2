const express = require('express');
const router = express.Router();
const { validateItem, validate } = require('../middleware/validate');

const inventoryController = require('../controllers/inventory');

router
    .get('/', inventoryController.getAllItems)
    .get('/:id', inventoryController.getSingleItem)
    .post('/', validateItem(), validate, inventoryController.createItem)
    .put('/:id', validateItem(), validate, inventoryController.updateItem)
    .delete('/:id', inventoryController.deleteItem);

module.exports = router;