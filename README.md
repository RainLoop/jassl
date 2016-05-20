# JASSL

Just another simple script uploader

 [![Build Status](https://travis-ci.org/RainLoop/jassl.svg?branch=master)](https://travis-ci.org/RainLoop/jassl)

This is a simple javascript files loader that brings power of promises to us.
Note: Works only in browser!

## Installation

``` sh
npm install jassl
```

## Usage

```js
import jassl from 'jassl';

jassl('jquery.min.js').then(() => {
   $('#app').show();
});
```

or

```js
import jassl from 'jassl';

Promise.all([
   jassl('jquery.min.js'),
   jassl('common.min.js')
]).then(() => {
   return jassl('app.min.js');
}).then(() => {
   const app = new App();
   app.bootstrap();
});
```

## jassl(src, [async])

* `src` `{String}`
* `async` `{Boolean}` default: `true`
* return: `{Promise}`

## License

`jassl` is licensed under the [MIT License][mit-license-url].

[mit-license-url]: http://opensource.org/licenses/MIT