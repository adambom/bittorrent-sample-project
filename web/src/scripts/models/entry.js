(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.Model.prototype;

    App.Entry = Backbone.Model.extend({

        idAttribute: 'link'

    });

}(window.BIT, window.Backbone, window._, window.jQuery));