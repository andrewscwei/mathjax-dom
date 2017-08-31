# mathjax-dom [![Circle CI](https://circleci.com/gh/andrewscwei/mathjax-dom/tree/master.svg?style=svg)](https://circleci.com/gh/andrewscwei/mathjax-dom/tree/master) [![npm version](https://badge.fury.io/js/mathjax-dom.svg)](https://badge.fury.io/js/mathjax-dom)

Prerenders all math equations over an entire HTML string using [MathJax](https://www.mathjax.org/).

## API

```js
/**
 * @param {String} htmlString - HTML string to process.
 * @param {Object} [options] - Options for [`mathjax-node`](https://www.npmjs.com/package/mathjax-node)'s 
 *                             `./lib/mj-page.js`. If false, MathJax will be 
 *                             disabled.
 * @param {Function} done - Method invoked when prerendering completes or fails. 
 *                          The error (if any) will be the first param and the 
 *                          output HTML string will be the second param.
 */
function mathjaxDOM(htmlString, options, done)
```

## Usage

This module crawls the HTML string for delimiters `\( ... \)` and `$$ ... $$`. You can override this in options. See options for [`mathjax-node`](https://www.npmjs.com/package/mathjax-node)'s `./lib/mj-page.js`.

Example:

```js
const mathjaxDOM = require('mathjax-dom');

mathjaxDOM(`<some_html>`, {}, (error, htmlString) => {
  if (error) throw error;

  // The output HTML string with all math equations prerendered.
  console.log(htmlString);
});
```

## Disclaimer

This is an experimental project driven by internal requirements.

## License

This software is released under the [MIT License](http://opensource.org/licenses/MIT).
