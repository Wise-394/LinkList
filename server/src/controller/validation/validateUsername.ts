import { body } from 'express-validator';
export const validateUsername = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username cannot be empty')
    .bail()
    .isAlphanumeric()
    .withMessage('username cannot contain special characters')
    .bail()
    .isLength({ min: 4, max: 10 })
    .withMessage('username must be 4-10 characters'),
];
