import { body } from 'express-validator';

export const validateUserInfo = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('username cannot be empty')
    .bail()
    .isLength({ min: 4, max: 20 })
    .withMessage('username must be 4-20 characters')
    .bail()
    .isAlphanumeric()
    .withMessage('name cannot contain special characters'),

  body('bio')
    .trim()
    .notEmpty()
    .withMessage('bio cannot be empty')
    .bail()
    .isLength({ min: 4, max: 300 })
    .withMessage('bio must be 4-300 characters')
    .bail()
    .isAlphanumeric()
    .withMessage('bio cannot contain special characters'),
];
