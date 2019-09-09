const { mjpage, JSDOM } = require('mathjax-node-page');

const DEFAULT_CONFIG = {
  format: ['TeX'],
};

module.exports = function(htmlString, pageOptions = {}, nodeOptions = {}) {
  return new Promise((resolve, reject) => {
    const window = new JSDOM(htmlString).window;
    const innerHTML = window.document.body.innerHTML;

    mjpage(window.document.body.innerHTML, {
      ...DEFAULT_CONFIG,
      ...pageOptions,
    }, {
      svg: true,
      ...nodeOptions,
    }, result => {
      window.document.body.innerHTML = result;
      const html = '<!DOCTYPE html>\n' + window.document.documentElement.outerHTML.replace(/^(\n|\s)*/, '');
      resolve(html);
    });
  });
};
