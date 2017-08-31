// © Andrew Wei

const chalk = require('chalk');
const JSDOM = require('jsdom').JSDOM;
const MathJax = require('mathjax-node/lib/mj-page');

const DEFAULT_CONFIG = {
  renderer: 'SVG',
  inputs: ['TeX']
};

module.exports = function(htmlString, options) {
  options = Object.assign(DEFAULT_CONFIG, options || {});

  return new Promise((resolve, reject) => {
    const window = new JSDOM(htmlString).window;
    
    MathJax.start();
    MathJax.typeset(Object.assign({
      html: window.document.body.innerHTML
    }, options), result => {
      window.document.body.innerHTML = result.html;
      const html = '<!DOCTYPE html>\n' + window.document.documentElement.outerHTML.replace(/^(\n|\s)*/, '');
      resolve(html);
    });
  });
}