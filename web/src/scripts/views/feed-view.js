(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.View.prototype;

    App.FeedView = Backbone.View.extend({

        template: App.tmpl.feed,

        initialize: function () {
            this.listenTo(this.model, 'sync', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            this.entryListView = new App.EntryListView({
                collection: this.model.get('entries'),
                el: this.$('#entries')
            });

            this.entryListView.render();
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));