// ==UserScript==
// @name         Google Search Tab Text Colorizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fixing unpredictable behaviour.
// @author       Deniz Isik
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const tabTextColors = {
        'All': '#1a73e8',
        'Images': '#d93025',
        'Shopping': '#188038',
        'Maps': '#f9ab00'
    };

    function applyTextColors() {
        const labels = document.querySelectorAll('div.YmvwI, div.eJWNqc, div.Lu57id'); // This is the place that is likely to break over time.
        labels.forEach(el => {
            const text = el.textContent.trim();
            const color = tabTextColors[text];
            if (color) {
                el.style.color = color;
            }
        });
    }

    const observer = new MutationObserver(applyTextColors);

    const start = () => {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        applyTextColors();
    };

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
