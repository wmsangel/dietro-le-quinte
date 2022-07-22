import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

$(function (){


    // mask
    $('.js-mask-date').mask('99 | 99 | 99')
    $('.js-mask-phone').mask('+7(999) 999-9999')
    $('.js-mask-time').mask('99:99')

    // ship type
    $('body')
        .on('click', '.js-ship-type', function (e) {
            if (e.currentTarget.defaultValue == 'self') {
                $('.js-ship-block').hide()
            } else {
                $('.js-ship-block').show()
            }
        })

    // hero slider
    if ($('.js-hero-slider').length) {
        const heroSlider = new Swiper('.js-hero-slider', {
            modules: [ Navigation, Pagination, EffectFade ],
            slidesPerView: 1,
            speed: 900,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.js-hero-slider .js-hero-next',
                prevEl: '.js-hero-slider .js-hero-prev',
            },
            on: {
                init: function (e) {
                    $('.js-hero-current-slide').html(e.activeIndex + 1);
                    $('.js-hero-total-slide').html(e.slides.length);
                    $('.js-hero-line').css('width', e.slides.length * 20 + 8);
                    if (e.activeIndex == '0') {
                        $('.js-hero-line-circle').css('margin-left', '0')
                    } else {
                        $('.js-hero-line-circle').css('margin-left', (e.activeIndex + 1) * 20)
                    }
                },
            },
        });

        heroSlider.on('slideChange', function (e) {
            $('.js-hero-current-slide').html(e.activeIndex + 1);
            if (e.activeIndex == '0') {
                $('.js-hero-line-circle').css('margin-left', '0');
            } else {
                $('.js-hero-line-circle').css('margin-left', (e.activeIndex + 1) * 20);
            }
        });

    }

    // about gallery slider
    if ($('.js-about-gallery').length) {
        const aboutSlider = new Swiper('.js-about-gallery', {
            modules: [ Navigation, Pagination ],
            slidesPerView: 1,
            speed: 900,
            navigation: {
                nextEl: '.js-about-gallery .js-about-gallery-next',
                prevEl: '.js-about-gallery .js-about-gallery-prev',
            },
            on: {
                init: function (e) {
                    $('.js-about-gallery-count').html(e.activeIndex + 1);
                },
            },
        });

        aboutSlider.on('slideChange', function (e) {
            $('.js-about-gallery-count').html(e.activeIndex + 1);
        });

    }

    // text gallery slider
    if ($('.js-text-gallery').length) {
        const textSlider = new Swiper('.js-text-gallery', {
            modules: [ Navigation, Pagination ],
            slidesPerView: 1,
            speed: 900,
            navigation: {
                nextEl: '.js-text-gallery .js-text-gallery-next',
                prevEl: '.js-text-gallery .js-text-gallery-prev',
            },
            on: {
                init: function (e) {
                    $('.js-text-gallery-count').html(e.activeIndex + 1);
                },
            },
        });

        textSlider.on('slideChange', function (e) {
            $('.js-text-gallery-count').html(e.activeIndex + 1);
        });

    }

    // Agree
    $('body').on('change', '.js-agree', function (e) {
        if ($(this).is(':checked')) {
            $('.js-order-btn').removeClass('is-disabled');
        } else {
            $('.js-order-btn').addClass('is-disabled');
        }
    })
    $('body').on('change', '.js-popup-agree', function (e) {
        if ($(this).is(':checked')) {
            $('.js-popup-order-btn').removeClass('is-disabled');
        } else {
            $('.js-popup-order-btn').addClass('is-disabled');
        }
    })

    // cards
    if ($('.js-menu-swiper-1').length) {
        $('.js-menu-swiper-1').each(function (e) {
            const menuSlider = new Swiper('.js-menu-swiper-1', {
                modules: [ Navigation, Pagination ],
                slidesPerView: 4,
                spaceBetween: 60,
                speed: 300,
                navigation: {
                    nextEl: '.js-menu-swiper-1 .js-swiper-next',
                    prevEl: '.js-menu-swiper-1 .js-swiper-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            });
        })
    }
    if ($('.js-menu-swiper-2').length) {
        $('.js-menu-swiper-2').each(function (e) {
            const menuSlider = new Swiper('.js-menu-swiper-2', {
                modules: [ Navigation, Pagination ],
                slidesPerView: 4,
                spaceBetween: 60,
                speed: 300,
                navigation: {
                    nextEl: '.js-menu-swiper-2 .js-swiper-next',
                    prevEl: '.js-menu-swiper-2 .js-swiper-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            });
        })
    }
    if ($('.js-menu-swiper-3').length) {
        $('.js-menu-swiper-3').each(function (e) {
            const menuSlider = new Swiper('.js-menu-swiper-3', {
                modules: [ Navigation, Pagination ],
                slidesPerView: 4,
                spaceBetween: 60,
                speed: 300,
                navigation: {
                    nextEl: '.js-menu-swiper-3 .js-swiper-next',
                    prevEl: '.js-menu-swiper-3 .js-swiper-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            });
        })
    }
    if ($('.js-menu-swiper-4').length) {
        $('.js-menu-swiper-4').each(function (e) {
            const menuSlider = new Swiper('.js-menu-swiper-4', {
                modules: [ Navigation, Pagination ],
                slidesPerView: 4,
                spaceBetween: 60,
                speed: 300,
                navigation: {
                    nextEl: '.js-menu-swiper-4 .js-swiper-next',
                    prevEl: '.js-menu-swiper-4 .js-swiper-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            });
        })
    }
    if ($('.js-menu-swiper-5').length) {
        $('.js-menu-swiper-5').each(function (e) {
            const menuSlider = new Swiper('.js-menu-swiper-5', {
                modules: [ Navigation, Pagination ],
                slidesPerView: 4,
                spaceBetween: 60,
                speed: 300,
                navigation: {
                    nextEl: '.js-menu-swiper-5 .js-swiper-next',
                    prevEl: '.js-menu-swiper-5 .js-swiper-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 60,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 60,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                }
            });
        })
    }

    // QTY
    $('body')
        .on('click', '.js-qty-minus', function (e) {
            let currentVal = $(this).next().text();
            if (currentVal != '1') {
                $(this).next().text(Number(currentVal) - 1)
            }
        })
        .on('click', '.js-qty-plus', function (e) {
            let currentVal = $(this).prev().text();
            $(this).prev().text(Number(currentVal) + 1)
        })

    // mobile menu
    const mobileMenu = $('.js-mobile-menu');
    mobileMenu.on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('is-mobile-menu-opened');
    })

    // tabs
    const tabMenuLink = $('.js-menu-tab-link');
    tabMenuLink.on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('is-selected')) {
            let currentTabMenu = $(this).data('tab-menu');
            tabMenuLink.removeClass('is-selected');
            $(this).addClass('is-selected');

            $('.js-tab-content').removeClass('is-selected');
            $('.js-tab-content[data-tab-content="'+currentTabMenu+'"]').addClass('is-selected');
        }
    })
    $('body')
        .on('click', '.js-menu-tab-prev', function (e) {
            e.preventDefault();
            if ($('.js-menu-tab-link.is-selected').prev().length) {
                $('.js-menu-tab-link.is-selected').prev().trigger('click');
                $(this).removeClass('is-disabled')
                $('.js-menu-tab-next').removeClass('is-disabled')
            } else {
                $(this).addClass('is-disabled')
                $('.js-menu-tab-next').removeClass('is-disabled')
            }
        })
        .on('click', '.js-menu-tab-next', function (e) {
            e.preventDefault();
            if ($('.js-menu-tab-link.is-selected').next().length) {
                $('.js-menu-tab-link.is-selected').next().trigger('click');
                $(this).removeClass('is-disabled')
                $('.js-menu-tab-prev').removeClass('is-disabled')
            } else {
                $(this).addClass('is-disabled')
                $('.js-menu-tab-prev').removeClass('is-disabled')
            }
        })


    // popup
    $('body')
        .on('click', '.js-popup', function (e) {
            e.preventDefault();
            let popupID = $(this).data('popup-id');
            $('.overlay, .js-popup-block').hide();
            $('.overlay, .js-popup-block[data-popup-id="'+popupID+'"]').fadeIn();
        })
        .on('click', '.js-popup-close', function (e) {
            e.preventDefault();
            $('.overlay, .js-popup-block').fadeOut();
        })


    // Order validation
    $('body').on('click', '.js-order-btn', function (e) {
        var validate = true;
        $('.js-form-order .is-required').each(function (e) {
            if ($('.js-ship-block').is(':visible')) {
                if ($(this).hasClass('is-email')) {
                    if (isEmail($(this).val())) {
                        $(this).parent('div').addClass('is-field-success');
                        $(this).parent('div').removeClass('is-field-error');
                    } else {
                        $(this).parent('div').addClass('is-field-error');
                    }
                } else if ($(this).val() == '') {
                    validate = false;
                    $(this).parent('div').addClass('is-field-error');
                } else {
                    $(this).parent('div').addClass('is-field-success');
                    $(this).parent('div').removeClass('is-field-error');
                }
            } else {
                if (!$(this).hasClass('is-ship-required')) {
                    if ($(this).hasClass('is-email')) {
                        if (isEmail($(this).val())) {
                            $(this).parent('div').addClass('is-field-success');
                            $(this).parent('div').removeClass('is-field-error');
                        } else {
                            $(this).parent('div').addClass('is-field-error');
                        }
                    } else if ($(this).val() == '') {
                        validate = false;
                        $(this).parent('div').addClass('is-field-error');
                    } else {
                        $(this).parent('div').addClass('is-field-success');
                        $(this).parent('div').removeClass('is-field-error');
                    }
                }
            }
        })
        if (validate == false) {
            return false;
        }
    })

    $('body').on('click', '.js-popup-order-btn', function (e) {
        var validatePopup = true;
        $('.js-popup-form-order .is-required').each(function (e) {
            if ($('.js-ship-block').is(':visible')) {
                if ($(this).val() == '') {
                    validatePopup = false;
                    $(this).parent('div').addClass('is-field-error');
                } else {
                    $(this).parent('div').addClass('is-field-success');
                    $(this).parent('div').removeClass('is-field-error');
                }
            } else {
                if (!$(this).hasClass('is-ship-required')) {
                    if ($(this).val() == '') {
                        validatePopup = false;
                        $(this).parent('div').addClass('is-field-error');
                    } else {
                        $(this).parent('div').addClass('is-field-success');
                        $(this).parent('div').removeClass('is-field-error');
                    }
                }
            }
        })
        if (validatePopup == false) {
            return false;
        } else {
            let popupID = 'order-confirm';
            $('.overlay, .js-popup-block').hide();
            $('.overlay, .js-popup-block[data-popup-id="'+popupID+'"]').fadeIn();
        }
    })


    // Email Validation
    function isEmail(email) {
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return EmailRegex.test(email);
    }
})