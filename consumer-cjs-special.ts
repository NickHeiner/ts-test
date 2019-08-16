import cjs = require('./cjs-special');

(function() {
  
  const addOne = (x: number) => x + 1;
  
  addOne(cjs);
})();