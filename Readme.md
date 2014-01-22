
# model-organization

  Model that's used with the organization-API

## Installation

  Install with [component(1)](http://component.io):

    $ component install cargosafe/model-organization

## API

```javascript
// The fields below are all required

var org = new Organization({
  "login": "johndoe",
  "name": "John Doe",
  "email": "john@doe.com",
  "company": "Unknown company"
});

// Save, will send a request to the API
// Note the callback!

org.save(fn(err));
```
## License

  MIT

