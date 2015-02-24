define(['jquery'], function ($) {
    return {
        pattern: /^[A|a]ctivate [A|a]udio [P|p]layer/,
        initialize: function() {
            var ins = this;
           $('#main a').each(function (index) {
                var $link = $(this);
               var url = $link.attr('title');
               if (ins.isAudioLink(url)) {
                   $link.addClass('audio-link');
                   //$link.attr('data-extra-audio', ins.getOggFilename($link.attr('href')));
               }
           });

            $('#main').on('click', 'a.audio-link', function(event) {
                var $link = $(this);
                event.preventDefault();
                $('audio.sa-audio-player').remove();
                ins.insertAudioTag($link);
            });
        },

        isAudioLink:function (fileName) {
            return this.pattern.test(fileName);
        },
        //getOggFilename: function (href) {
        //    return href.replace('.mp3', '.ogg');
        //},
        insertAudioTag: function ($link) {
            var $audio = $('<audio></audio>');
            $audio.attr('controls', 'controls');
            $audio.attr('autoplay', 'true');
            $audio.addClass('sa-audio-player');
            $audio.css('display', 'block');
            var $source = $('<source/>');
            $source.attr('src', $link.attr('href'));
            $source.attr('type', this.getAudioType($link.attr('href')));
            $audio.append($source);
            console.log($audio.get());
            $link.after($audio);
        },
        getAudioType: function (url) {
            var filename = this.getLastSegment(url);
            var ext = filename.substring(filename.lastIndexOf(".")+1);
            return 'audio/' + ext;
        },
        getLastSegment: function(url) {
            var str = url;
            var fileNameIndex;
            var noSlash;
            var length;
            var filename;

            if (str.indexOf('http://') > -1 || str.indexOf('https://') > -1) {
                noSlash = str.replace('//', '');
                fileNameIndex = noSlash.lastIndexOf("/") + 1;
                lastIndex = noSlash.indexOf('?');
                if (fileNameIndex == 0) {
                    return false;
                } else if (lastIndex > -1) {
                    length = lastIndex - fileNameIndex;
                    return noSlash.substr(fileNameIndex, length);
                }

                return noSlash.substr(fileNameIndex);
            }

            fileNameIndex = str.lastIndexOf("/") + 1;
            lastIndex = str.indexOf('?');
            if (lastIndex > -1) {
                length = lastIndex - fileNameIndex;
                return str.substr(fileNameIndex, length);
            }
            return str.substr(fileNameIndex);
        }
    };
});