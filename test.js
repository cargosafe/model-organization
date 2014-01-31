
/**
 * Test dependencies.
 */

window = {};
window._csrf = 'some token';
var Org = require('./model');

describe('Org', function(){
  var org;

  it('should require a CSRF-token', function(done){
    org = new Org({
      "name": "cargosafe",
      "email": "mail@cargosafe.com"
    });
    done();
  });

  it('should be located at /orgs', function(done){
    Org.url().should.be.startWith('/orgs');
    done();
  });

  it('should be timestamped', function(done){
    org.save(function(err){
      org.created_at().should.be.instanceof(Date);
      org.updated_at().should.be.instanceof(Date);
      done();
    });
  });

});

