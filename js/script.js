document.querySelectorAll('#navbarNav a, #mobile-navbar-overlay a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - (document.getElementById('navbar').offsetHeight); // Adjust for sticky header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                // Close mobile nav if open
                document.getElementById('mobile-navbar-overlay').classList.add('hidden');
            });
        });

        // Sticky Navbar and active link highlighting
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('#navbarNav a');
        const mobileNavLinks = document.querySelectorAll('#mobile-navbar-overlay a');
        const sections = document.querySelectorAll('section, header'); // Include header for hero section

        window.addEventListener('scroll', () => {
            // Add/remove 'scrolled' class for navbar styling
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Highlight active navigation link
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - navbar.offsetHeight - 1; // Adjusted for sticky header
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = '#' + section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === current) {
                    link.classList.add('active');
                }
            });
            mobileNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === current) {
                    link.classList.add('active');
                }
            });
        });

        // Scroll-triggered animations using Intersection Observer
        const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing once animated if it's a one-time animation
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: remove 'is-visible' to allow re-animation on scroll back up
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });

        // Mobile Navbar Toggle
        const navbarToggler = document.getElementById('navbar-toggler');
        const mobileNavbarOverlay = document.getElementById('mobile-navbar-overlay');
        const closeNavbarOverlay = document.getElementById('close-navbar-overlay');

        navbarToggler.addEventListener('click', () => {
            mobileNavbarOverlay.classList.remove('hidden');
        });

        closeNavbarOverlay.addEventListener('click', () => {
            mobileNavbarOverlay.classList.add('hidden');
        });

        // JavaScript Typing Effect
        const typedTextSpan = document.getElementById('typed-text');
        const textToType = "Web Developer.";
        const typingDelay = 100; // Milliseconds per character
        const erasingDelay = 50; // Milliseconds per character when erasing (if needed for multiple phrases)
        const newTextDelay = 1000; // Delay before typing next text (if multiple phrases)
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typedTextSpan.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                // Optionally, if you had multiple phrases, you'd start erasing here
                // For a single phrase, just let it stay typed
            }
        }

        // Start the typing animation when the page loads
        document.addEventListener("DOMContentLoaded", function() {
           if (typedTextSpan) { // Ensure the element exists
               type();
           }
        });

  const circles = document.querySelectorAll('.circle');

  const animateCircle = (circle) => {
    const target = +circle.getAttribute('data-percentage');
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        const angle = (current / 100) * 360;
        circle.style.setProperty('--angle', `${angle}deg`);
      }
    }, 10); // speed of animation
  };

  const observers = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCircle(entry.target);
        obs.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.6 });

  circles.forEach(circle => observers.observe(circle));

   function openModal(id) {
    document.getElementById(id).classList.add('show');
    document.getElementById(id).classList.remove('hidden');
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('show');
    document.getElementById(id).classList.add('hidden');
  }
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });