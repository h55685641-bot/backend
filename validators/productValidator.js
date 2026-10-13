const { body } = require('express-validator');

exports.createProductValidator = [
  body('name').optional({ checkFalsy: true }).trim(),
  body('description').optional({ checkFalsy: true }).trim(),
  body('price').optional({ checkFalsy: true }).isFloat({ min: 0 }),
  body('category').optional({ checkFalsy: true }).isMongoId(),
  body('sku').optional({ checkFalsy: true }).trim(),
  body('stock').optional({ checkFalsy: true }).isInt({ min: 0 }),
  body('subcategory').optional().trim(),
  body('videoUrl').optional({ checkFalsy: true }).trim().isURL().withMessage('Video URL must be a valid URL'),
];

exports.updateProductValidator = [
  body('name').optional().trim().notEmpty(),
  body('price').optional().isFloat({ min: 0 }),
  body('stock').optional().isInt({ min: 0 }),
  body('subcategory').optional().trim(),
  body('videoUrl').optional({ checkFalsy: true }).trim().isURL().withMessage('Video URL must be a valid URL'),
];
