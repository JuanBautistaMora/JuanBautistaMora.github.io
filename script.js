function openChat(e) {
    e.preventDefault();
    window.open('https://wa.me/5491136614168', '_blank');
}

document.getElementById('cta').addEventListener('click', openChat);
document.getElementById('whatsappFloat').addEventListener('click', openChat);
