// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        sentiment: document.getElementById('sentiment-analysis'),
        trends: document.getElementById('trend-tracking'),
        network: document.getElementById('network-analysis'),
        demographics: document.getElementById('audience-demographics'),
        timeline: document.getElementById('timeline-alerts')
    };

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetSection = event.target.getAttribute('data-target');
            renderSection(targetSection);
        });
    });

    function renderSection(section) {
        Object.keys(sections).forEach(key => {
            sections[key].style.display = 'none';
        });
        sections[section].style.display = 'block';
    }

    // Initialize the dashboard by rendering the sentiment analysis section
    renderSection('sentiment');
});