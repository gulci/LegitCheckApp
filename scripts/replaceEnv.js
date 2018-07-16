/*
  Usage:
  npm run-script insert-production-values
  npm run-script insert-placeholder-values
*/

const fs = require('fs');

const CURRENT_REPLACEMENT_TYPE = process.argv[2];
const ENV_TYPE = process.argv[3];

let myEnv = require('../.env');

if (ENV_TYPE === 'ci') {
  myEnv = process.env;
}

const IOS_INFO_PLIST_PATH = './ios/LegitCheckApp/Info.plist';
const ANDROID_MANIFEST_PATH = './android/app/src/main/AndroidManifest.xml';

const { BUGSNAG_KEY } = myEnv;

if (CURRENT_REPLACEMENT_TYPE === 'production' || CURRENT_REPLACEMENT_TYPE === 'placeholder') {
  // Info.plist
  makeReplacements(IOS_INFO_PLIST_PATH, CURRENT_REPLACEMENT_TYPE, [
    { prodVal: BUGSNAG_KEY, phVal: 'PLACEHOLDER' },
  ]);

  // AndroidManifest.xml
  makeReplacements(ANDROID_MANIFEST_PATH, CURRENT_REPLACEMENT_TYPE, [
    { prodVal: BUGSNAG_KEY, phVal: 'PLACEHOLDER' },
  ]);
} else {
  console.log('Error: Replacement type not specififed');
  console.log('Sample Usage: npm run-script [insert-production-values|insert-placeholder-values]');
}

function makeReplacements(FILE_PATH, REPLACEMENT_TYPE, REPLACEMENTS) {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    for (let i = 0; REPLACEMENTS.length > i; i += 1) {
      if (REPLACEMENT_TYPE === 'production') {
        data = data.replace(REPLACEMENTS[i].phVal, REPLACEMENTS[i].prodVal);
      } else if (REPLACEMENT_TYPE === 'placeholder') {
        data = data.replace(REPLACEMENTS[i].prodVal, REPLACEMENTS[i].phVal);
      }
    }

    fs.writeFile(FILE_PATH, data, 'utf8', (writeErr) => {
      if (writeErr) {
        return console.log(writeErr);
      }
      console.log('SUCCESS: File ' + FILE_PATH + ' updated with ' + REPLACEMENT_TYPE + ' values.');
    });
  });
}
