 document.querySelectorAll('.accordion .card-header').forEach(header => {
            header.addEventListener('click', function () {
                const plusMinus = this.querySelector('.plus-minus');
                const collapse = document.querySelector(this.dataset.bsTarget);

                // Toggle plus/minus on click
                collapse.addEventListener('shown.bs.collapse', () => plusMinus.textContent = '−');
                collapse.addEventListener('hidden.bs.collapse', () => plusMinus.textContent = '+');
            });
        });
   
        document.addEventListener("DOMContentLoaded", function () {
            const $carousel = $('.class-carousel');
            let totalItems = $carousel.find('.class-item').length;

            // Fill blank items if less than 4
            if (totalItems < 4) {
                const blanksToAdd = 4 - totalItems;
                for (let i = 0; i < blanksToAdd; i++) {
                    $carousel.append(`
                <div class="class-item bg-white rounded wow fadeInUp" style="visibility:hidden;"></div>
            `);
                }
                totalItems = 4; // Update total after adding blanks
            }

            $carousel.owlCarousel({
                loop: totalItems > 4,         // Only loop if more than 4 items
                autoplay: totalItems > 4,     // Only autoplay if more than 4
                margin: 30,
                nav: totalItems > 4,          // Show arrows only if more than 4 items
                dots: false,
                responsive: {
                    0: { items: 1 },
                    576: { items: 2 },
                    992: { items: 3 },
                    1200: { items: 4 }
                },
                navText: [
                    '<i class="fas fa-chevron-left"></i>',
                    '<i class="fas fa-chevron-right"></i>'
                ]
            });
        });
    
        document.addEventListener("scroll", function () {
            const backToTop = document.querySelector(".back-to-top");
            if (window.scrollY > 200) {   // show after scrolling 200px
                backToTop.style.display = "flex";  // flex centers icon inside button
            } else {
                backToTop.style.display = "none";
            }
        });
   
        document.addEventListener("DOMContentLoaded", function () {
            const modalImage = document.getElementById("modalImage");
            const galleryLinks = Array.from(document.querySelectorAll('[data-bs-target="#imageModal"]'));
            let currentIndex = 0;

            // Show clicked image in modal
            galleryLinks.forEach((link, index) => {
                link.addEventListener("click", function () {
                    const imgSrc = this.querySelector("img").getAttribute("src");
                    modalImage.setAttribute("src", imgSrc);
                    currentIndex = index; // remember which image is open
                });
            });

            // Next Button
            document.getElementById("nextBtn").addEventListener("click", function (e) {
                e.preventDefault();
                currentIndex = (currentIndex + 1) % galleryLinks.length;
                modalImage.setAttribute("src", galleryLinks[currentIndex].querySelector("img").getAttribute("src"));
            });

            // Prev Button
            document.getElementById("prevBtn").addEventListener("click", function (e) {
                e.preventDefault();
                currentIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
                modalImage.setAttribute("src", galleryLinks[currentIndex].querySelector("img").getAttribute("src"));
            });
        });