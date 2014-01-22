
/**
 * Organization model test
 *
 * This test is a unit-test that only tests the model, not any interactions
 * with the API.
 */

var Organization = require('./model');

describe('Organization', function(){
  var org;

  before(function(done){
    org = new Organization({
      "login": "cargosafe",
      "name": "cargosafe",
      "email": "mail@cargosafe.com",
      "company": "cargosafe"
    });
    done();
  });

  it('should be located within api', function(done){
    Organization.url().should.startWith('/api');
    done();
  });

  it('should have a `created_at` timestamp', function(done){
    org.save(function(err){
      err.should.not.be.false;
      org.created_at().should.be.instanceof(Date);
      done();
    });
  });

});

