function loadpage(url) {
    const iframe = document.getElementById('contFrame');
    setTimeout(() => {
        iframe.src=url;
        iframe.onload = () => iframe.classList.remove('hidden');
    }, 500);
}