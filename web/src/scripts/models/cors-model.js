(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.Model.prototype;

    // Override default model.fetch behavior to allow jsonp
    App.CorsModel = Backbone.Model.extend({

        fetch: function (options) {
            options = options || {};
            options.dataType = 'jsonp';
            __super__.fetch.call(this, options);
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));