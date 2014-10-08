var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var Data = require('models/data');
var HexView = require('views/hex');
var BinaryView = require('views/binary');
var BytesView = require('views/bytes');

var data = new Data();

$(document).ready(function() {

  var hexView = new HexView({el: $('#hex'), model: data});
  var binaryView = new BinaryView({el: $('#binary'), model: data});
  var bytesView = new BytesView({el: $('#bytes'), model: data});

  h2bView.render();
  d2h.render();

});

