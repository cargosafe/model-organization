
/**
 * Test dependencies.
 */

var Organization = require('./model');

describe('Organization', function(){
  var org;

  before(function(done){
    org = new Organization({
      "name": "cargosafe",
      "email": "mail@cargosafe.com",
      "token": "No cross-site scripting bull"
    });
    done();
  });

  it('should be located at /api/orgs', function(done){
    Organization.url().should.be('/api/orgs');
    done();
  });

  it('should have a `created_at` timestamp', function(done){
    org.save(function(err){
      org.created_at().should.be.instanceof(Date);
      done();
    });
  });

  it('should have a csrf-token', function(done){
    org.save(function(err){
      org.token().should.not.be.empty;
      done();
    });
  });

});

