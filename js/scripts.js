$(document).ready(function() {
    var w = screen.width,
        h = screen.height;
    //E-mail Ajax Send
    $("form").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function() {
                    $.fancybox.close();
                    $.fancybox({
                        href: '#myThanks',
                        wrapCSS: 'owrap',
                        openEffect: "elastic",
                        openMethod: "zoomIn",
                        closeEffect: "elastic",
                        closeMethod: "zoomOut",
                    });
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                    it.trigger("reset");
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    //  scroll with offset
    $("#navigation").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        // if (w < 768) {
        //     $(id).attr('data-top', 90);
        // }
        var topOffset = $(id).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        $('body,html').animate({ scrollTop: finalTop }, 700);

    });

    if (w < 768) {
        $(".nav_list li a").click(function() {
            $(".hidden_trigger").removeClass('open_menu');
            $(".nav_list").slideUp();
            $(".top_line .logo").removeClass('hidden_logo');
        });
    }

    $(".scroll_btn").click(function() {
        event.preventDefault();
        var id = $(this).attr('href');
        // screen width
        // if (w < 768) {
        //     $(id).attr('data-top', 90);
        // }
        var topOffset = $(id).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - topOffset;
        $('body,html').animate({ scrollTop: finalTop }, 700);
    });

    // top menu
    if (w > 768) {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 79) $(".nav_list_wrapper").removeClass("more");
            else $(".nav_list_wrapper").addClass("more").fadeIn("slow");
        });
    }

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 700) $(".scroll_top_btn").removeClass("more");
        else $(".scroll_top_btn").addClass("more");
    });

    // menu-btn 
    $(".hidden_trigger").click(function() {
        $(".nav_list").slideToggle();
        $(this).toggleClass('open_menu');
        $(".top_line .logo").toggleClass('hidden_logo');
    });

    //masked
    // $('input[type=tel]').mask("+99(999) 999-99-99");

    $(".table_btn").click(function() {
        $(this).toggleClass('opened');
        $(this).closest('.table_block_container').find('.hidden_tables').slideToggle();
    });


});
