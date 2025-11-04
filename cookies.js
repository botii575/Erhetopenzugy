class CookieManager {
    constructor() {
        this.widget = document.getElementById('cookieWidget');
        this.analyticsToggle = document.getElementById('analyticsToggle');
        this.init();
    }

    init() {
        const prefs = JSON.parse(localStorage.getItem('cookiePrefs'));
        if (!prefs) {
            setTimeout(() => this.showWidget(), 1000);
        } else {
            this.applyPreferences(prefs);
        }
        this.bindEvents();
    }

    showWidget() {
        if (this.widget) this.widget.classList.add('active');
    }

    hideWidget() {
        if (this.widget) this.widget.classList.remove('active');
    }

    bindEvents() {
        const acceptAll = document.querySelector('.accept-all');
        const saveBtn = document.querySelector('.save-settings');
        const closeBtn = document.querySelector('.close-widget');

        if (acceptAll) {
            acceptAll.addEventListener('click', () => {
                if (this.analyticsToggle) this.analyticsToggle.checked = true;
                this.savePreferences();
            });
        }

        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.savePreferences();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideWidget();
            });
        }

        if (this.analyticsToggle) {
            this.analyticsToggle.addEventListener('change', () => {
                const updatedPrefs = {
                    analytics: this.analyticsToggle.checked
                };
                localStorage.setItem('cookiePrefs', JSON.stringify(updatedPrefs));
                if (updatedPrefs.analytics) {
                    this.loadGoogleAnalytics();
                }
                this.showSavedNotice();
            });
        }
    }

    showSavedNotice() {
        const savedNotice = document.createElement('div');
        savedNotice.className = 'save-success';
        savedNotice.textContent = '✓ Beállítások mentve';
        savedNotice.style.color = 'green';
        savedNotice.style.fontWeight = 'bold';
        savedNotice.style.marginTop = '10px';

        const actions = document.querySelector('.widget-actions');
        if (actions && !document.querySelector('.save-success')) {
            actions.appendChild(savedNotice);
            setTimeout(() => savedNotice.remove(), 3000);
        }
    }

    savePreferences() {
        const prefs = {
            analytics: !!(this.analyticsToggle && this.analyticsToggle.checked)
        };
        localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
        if (prefs.analytics) {
            this.loadGoogleAnalytics();
        }
        this.showSavedNotice();
    }

    applyPreferences(prefs) {
        if (this.analyticsToggle) {
            this.analyticsToggle.checked = !!prefs.analytics;
            if (prefs.analytics) {
                this.loadGoogleAnalytics();
            }
        }
    }

    loadGoogleAnalytics() {
        if (window.gaLoaded) return;
        window.gaLoaded = true;

        const script = document.createElement('script');
        script.setAttribute('async', '');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CHRGGEDKS0';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-CHRGGEDKS0');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new CookieManager();
});
