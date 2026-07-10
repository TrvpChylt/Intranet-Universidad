function toggleScroll() {
    const button = document.getElementById('floatButton');
    const nav = document.getElementById('navbarra');

    if (button.textContent === '↓') {
        nav.scrollIntoView({ behavior: 'smooth' });
        button.textContent = '↑';
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        button.textContent = '↓';
    }
}