//creo un observer per la scroll animation
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach(entry => {
            //se la entry entra nel viewport aggiungo la classe enter e tolgo l'observer
            if (entry.isIntersecting)  {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
);

export default {
    bind (el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}