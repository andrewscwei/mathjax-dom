# MathJax DOM ![](https://img.shields.io/maintenance/no/2017) [![](https://img.shields.io/github/license/andrewscwei/mathjax-dom)](https://github.com/andrewscwei/mathjax-dom/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/mathjax-dom.svg)](https://www.npmjs.com/package/mathjax-dom) [![CircleCI](https://img.shields.io/circleci/build/github/andrewscwei/mathjax-dom.svg)](https://circleci.com/gh/andrewscwei/mathjax-dom)

Prerenders all math equations over an entire HTML string using [MathJax](https://www.mathjax.org/).

## API

```js
/**
 * Parses an HTML string and prerenders all math equations using MathJax.
 *
 * @param {String} htmlString - HTML string to process.
 * @param {Object} [pageOptions] - Options for [`mathjax-node-page`](https://github.com/pkra/mathjax-node-page)'s
 *                                 `mjpageConfig` object.
 * @param {Object} [nodeOptions] - Options for [`mathjax-node-page`](https://github.com/pkra/mathjax-node-page)'s
 *                                 `mjnodeConfig` object.
 *
 * @return {Promise<String>} - Promise with the output HTML string as the
 *                             fulfillment value.
 */
function mathjaxDOM(htmlString, pageOptions, nodeOptions)
```

## Usage

This module crawls the HTML string for delimiters `\( ... \)` and `$$ ... $$`. You can override this in options.

Example:

```js
const mathjaxDOM = require('mathjax-dom');

mathjaxDOM(`<some_html>`)
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
