const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateInput(data) {
  let errors = {};

  data.description = !_.isEmpty(data.description) ? data.description : '';

  if (!Validator.isLength(data.description, { min: 2, max: 30 })) {
    errors.description = 'The description must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
