(function() {
  const cjs = require('./cjs');
  
  const addOne = (x: number) => x + 1;
  
  addOne(cjs);
})();