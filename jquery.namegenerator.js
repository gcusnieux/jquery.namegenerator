(function ($) {


    function rnd(minv, maxv) {
        if (maxv < minv) return 0;
        return Math.floor(Math.random() * (maxv - minv + 1)) + minv;
    }

    $.nameGenerator = function (minlength, maxlength, prefix, suffix) {
        prefix = prefix || '';
        suffix = suffix || '';
        var vocals = 'aeiouyh' + 'aeiou' + 'aeiou';
        var cons = 'bcdfghjklmnpqrstvwxz' + 'bcdfgjklmnprstvw' + 'bcdfgjklmnprst';
        var allchars = vocals + cons;
        var length = rnd(minlength, maxlength) - prefix.length - suffix.length;
        if (length < 1) length = 1;
        var consnum = 0;

        if (prefix.length > 0) {
            for (var i = 0; i < prefix.length; i++) {
                if (consnum == 2) consnum = 0;
                if (cons.indexOf(prefix[i]) != -1) {
                    ++consnum;
                }
            }
        }
        else {
            consnum = 1;
        }

        var name = prefix;

        for (var i = 0; i < length; i++) {
            if (consnum == 2) {
                touse = vocals;
                consnum = 0;
            }
            else touse = allchars;
            c = touse.charAt(rnd(0, touse.length - 1));
            name = name + c;
            if (cons.indexOf(c) != -1) consnum++;
        }
        return name.charAt(0).toUpperCase() + name.substring(1, name.length) + suffix;
    }


})(jQuery);


