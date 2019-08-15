"use strict";
(function () {
    var cjs = require('./cjs');
    var addOne = function (x) { return x + 1; };
    addOne(cjs);
})();
