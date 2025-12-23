/* ===================================

   TCO Website - Main JavaScript
   Albinayat Typical Contracting LLC

=================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    }

    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================

    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ===================================
    // FAQ ACCORDION
    // ===================================

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = this.classList.contains('active');

            // Close all other FAQ items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                const a = q.parentElement.querySelector('.faq-answer');
                if (a) a.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                this.classList.add('active');
                if (answer) answer.classList.add('active');
            }
        });
    });

    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement && header) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // ACTIVE NAVIGATION LINK
    // ===================================

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', function () {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ===================================
    // LAZY LOADING IMAGES
    // ===================================

    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window && images.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    }

    // ===================================
    // ANIMATION ON SCROLL
    // ===================================

    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .project-card, .news-card, .office-card, .office-mini-card');
    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';

                    setTimeout(() => {
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);

                    elementObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            elementObserver.observe(element);
        });
    }

    // ===================================
    // BACK TO TOP BUTTON
    // ===================================

    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);

    // Style the button
    backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-green);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

    // Show/hide button on scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    backToTopButton.addEventListener('mouseenter', function () {
        this.style.background = 'var(--secondary-green)';
        this.style.transform = 'translateY(-5px)';
    });

    backToTopButton.addEventListener('mouseleave', function () {
        this.style.background = 'var(--primary-green)';
        this.style.transform = 'translateY(0)';
    });



    // ===================================
    // CONSOLE MESSAGE
    // ===================================

    console.log('%c Albinayat Typical Contracting LLC ', 'background: #2FA041; color: white; font-size: 16px; padding: 10px;');
    console.log('%c Website developed with ❤️ ', 'color: #2FA041; font-size: 14px;');

});

// ===================================
// INTERACTIVE OFFICES MAP
// ===================================

// بيانات المكاتب مع روابط Google Maps والترجمة
const officesData = {
    jeddah: {
        name_en: 'Jeddah',
        name_ar: 'جدة',
        type_en: 'Head Office',
        type_ar: 'المكتب الرئيسي',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6447982624844!2d39.15742871495895!3d21.557833785813658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMzJzI4LjEiTiAzOcKwMDknMjYuNiJF!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    riyadh: {
        name_en: 'Riyadh',
        name_ar: 'الرياض',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4897537617847!2d46.67184931498534!3d24.71356518411969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NsKwNDAnMjYuNCJF!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    khamis: {
        name_en: 'Khamis Mushait',
        name_ar: 'خميس مشيط',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.8!2d42.7296!3d18.3060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE4JzIxLjYiTiA0MsKwNDMnNDYuNiJF!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    dammam: {
        name_en: 'Dammam',
        name_ar: 'الدمام',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.2!2d50.1064!3d26.3927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIzJzMzLjciTiA1MMKwMDYnMjMuMCJF!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    madinah: {
        name_en: 'Madinah',
        name_ar: 'المدينة المنورة',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.1!2d39.6142!3d24.4672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI4JzAyLjAiTiAzOcKwMzYnNTEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    tabuk: {
        name_en: 'Tabuk',
        name_ar: 'تبوك',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.8!2d36.5772!3d28.3998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIzJzU5LjMiTiAzNsKwMzQnMzciRQ!5e0!3m2!1sen!2ssa!4v1234567890'
    },
    qassim: {
        name_en: 'Qassim',
        name_ar: 'القصيم',
        type_en: 'Branch Office',
        type_ar: 'فرع',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.3!2d43.9750!3d26.3586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDIxJzMxLjAiTiA0M8KwNTgnMzAuMCJF!5e0!3m2!1sen!2ssa!4v1234567890'
    }
};

// دالة تغيير المكتب مع دعم الترجمة
function changeOffice(officeKey) {
    const office = officesData[officeKey];
    if (!office) return;

    // Get current language
    const currentLang = localStorage.getItem('language') || 'en';

    // تحديث الخريطة
    const mapIframe = document.getElementById('mapIframe');
    if (mapIframe) {
        mapIframe.src = office.mapUrl;
    }

    // تحديث النص في الـ overlay حسب اللغة
    const officeNameMap = document.getElementById('officeNameMap');
    const officeTypeMap = document.getElementById('officeTypeMap');

    if (officeNameMap && officeTypeMap) {
        officeNameMap.textContent = currentLang === 'ar' ? office.name_ar : office.name_en;
        officeTypeMap.textContent = currentLang === 'ar' ? office.type_ar : office.type_en;
    }

    // تحديث الكروت (إزالة active من الكل)
    document.querySelectorAll('.office-mini-card').forEach(card => {
        card.classList.remove('active');
    });

    // إضافة active للكارد المختار
    const selectedCard = document.querySelector(`[data-office="${officeKey}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
    }

    // Animation للـ overlay
    const mapInfo = document.getElementById('mapInfo');
    if (mapInfo) {
        mapInfo.style.animation = 'none';
        setTimeout(() => {
            mapInfo.style.animation = 'slideInLeft 0.5s ease';
        }, 10);
    }
}

// Make changeOffice globally accessible

window.changeOffice = changeOffice;

// ===================================
// PARTNERS SLIDER
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('partnersTrack');
    const prevBtn = document.getElementById('partnersPrevBtn');
    const nextBtn = document.getElementById('partnersNextBtn');

    if (!track || !prevBtn || !nextBtn) return;

    // Configuration
    const originalItems = Array.from(track.children);
    const originalCount = originalItems.length;

    // Check if we have items
    if (originalCount === 0) return;

    // Clone items for infinite loop (Set 2)
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    // Variables
    let currentIndex = 0;
    let isTransitioning = false;
    let autoPlayInterval;
    const slideInterval = 3000; // 3 seconds

    // Calculate Item Width dynamically
    function getItemWidth() {
        const item = track.children[0];
        // Calculate gap if responsive
        const currentGap = window.innerWidth <= 768 ? 20 : 30;
        return item.getBoundingClientRect().width + currentGap;
    }

    // Update Slide Position
    function updateSlide(transition = true) {
        const itemWidth = getItemWidth();
        if (transition) {
            track.style.transition = 'transform 0.5s ease-in-out';
        } else {
            track.style.transition = 'none';
        }
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateSlide(true);
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;

        if (currentIndex === 0) {
            // Jump to the start of the cloned set (visual match for index 0)
            currentIndex = originalCount;
            updateSlide(false);

            // Force reflow
            void track.offsetWidth;

            currentIndex--;
            updateSlide(true);
        } else {
            currentIndex--;
            updateSlide(true);
        }
    }

    // Handle Transition End (Reset for Infinite Loop)
    track.addEventListener('transitionend', () => {
        isTransitioning = false;

        // Reset from end of cycle to start
        if (currentIndex >= originalCount) {
            if (currentIndex === originalCount) {
                currentIndex = 0;
                updateSlide(false);
            }
        }
    });

    // Auto Play
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, slideInterval);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Initial Start
    startAutoPlay();

    // Handle Window Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlide(false);
        }, 100);
    });
});
