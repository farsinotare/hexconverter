var $ = require('jquery-untouched');
var Backbone = require('backbone');
Backbone.$ = $;

var Data = require('models/hex2bin');
var Hex2Bin = require('views/hex2bin');
var Bin2Hex = require('views/binary');

var InfoView = require('views/infoView');
// var BytesView = require('views/bytes');

var h2bData = new Data();

$(document).ready(function() {

  var hex2binView = new Hex2Bin({el: $('#hex2bin-hex'), model: h2bData});
  var bin2hexView = new Bin2Hex({el: $('#hex2bin-bin'), model: h2bData});
  var info = new InfoView({el: $('#info'), model: h2bData});

  hex2binView.render();
  bin2hexView.render();
  info.render();

});

