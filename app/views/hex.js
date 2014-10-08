var Backbone = require('backbone');
var $ = Backbone.$;

var Stickit = require('backbone.stickit');

var hexTemplate = require('templates/hex.hbs');

//var conv = require('binstring');
var convertHex = require('convert-hex');

var Hex = Backbone.View.extend({

  template: hexTemplate,

  bindings: {
    '#hex-input': {
      observe: 'hex',
      update: function($el, val, model, options) {
        var reformat = '';
        if (val !== '') {
          for (var i = 0; i < val.length; i += 2) {
            reformat += val.substr(i, 2) + ' ';
          }
        }
        $el.val(reformat);
      },
      getVal: function($el, event, options) {
        var val = $el.val().replace(/\s+/g, '');
        this.model.trigger('convert:hex2bytes', $el.val());
        this.model.trigger('convert:hex2binary', $el.val());
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
    this.listenTo(this.model, 'converted:hex', this.render);

  }

});
module.exports = Hex;
