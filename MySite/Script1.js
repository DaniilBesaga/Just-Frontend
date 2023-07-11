const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    navlist.classList.toggle('open');
}

sr.reveal('.images', { delay: 400, origin: 'top' });
sr.reveal('#firstimg', { delay: 400, origin: 'top' });
sr.reveal('#secondimg', { delay: 450, origin: 'bottom' });
sr.reveal('#thirdimg', { delay: 500, origin: 'top' });
