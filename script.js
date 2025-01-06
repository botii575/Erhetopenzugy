window.onload = function() {
    const dropdown = document.getElementById("service");
    if (dropdown) {
        dropdown.selectedIndex = 0;
    }

    const form = document.querySelector('.contact-form form');
    if (form) {
        form.reset();
    }

    if (!getCookie('cookiesAccepted')) {
        document.querySelector('.cookie-notice').style.display = 'block';
    }
};

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-top').style.display = 'none';
    }
};

document.querySelector('.scroll-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptCookies() {
    setCookie('cookiesAccepted', 'true', 365);
    document.querySelector('.cookie-notice').style.display = 'none';
}

document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const selectedService = form.service.value;
    const phone = form.phone.value.trim();

    if (!name || !email || !message || !selectedService || !phone) {
        alert('Kérjük, töltse ki az összes kötelező mezőt és válasszon szolgáltatást!');
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Kérjük, adjon meg egy érvényes 10 számjegyű telefonszámot!');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Kérjük, adjon meg egy érvényes e-mail címet!');
        return;
    }

    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            alert('Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot.');
        } else {
            alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.');
        }
    })
    .catch(error => {
        alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.');
    });
});

function showContent(id) {
  document.getElementById(id).style.display = "block";
}

function hideContent(id) {
  document.getElementById(id).style.display = "none";
}

// Bezárás a "x" gombra kattintva
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.onclick = function() {
    this.closest('.modal').style.display = "none";
  }
});

// Bezárás a modalon kívülre kattintva
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}


function saveCookieSettings() {
    const analyticsCookies = document.getElementById('analytics-cookies').checked;
    const marketingCookies = document.getElementById('marketing-cookies').checked;
    
    setCookie('analyticsCookies', analyticsCookies, 365);
    setCookie('marketingCookies', marketingCookies, 365);
    
    alert('Süti beállítások elmentve!');
}

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
