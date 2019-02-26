# mathjax-dom [![Circle CI](https://circleci.com/gh/andrewscwei/mathjax-dom/tree/master.svg?style=svg)](https://circleci.com/gh/andrewscwei/mathjax-dom/tree/master) [![npm version](https://badge.fury.io/js/mathjax-dom.svg)](https://badge.fury.io/js/mathjax-dom)

Prerenders all math equations over an entire HTML string using [MathJax](https://www.mathjax.org/).

## API

```js
/**
 * Parses an HTML string and prerenders all math equations using MathJax.
 *
 * @param {String} htmlString - HTML string to process.
 * @param {Object} [options] - Options for [`mathjax-node`](https://www.npmjs.com/package/mathjax-node)'s 
 *                             `./lib/mj-page.js`. If false, MathJax will be 
 *                             disabled.
 *
 * @return {Promise<String>} - Promise with the output HTML string as the 
 *                             fulfillment value.
 */
function mathjaxDOM(htmlString, options)
```

## Usage

This module crawls the HTML string for delimiters `\( ... \)` and `$$ ... $$`. You can override this in options. See options for [`mathjax-node`](https://www.npmjs.com/package/mathjax-node)'s `./lib/mj-page.js`.

Example:

```js
const mathjaxDOM = require('mathjax-dom');

mathjaxDOM(`<some_html>`, {})
  .then(htmlString => {
    // The output HTML string with all math equations prerendered.
    console.log(htmlString);
  })
  .catch(err => {
    throw err;
  });
});
```

## Disclaimer

This is an experimental project driven by internal requirements.
