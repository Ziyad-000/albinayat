// /* ===================================
//    TCO Website - Hero Slider
//    Albinayat Typical Contracting LLC
//    =================================== */

// document.addEventListener('DOMContentLoaded', function() {
  
//   // ===================================
//   // HERO SLIDER CONFIGURATION
//   // ===================================
//   const slides = document.querySelectorAll('.hero-slide');
//   let currentSlide = 0;
//   const slideInterval = 5000; // 5 seconds
//   let slideTimer;
  
  
//   // ===================================
//   // SHOW SPECIFIC SLIDE
//   // ===================================
//   function showSlide(index) {
//     // Remove active class from all slides
//     slides.forEach(slide => {
//       slide.classList.remove('active');
//     });
    
//     // Add active class to current slide
//     if (slides[index]) {
//       slides[index].classList.add('active');
//     }
//   }
  
  
//   // ===================================
//   // NEXT SLIDE
//   // ===================================
//   function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= slides.length) {
//       currentSlide = 0;
//     }
//     showSlide(currentSlide);
//   }
  
  
//   // ===================================
//   // PREVIOUS SLIDE
//   // ===================================
//   function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) {
//       currentSlide = slides.length - 1;
//     }
//     showSlide(currentSlide);
//   }
  
  
//   // ===================================
//   // AUTO PLAY SLIDER
//   // ===================================
//   function startSlider() {
//     slideTimer = setInterval(nextSlide, slideInterval);
//   }
  
  
//   // ===================================
//   // STOP SLIDER
//   // ===================================
//   function stopSlider() {
//     clearInterval(slideTimer);
//   }
  
  
//   // ===================================
//   // CREATE SLIDER CONTROLS
//   // ===================================
//   function createSliderControls() {
//     const heroSection = document.querySelector('.hero');
    
//     if (!heroSection || slides.length <= 1) {
//       return; // Don't create controls if no hero or only one slide
//     }
    
//     // Create navigation arrows
//     const prevButton = document.createElement('button');
//     prevButton.className = 'slider-nav slider-prev';
//     prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
//     prevButton.setAttribute('aria-label', 'Previous slide');
    
//     const nextButton = document.createElement('button');
//     nextButton.className = 'slider-nav slider-next';
//     nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
//     nextButton.setAttribute('aria-label', 'Next slide');
    
//     // Style the navigation buttons
//     const navStyle = `
//       position: absolute;
//       top: 50%;
//       transform: translateY(-50%);
//       width: 50px;
//       height: 50px;
//       background: rgba(255, 255, 255, 0.3);
//       color: white;
//       border: 2px solid rgba(255, 255, 255, 0.5);
//       border-radius: 50%;
//       font-size: 20px;
//       cursor: pointer;
//       z-index: 10;
//       transition: all 0.3s ease;
//       backdrop-filter: blur(5px);
//     `;
    
//     prevButton.style.cssText = navStyle + 'left: 20px;';
//     nextButton.style.cssText = navStyle + 'right: 20px;';
    
//     // Add hover effects
//     [prevButton, nextButton].forEach(btn => {
//       btn.addEventListener('mouseenter', function() {
//         this.style.background = 'var(--primary-green)';
//         this.style.borderColor = 'var(--primary-green)';
//         this.style.transform = 'translateY(-50%) scale(1.1)';
//       });
      
//       btn.addEventListener('mouseleave', function() {
//         this.style.background = 'rgba(255, 255, 255, 0.3)';
//         this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
//         this.style.transform = 'translateY(-50%) scale(1)';
//       });
//     });
    
//     // Add click events
//     prevButton.addEventListener('click', function() {
//       prevSlide();
//       stopSlider();
//       startSlider(); // Restart timer
//     });
    
//     nextButton.addEventListener('click', function() {
//       nextSlide();
//       stopSlider();
//       startSlider(); // Restart timer
//     });
    
//     // Append to hero section
//     heroSection.appendChild(prevButton);
//     heroSection.appendChild(nextButton);
    
    
//     // Create dots navigation
//     const dotsContainer = document.createElement('div');
//     dotsContainer.className = 'slider-dots';
//     dotsContainer.style.cssText = `
//       position: absolute;
//       bottom: 30px;
//       left: 50%;
//       transform: translateX(-50%);
//       display: flex;
//       gap: 10px;
//       z-index: 10;
//     `;
    
