var Backbone = require('backbone');
var Stickit = require('backbone.stickit');
var conv = require('binstring');

var bytesTemplate = require('templates/bytes.hbs');

var convertHex = require('convert-hex');

var Bytes = Backbone.View.extend({

  template: bytesTemplate,

  bindings: {
    '#bytes-input': {
      observe: 'bytes',

      update: function($el, val, model, options) {
        $el.val(val);
      },

      getVal: function($el, event, options) {
        var val = $el.val().replace(/\s+/g, '');
        this.model.trigger('convert:bytes2hex', val);
        this.model.trigger('convert:bytes2binary', val);
        return $el.val();
      }
    }
  },

  render: function() {
    this.$el.html(this.template());
    this.stickit();
    return this;
  }

});
module.exports = Bytes;
