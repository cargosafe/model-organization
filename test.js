
/**
 * Test dependencies.
 */

var Org = require('./model');

describe('Org', function(){
  var org;

  before(function(done){
    org = new Org({
      "slug": "cargosafe",
      "name": "Cargosafe Systems A.S.",
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

  it('should have a slug', function(done){
    org.slug().should.be.exactly('cargosafe');
    done();
  });

});