//     slides.forEach((slide, index) => {
//       const dot = document.createElement('button');
//       dot.className = 'slider-dot';
//       dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
//       dot.style.cssText = `
//         width: 12px;
//         height: 12px;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.5);
//         border: 2px solid rgba(255, 255, 255, 0.8);
//         cursor: pointer;
//         transition: all 0.3s ease;
//       `;
      
//       if (index === 0) {
//         dot.style.background = 'white';
//         dot.style.width = '30px';
//         dot.style.borderRadius = '6px';
//       }
      
//       dot.addEventListener('click', function() {
//         currentSlide = index;
//         showSlide(currentSlide);
//         updateDots();
//         stopSlider();
//         startSlider();
//       });
      
//       dot.addEventListener('mouseenter', function() {
//         if (index !== currentSlide) {
//           this.style.background = 'rgba(255, 255, 255, 0.8)';
//         }
//       });
      
//       dot.addEventListener('mouseleave', function() {
//         if (index !== currentSlide) {
//           this.style.background = 'rgba(255, 255, 255, 0.5)';
//         }
//       });
      
//       dotsContainer.appendChild(dot);
//     });
    
//     heroSection.appendChild(dotsContainer);
    
    
//     // Update dots active state
//     function updateDots() {
//       const dots = document.querySelectorAll('.slider-dot');
//       dots.forEach((dot, index) => {
//         if (index === currentSlide) {
//           dot.style.background = 'white';
//           dot.style.width = '30px';
//           dot.style.borderRadius = '6px';
//         } else {
//           dot.style.background = 'rgba(255, 255, 255, 0.5)';
//           dot.style.width = '12px';
//           dot.style.borderRadius = '50%';
//         }
//       });
//     }
    
//     // Update dots on slide change
//     const originalNextSlide = nextSlide;
//     nextSlide = function() {
//       originalNextSlide();
//       updateDots();
//     };
    
//     const originalPrevSlide = prevSlide;
//     prevSlide = function() {
//       originalPrevSlide();
//       updateDots();
//     };
//   }
  
  
//   // ===================================
//   // PAUSE ON HOVER
//   // ===================================
//   const heroSection = document.querySelector('.hero');
//   if (heroSection) {
//     heroSection.addEventListener('mouseenter', stopSlider);
//     heroSection.addEventListener('mouseleave', startSlider);
//   }
  
  
//   // ===================================
//   // KEYBOARD NAVIGATION
//   // ===================================
//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowLeft') {
//       prevSlide();
//       stopSlider();
//       startSlider();
//     } else if (e.key === 'ArrowRight') {
//       nextSlide();
//       stopSlider();
//       startSlider();
//     }
//   });
  
  
//   // ===================================
//   // TOUCH SWIPE SUPPORT
//   // ===================================
//   let touchStartX = 0;
//   let touchEndX = 0;
  
//   if (heroSection) {
//     heroSection.addEventListener('touchstart', function(e) {
//       touchStartX = e.changedTouches[0].screenX;
//     });
    
//     heroSection.addEventListener('touchend', function(e) {
//       touchEndX = e.changedTouches[0].screenX;
//       handleSwipe();
//     });
//   }
  
//   function handleSwipe() {
//     if (touchEndX < touchStartX - 50) {
//       // Swipe left - next slide
//       nextSlide();
//       stopSlider();
//       startSlider();
//     }
//     if (touchEndX > touchStartX + 50) {
//       // Swipe right - previous slide
//       prevSlide();
//       stopSlider();
//       startSlider();
//     }
//   }
  
  
//   // ===================================
//   // INITIALIZE SLIDER
//   // ===================================
//   if (slides.length > 0) {
//     showSlide(0);
//     createSliderControls();
//     startSlider();
    
//     console.log('Hero slider initialized with ' + slides.length + ' slides');
//   }
  
  
//   // ===================================
//   // PAUSE SLIDER WHEN TAB IS HIDDEN
//   // ===================================
//   document.addEventListener('visibilitychange', function() {
//     if (document.hidden) {
//       stopSlider();
//     } else {
//       startSlider();
//     }
//   });
  
// });
