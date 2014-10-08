var Backbone = require('backbone');
var Stickit = require('backbone.stickit');
var conv = require('binstring');

var asciiTemplate = require('templates/ascii.hbs');

var convertHex = require('convert-hex');

var Ascii = Backbone.View.extend({

  template: asciiTemplate,

  bindings: {
    '#ascii-input': {
      observe: 'ascii',
      getVal: function($el, event, options) {
        this.model.trigger('convert:ascii2hex', $el.val());
        this.model.trigger('convert:ascii2binary', $el.val());
        return $el.val();
      }
    }
  },

  render: function() {
    this.$el.html(this.template());
    this.stickit();
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'all', function(e) { console.log(e) });
  }

});
module.exports = Ascii;
