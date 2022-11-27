import { pathExists } from 'path-exists';

import utils from './utils';


(async () => {
  console.log(await pathExists('foo.js'), 'foo.js');
  //=> true
})();

utils();