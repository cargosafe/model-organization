
# model-organization

  Model that's used with the organization-API

## Installation

  Install with [component(1)](//component.io):

    $ component install cargosafe/model-organization

  or [npm(1)](//nodejs.org):

## API

```javascript
// window._csrf has to contain a token
// The fields below are all required

var org = new Org({
  "name": "John Doe",
  "email": "john@doe.com"
});

// Save, will send a request to the API
// Note the callback!

org.save(fn(err));
```
## License

  MIT

