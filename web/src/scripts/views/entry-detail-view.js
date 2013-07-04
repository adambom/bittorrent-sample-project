(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.View.prototype;

    App.EntryDetailView = Backbone.View.extend({
        
        template: App.tmpl.entryDetail,

        render: function () {
            this.$el.html(this.template(this.model.toJSON()))
                .find('.entry-detail')
                .addClass('showing');
                
            return this;
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));