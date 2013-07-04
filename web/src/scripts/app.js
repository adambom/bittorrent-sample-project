(function (App, Backbone, _, $, undefined) {

    $(function () {
        App.router = new App.MainRouter();
        Backbone.history.start();
    });

}(window.BIT, window.Backbone, window._, window.jQuery));