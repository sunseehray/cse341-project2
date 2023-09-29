const express = require('express');
const router = express.Router();
const { validateSupplier, validate } = require('../middleware/validate');

const supplierController = require('../controllers/supplier');

router
    .get('/', supplierController.getAllSuppliers)
    .get('/:id', supplierController.getSingleSupplier)
    .post('/', validateSupplier(), validate, supplierController.createSupplier)
    .put('/:id', validateSupplier(), validate, supplierController.updateSupplier)
    .delete('/:id', supplierController.deleteSupplier);

module.exports = router;