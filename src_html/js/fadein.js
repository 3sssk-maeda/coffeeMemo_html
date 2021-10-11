//画面に入ったらfadein
(function ($) {
    $(function () {
        $(window).scroll(function () {
            $(".js_fadein").each(function () {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                    $(this).css({
                        'opacity': '1'
                    })
                } else {
                    $(this).css({
                        'opacity': '0'
                    })
                }
            });
        });

        $(".js_fadein").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                $(this).css({
                    'opacity': '1'
                })
            } else {
                $(this).css({
                    'opacity': '0'
                })
            }
        });

        $(window).scroll(function () {
            $(".js_fadeside_toleft").each(function () {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    })
                } else {
                    $(this).css({
                        'opacity': '0',
                        'transform': 'translateX(-10%)'
                    })
                }
            });
        });
        $(".js_fadeside_toleft").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                })
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateX(-10%)'
                })
            }
        });

        $(window).scroll(function () {
            $(".js_fadeside_toright").each(function () {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    })
                } else {
                    $(this).css({
                        'opacity': '0',
                        'transform': 'translateX(10%)'
                    })
                }
            });
        });
        $(".js_fadeside_toright").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                })
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateX(10%)'
                })
            }
        });

        $(window).scroll(function () {
            $(".js_fadeside").each(function () {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    })
                } else {
                    $(this).css({
                        'opacity': '0',
                        'transform': 'translateY(10%)'
                    })
                }
            });
        });
        $(".js_fadeside").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                })
            } else {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateY(10%)'
                })
            }
        });


        $(window).scroll(function () {
            $(".js_sideslide").each(function () {
                var imgPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                    $(this).addClass('action');
                } else {
                    $(this).removeClass('action');
                }
            });
        });
        $(".js-sideslide").each(function () {
            var imgPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > imgPos - windowHeight + windowHeight / 4.5) {
                $(this).addClass('action');
            } else {
                $(this).removeClass('action');
            }
        });

    });
})(jQuery);
