document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // Left box (trigger at 1/4 of the page)
    gsap.to(".left", {
        rotation: 360,
        scrollTrigger: {
            trigger: '.left',
            start: "top 75%",   // Trigger when the top of .left reaches 75% of the viewport height (1/4 of the page)
            end: "top 25%",     // End when the top of .left reaches 25% of the viewport height
            scrub: true,        // Syncs with scroll
            markers: true       // For debugging (remove in production)
        }
    });

    // Right box (trigger at 1/2 of the page)
    gsap.to(".right", {
        rotation: 360,
        scrollTrigger: {
            trigger: '.right',
            start: "top 50%",   // Trigger when the top of .right reaches 50% of the viewport height (1/2 of the page)
            end: "top 0%",      // End when the top of .right reaches the top of the viewport
            scrub: true,        // Syncs with scroll
            markers: true       // For debugging (remove in production)
        }
    });

    // Center box (trigger at 3/4 of the page)
    gsap.to(".center", {
        rotation: 360,
        scrollTrigger: {
            trigger: '.center',
            start: "top 25%",   // Trigger when the top of .center reaches 25% of the viewport height (3/4 of the page)
            end: "top 0%",      // End when the top of .center reaches the top of the viewport
            scrub: true,        // Syncs with scroll
            markers: true       // For debugging (remove in production)
        }
    });
});
