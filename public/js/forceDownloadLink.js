define(['jquery'], function ($) {
    var forceDownloadLink = {
        pattern: /^sa-downloadfile-/,
        initialize: function() {
            var ins = this;
           $('#main a').each(function (index) {
                $link = $(this);
               var url = $link.attr('href');
               if (ins.isDownload(ins.getLastSegment(url))) {
                   $link.attr('download', ins.getDownloadFileName(ins.getLastSegment(url)));
               }
           });
        },
        isDownload:function (fileName) {
            return this.pattern.test(fileName);
        },
        getDownloadFileName: function (fileName) {
            var str = fileName.replace('sa-downloadfile-', '');
            var length = str.lastIndexOf('.');
            return str.substr(0, length);
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
    return forceDownloadLink;
});