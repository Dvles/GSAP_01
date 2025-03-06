document.addEventListener('DOMContentLoaded', (event)=>{

    gsap.registerPlugin(ScrollTrigger)

    gsap.to(".box", {
        rotation:360,
        duration:5,
        scrollTrigger: {
            trigger: '.box',
            marker: true,
            scrub: true
        }
    })

})

