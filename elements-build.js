const fs = require('fs-extra');
const concat = require('concat');
const replace = require('replace-in-file');
(async function build() {
  const files = ['./web-panel/dist/runtime.js',
    './web-panel/dist/scripts.js',
    './web-panel/dist/main.js',
    './web-panel/dist/styles.js'
  ];
  await fs.ensureDir('./web-panel/dist/bundled');
  await concat(files, `./dist/web-panel.js`);

  const options = {
    files: './dist/web-panel.js',
    from: /webpackJsonp/g,
    to: 'webpackJsonp2',
  };
  replace(options);

})();