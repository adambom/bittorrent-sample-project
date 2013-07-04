(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.View.prototype;

    App.EntrySummaryView = Backbone.View.extend({
        
        template: App.tmpl.entrySummary,

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));