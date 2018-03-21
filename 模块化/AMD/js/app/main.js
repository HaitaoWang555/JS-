define(function (require) {

  var messages = require('./messages');

  var print = require('mod/print');

  print(messages.getHello());
});