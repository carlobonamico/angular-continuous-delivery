//var pc = require('protractor-cucumber');

var steps = function() {

  this.After(function(callback) {
    callback();

  });
};

module.exports = steps;
