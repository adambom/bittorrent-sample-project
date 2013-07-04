(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.Collection.prototype;

    App.Entries = Backbone.Collection.extend({

        model: App.Entry

    });

}(window.BIT, window.Backbone, window._, window.jQuery));