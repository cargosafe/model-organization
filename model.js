
/**
 * Module dependencies.
 */

var model = require('model');
var isEmail = require('is-email');
var isUrl = require('is-url');
var timestamps = require('model-timestamps');
var csrf = require('model-csrf')();

function isPhone(str){
  str = str.replace(/[^0-9x\+]*/g, '').replace('x', '00');
  return str.length > 5 && str.length < 16;
}

function isSlug(slug){
  return slug.match(/^[a-z0-9-_]*$/) && slug.length > 3;
}

/**
 * Organization model.
 * @see https://github.com/component/model
 */

var Org = module.exports = model('Org')
  .use(csrf)
  .use(timestamps)
  .attr('slug', {required: true, validate: isSlug})
  .attr('name', {required: true, type: 'string'})
  .attr('email', {required: true, validate: isEmail})
  .attr('phone', {validate: isPhone})
  .attr('photo', {validate: isUrl});

