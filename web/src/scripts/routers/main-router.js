(function (App, Backbone, _, $, undefined) {

    var __super__ = Backbone.Router.prototype;

    App.MainRouter = Backbone.Router.extend({
        
        routes: {
            '': 'index',
            '/': 'index',
            'entry/*id': 'entry'
        },

        ready: false,

        isScrollAble: false,

        initialize: function () {
            this.$el = $('#content');
            App.feed = App.feed || new App.Feed();
            this.listenToOnce(App.feed, 'sync', this.designateReady);
            App.feed.fetch();
            this.infiniteScroll(App.feed);
        },

        designateReady: function () {
            this.ready = true;
        },

        index: function () {
            this.isScrollAble = true;

            this.view = new App.FeedView({
                model: App.feed,
                el: this.$el
            });

            if (this.ready) {
                this.view.render();
            }
        },

        entry: function (id) {
            if (!this.ready) return setTimeout(_.bind(this.entry, this, id), 50);

            this.isScrollAble = false;

            var entry = App.feed.get('entries').get(id);

            if (!entry) {
                return this.r404();
            }

            this.view = new App.EntryDetailView({
                model: entry,
                el: this.$el
            });

            this.view.render();
        },

        r404: function () {
            this.isScrollAble = false;
            this.$el.html('<h1>404 Not Found</h1>');
        },

        infiniteScroll: _.once(function (model) {
            var that = this;

            $(window).scroll(function() {
                if($(window).scrollTop() + $(window).height() == $(document).height()) {
                    if (that.isScrollAble) {
                        model.trigger('infinite');
                    }
                }
            });
        })

    });

}(window.BIT, window.Backbone, window._, window.jQuery));