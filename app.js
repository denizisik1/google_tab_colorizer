// ==UserScript==
// @name         Google Search Tab Text Colorizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fixing a moronic behaviour.
// @author       Deniz Isik
// @include      *://www.google.*/search*
// @include      *://www.google.*/webhp*
// @include      *://www.google.*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const tabTextColors = {
        'All': '#0000FF',
        'Images': '#FFFF00',
        'Shopping': '#00FFFF',
        'Maps': '#00FF00'
    };

    function applyTextColors() {
        const labels = document.querySelectorAll('div.YmvwI, div.eJWNqc, div.Lu57id');
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
