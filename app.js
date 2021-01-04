const navButton = document.getElementById('menu_btn');

function toggleNav({target}) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;

    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);