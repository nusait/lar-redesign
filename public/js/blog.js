define(['simplecors', 'jquery'], function (Simplecors, $)
    {
        var Blog = function () {
            this.initialize = function () {
                var ins = this;
                Simplecors.ajax({
                    url: '//go.dosa.northwestern.edu/shared/sablog/posts'
                }).done( function(data) {
                    ins.populateEntries(data);
                });
            };
            this.showSpinner = function () {

            },
            this.hideSpinner = function () {

            },
            this.populateEntries = function (entries) {
                console.log(entries);
                $.each(entries, function (index, entry) {
                    var $entryContainer = $('<div></div>').addClass('blog-entry'),
                    $date = $('<div></div>').addClass('blog-date').text(entry.pubDate),
                    $title = $('<a></a>', {
                        href: entry.link
                    }).addClass('blog-title').text(entry.title),
                    $author = $('<div></div>').addClass('blog-author'),
                    $avatar = $('<img>').attr('src', entry.avatar),
                    $text = $('<div></div>').addClass('blog-text').text(entry.description);

                    $author.append($avatar);
                    $entryContainer.append($date).append($title).append($author).append($text)
                        .appendTo($('.block .blog-container .blog-content'));
                });
            };

        };
        return Blog;
    }
);