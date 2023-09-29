const { body, validationResult } = require('express-validator');

// Validation middleware
const validateItem = () => {
  return [
    body('name').notEmpty().isString().withMessage('Name is required and must be a string'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('unit').notEmpty().isString().withMessage('Unit must be a string'),
    body('unit_weight').notEmpty().isFloat().withMessage('Unit weight must be a float'),
    body('unit_cost').notEmpty().isFloat().withMessage('Unit cost is required and must be a float'),
    body('stock').notEmpty().isFloat().withMessage('Stock is required and must be a float'),
    body('sku').notEmpty().isString().withMessage('sku is required and must be a string'),
  ]
} 

const validateSupplier = () => {
  return [
    body('supplier').notEmpty().isString().withMessage('Supplier is required and must be a string'),
    body('address').optional().isString().withMessage('Address must be a string'),
    body('phone').optional().isString().withMessage('Phone must be a string'),
    body('url').optional().isURL().withMessage('URL must be a valid URL')
  ]
}
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  validateItem,
  validateSupplier,
  validate
}