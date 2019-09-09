const { describe, it } = require('mocha');
const mathjaxDOM = require('../');
const assert = require('assert');

describe('mathjax-dom', () => {
  it('can parse an HTML string', (done) => {
    const htmlString = `
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <p>\\(f(x)\\)</p>
          <p>\\(g(x)\\)</p>
          <p>$$
          g(x) \\equiv f(x){-}f_0
          \\int_{x_0}^{x_1} g(x)dx
          $$</p>
        </body>
      </html>
    `;

    mathjaxDOM(htmlString)
      .then(html => {
        assert(html.startsWith('<!DOCTYPE html>'));
        console.log(html);
        done();
      });
  });
});
