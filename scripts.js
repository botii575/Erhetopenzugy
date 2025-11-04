window.onload = () => {
    const dropdown = document.getElementById("service");
    if (dropdown) {
        dropdown.selectedIndex = 0;
    }

    const form = document.querySelector('.contact-form form');
    if (form) {
        form.reset();
    }
};

const SCROLL_TOP = document.querySelector('.scroll-top');

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        SCROLL_TOP.classList.add('visible');
    } else {
        SCROLL_TOP.classList.remove('visible');
    }
};

SCROLL_TOP.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const showContent = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "block";
        el.style.position = "fixed";
        el.style.zIndex = "99999";
    }
};

const hideContent = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
        el.style.zIndex = "";
        el.style.position = "";
    }
};

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        this.closest('.modal').style.display = "none";
    };
});

window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

// ----- Scroll-based animations and theme toggling -----
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer to trigger fade-in animations on scroll. Elements with
    // the class 'fade-in' will receive the 'appear' class when they enter the
    // viewport. The threshold and rootMargin create a slight offset so the
    // animation starts just before the element is fully visible.
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length > 0) {
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        faders.forEach(el => appearOnScroll.observe(el));
    }

    // Dark mode toggle: restore saved theme and respond to clicks on the toggle
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', current);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.nextElementSibling.style.display = 'none';
                }
            });

            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function clearValidationMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('footer .legal-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.toLowerCase();
            if (text.includes('impresszum')) {
                showContent('impresszum');
            } else if (text.includes('adatkezelési')) {
                showContent('adatkezeles');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const inlineAdatkezeles = document.getElementById('adatkezeles-inline');
    if (inlineAdatkezeles) {
        inlineAdatkezeles.addEventListener('click', function(e) {
            e.preventDefault();
            showContent('adatkezeles');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modalSaveButton = document.querySelector('#sutik .cookie-settings button');
    const modalAnalyticsCheckbox = document.getElementById('analytics-cookies');

    if (modalSaveButton && modalAnalyticsCheckbox) {
        modalSaveButton.addEventListener('click', () => {
            const prefs = {
                analytics: modalAnalyticsCheckbox.checked
            };
            localStorage.setItem('cookiePrefs', JSON.stringify(prefs));

            if (prefs.analytics) {
                activateGoogleAnalytics();
            }

            if (!document.querySelector('.save-success-inline')) {
                const success = document.createElement('div');
                success.textContent = '✓ Beállítások mentve';
                success.style.color = 'green';
                success.style.fontWeight = 'bold';
                success.style.marginTop = '10px';
                success.className = 'save-success-inline';
                modalSaveButton.parentNode.appendChild(success);
                setTimeout(() => success.remove(), 3000);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modalAnalyticsCheckbox = document.getElementById('analytics-cookies');
    const prefs = JSON.parse(localStorage.getItem('cookiePrefs'));
    if (modalAnalyticsCheckbox && prefs && typeof prefs.analytics === 'boolean') {
        modalAnalyticsCheckbox.checked = prefs.analytics;
    }
});
function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}