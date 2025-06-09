const tabTextColors = {
    'All': '#1a73e8',
    'Images': '#d93025',
    'Shopping': '#188038',
    'Maps': '#f9ab00'
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

function start() {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    applyTextColors();
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', start);
} else {
    start();
}
