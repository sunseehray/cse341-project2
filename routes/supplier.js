const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplier');

router
    .get('/', supplierController.getAllSuppliers)
    .get('/:id', supplierController.getSingleSupplier)
    .post('/', supplierController.createSupplier)
    .put('/:id', supplierController.updateSupplier)
    .delete('/:id', supplierController.deleteSupplier);

module.exports = router;