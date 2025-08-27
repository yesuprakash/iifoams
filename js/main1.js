
        $(function () {
            const $carousel = $(".header-carousel");

            $carousel.owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 900,
                dots: true,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ],
                animateOut: "fadeOut",
                animateIn: "fadeIn"
            });
        });

        
        $(document).ready(function () {

            var $blogCarousel = $('#blogCarousel');

            // If Owl Carousel is already initialized, destroy it
            if ($blogCarousel.hasClass('owl-loaded')) {
                $blogCarousel.trigger('destroy.owl.carousel').removeClass('owl-loaded');
                $blogCarousel.find('.owl-stage-outer').children().unwrap();
            }

            // Count original items BEFORE initializing Owl Carousel
            var itemCount = $blogCarousel.find('.blog-item').length;

            $blogCarousel.owlCarousel({
                loop: itemCount > 4,        // loop only if more than 4 items
                margin: 30,
                nav: itemCount > 4,         // show nav only if more than 4 items
                dots: false,
                autoplay: false,
                responsive: {
                    0: { items: 1 },
                    576: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 3 }
                }
            });

        });

        
        $(document).ready(function () {
            var $c = $('.team-carousel');
            // If already initialized by some other script, destroy it first
            if ($c.hasClass('owl-loaded')) {
                $c.trigger('destroy.owl.carousel');
                // unwrap Owl's structure so re-init works cleanly
                $c.removeClass('owl-loaded owl-hidden');
                $c.find('.owl-stage-outer').children().unwrap();
            }

            // Re-init with your settings
            $c.owlCarousel({
                items: 4,                 // desktop fallback
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoWidth: false,         // make sure width is controlled by "items"
                responsiveRefreshRate: 50,
                navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>'
                ],
                responsive: {
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 3 }       // cap at 4 even on very wide screens
                }
            });
        });

         $(function () {
            var $c = $('.training-carousel');

            // If already initialized by some other script, destroy it first
            if ($c.hasClass('owl-loaded')) {
                $c.trigger('destroy.owl.carousel');
                // unwrap Owl's structure so re-init works cleanly
                $c.removeClass('owl-loaded owl-hidden');
                $c.find('.owl-stage-outer').children().unwrap();
            }

            // Re-init with your settings
            $c.owlCarousel({
                items: 4,                 // desktop fallback
                loop: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoWidth: false,         // make sure width is controlled by "items"
                responsiveRefreshRate: 50,
                responsive: {
                    0: { items: 1 },
                    576: { items: 2 },
                    768: { items: 3 },
                    992: { items: 3 },
                    1200: { items: 3 }       // cap at 4 even on very wide screens
                }
            });
        });