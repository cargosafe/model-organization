
/**
 * Module dependencies.
 */

var model = require('model');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');
var csrf = require('model-csrf');

/**
 * Phone-number validation.
 * PS. Very loose validation that is!
 */

function isPhone(str){
  str = str.replace(/[^0-9x\+]*/g, '').replace('x', '00');
  return str.length > 5 && str.length < 16;
}

/**
 * Organization model.
 * @see https://github.com/component/model
 */

var Organization = module.exports = model('Organization')
  .use(csrf)
  .use(timestamps)
  .route('/api/orgs/')
  .attr('name', {required: true, type: 'string'})
  .attr('photo', {validate: isUrl})
  .attr('email', {required: true, validate: isEmail})
  .attr('phone', {type: 'string', validate: isPhone});

