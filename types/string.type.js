
const Type = require('./type');

function maxStringValidator(maxLength) {
  return str => str.length < maxLength;
}

function minStringValidator(minLength) {
  return str => str.length > minLength;
}

function stringValidator(str) {
  return typeof str === 'string';
}

class StringType extends Type {
  constructor() {
    super();
    this.validators.push(stringValidator);
  }

  min(minLength) {
    this.validators.push(minStringValidator(minLength));
    return this;
  }

  max(maxLength) {
    this.validators.push(maxStringValidator(maxLength));
    return this;
  }

  get notEmpty() {
    this.validators.push(minStringValidator(0));
    return this;
  }
}

module.exports = StringType;
