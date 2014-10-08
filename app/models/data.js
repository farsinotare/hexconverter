var Backbone = require('backbone');

var conv = require('binstring');

var Data = Backbone.Model.extend({

  defaults: {
    ascii: '',
    bytes: '',
    binary: '',
    hex: ''
  },

  bytes2hex: function(str) {
    var hex = '';
	for(var i=0; i<str.length;i++) {
		hex += '' + str.charCodeAt(i).toString(16);
	}
    this.set('hex', hex);
  },

  hex2ascii: function(hex) {
    if (hex !== "") {
      var val = convert(hex.slice(2), {out: 'utf-8'});
      this.set('ascii', val);
    } else {
      this.set('ascii', '');
    }
  },

  hex2bytes: function(hex) {
    if (hex !== "") {
      var val = parseInt(hex, 16);
      this.set('bytes', val);
    } else {
      this.set('bytes', '');
    }
  },

  checkHex: function(n) {
    return /^[0-9A-Fa-f]{1,64}$/.test(n)
  },

  hex2binary: function(hex) {
    if (hex !== "") {
      var val = parseInt(hex, 16);
      this.set('binary', val.toString(2));
    } else {
      this.set('binary', '');
    }
  },

  checkBin: function(n) {
    return/^[01]{1,64}$/.test(n)
  },

  binary2hex: function(bin) {
    if (!this.checkBin(bin)) return;
    this.set('hex', parseInt(bin, 2).toString(16));
  },

  binary2bytes: function(bin) {
    var dec = parseInt(bin, 2);
    this.set('bytes', dec);
  },

  bytes2binary: function(bytes) {

  },

  initialize: function() {
    this.on('convert:bytes2hex', function(v) { this.bytes2hex(v) });
    this.on('convert:bytes2binary', function(v) { this.bytes2binary(v) });
    this.on('convert:binary2hex', function(v) { this.binary2hex(v) }); 
    this.on('convert:binary2bytes', function(v) { this.binary2bytes(v) });
    this.on('convert:hex2bytes', function(v) { this.hex2ascii(v) });
    this.on('convert:hex2binary', function(v) { this.hex2binary(v) });
  }

});
module.exports = Data;
