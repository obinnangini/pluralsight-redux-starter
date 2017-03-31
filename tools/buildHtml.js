import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */

fs.readFile(path.resolve(__dirname, '../src/index.html'), 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }
  const $ = cheerio.load(markup);

  // since a separate stylesheet is only utilized for the production build, need to dynamically add the reference to it

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile(path.resolve(__dirname, '../dist/index.html'), $.html(), 'utf8', ()=> {
    if (err) {
      console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});
