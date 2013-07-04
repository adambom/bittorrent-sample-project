(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.View.prototype;

    App.EntryListView = Backbone.View.extend({

        template: App.tmpl.entryList,

        render: function () {
            this.list = this.collection.map(function (entry) {
                return (new App.EntrySummaryView({
                    model: entry
                })).render().$el.html();
            });

            this.$el.html(this.list.join(''));
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));