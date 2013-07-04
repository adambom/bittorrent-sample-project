(function (App, Backbone, _, $, undefined) {

    var __super__ = App.CorsModel.prototype;

    // FEED MEE!

    App.Feed = App.CorsModel.extend({

        defaults: {
            feedUrl: 'http://feeds.feedburner.com/tedtalks_video',

            version: '1.0',

            num: 10
        },

        idAttribute: 'feedUrl',

        initialize: function (options) {
            this.set('entries', options && options.entries || new App.Entries(), { silent: true });
            this.on('infinite', this.infinite);
            this.on('change:num', this.fetch);

            __super__.initialize.call(this, options);
        },

        url: function () {
            return [
                '//ajax.googleapis.com/ajax/services/feed/load?q=' + this.id,
                'v=' + this.get('version'),
                'num=' + this.get('num')
            ].join('&');
        },

        parse: function (response, options) {
            this.get('entries').reset(response.responseData.feed.entries, { parse: true });
            return _.omit(response.responseData.feed, 'entries');
        },

        infinite: function () {
            this.set('num', this.get('num') * 2);
        }

    });

}(window.BIT, window.Backbone, window._, window.jQuery));