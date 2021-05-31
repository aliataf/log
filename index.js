'use strict';

module.exports = function log(x) {
    if (Object.prototype.toString.call(x) !== '[object Object]') {
        console.log(x);
    } else {
        for (var key in x) {
            console.log(key, '=', x[key]);
        }
    }
};