
# model-organization

  Model that's used with the organization-API

## Installation

  Install with [component(1)](//component.io):

    $ component install cargosafe/model-organization

  or [npm(1)](//nodejs.org):

    $ npm install cargosafe/model-organization

## API

```javascript
// The fields below are all required

var org = new Org({
  "oilers",
  "name": "Oil company",
  "email": "some@oil.com"
});

// Save, will send a request to the API
// Note the callback!

org.save(fn(err));
```
## License

  MIT

