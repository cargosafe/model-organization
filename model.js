
/**
 * Module dependencies.
 */

var model = require('model');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');

/**
 * Organization model.
 * @see https://github.com/component/model
 */

var Organization = module.exports = model('Organization')
  .use(timestamps)
  .route('/api/orgs/')
  .attr('login', {required: true, type: 'string'})
  .attr('name', {required: true, type: 'string'})
  .attr('email', {required: true, validate: isEmail})
  .attr('company', {required: true, type: 'string'})
  .attr('photo', {validate: isUrl})
  .attr('phone', {type: 'number'});

