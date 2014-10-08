var Backbone = require('backbone');

var binaryTemplate = require('templates/binary.hbs');

var Stickit = require('backbone.stickit');

var Binary = Backbone.View.extend({

  template: binaryTemplate,

  bindings: {
    '#binary-input': {
      observe: 'binary',
      update: function($el, val, model, options) {
        var reformat = '';
        if (val !== '') {
          for (var i = 0; i < val.length; i += 4) {
            reformat += val.substr(i, 4) + ' ';
          }
        }
        $el.val(reformat);
      },
      getVal: function($el, event, options) {
        var val = $el.val().replace(/\s+/g, '');
        this.model.trigger('convert:binary2bytes', val);
        this.model.trigger('convert:binary2hex', val);
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
module.exports = Binary;
