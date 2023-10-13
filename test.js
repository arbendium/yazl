/* eslint-disable no-console */
import fs from 'fs';
import ZipFile from './index.js';

const zipfile = new ZipFile();

zipfile.on('error', console.error);

const options = { compress: false, forceZip64Format: false };

zipfile.pipe(fs.createWriteStream('test.zip'));

zipfile.addFile('test.txt', 'koer1', options).catch(() => {});
zipfile.addBuffer(fs.readFileSync('test.txt'), 'koer2', options).catch(() => {});
zipfile.addReadStream(fs.createReadStream('test.txt'), 'koer3', options).catch(() => {});
zipfile.addReadStream(fs.createReadStream('test.txt'), 'koer4', options).catch(() => {});
zipfile.addEmptyDirectory('koer5').catch(() => {});
zipfile.addReadStream(fs.createReadStream('test.txt'), 'koer6/koer7', options).catch(() => {});

console.log('Done: ', await zipfile.end({ comment: 'asdasd' }).catch(() => {}));
