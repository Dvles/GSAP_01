document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".left", {
        opacity: 1,
        scale: 1.5, 
        rotation: 720, 
        backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 50%)", 
        scrollTrigger: {
            trigger: '.left',
            start: "top 75%",   
            end: "top 25%",     
            scrub: true,        
            markers: false,       
            onUpdate: (self) => {
                let progress = self.progress; 
                gsap.to(".left", {
                    rotation: 720 * progress,  
                    scale: 1 + progress * 2,   
                    backgroundColor: "hsl(" + (progress * 360) + ", 100%, 50%)", 
                });
            }
        }
    });

    gsap.to(".center", {
        opacity: 1,
        rotation: 1080, 
        scale: 1.2,
        backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
        scrollTrigger: {
            trigger: '.center',
            start: "top 50%",   
            end: "top 0%",      
            scrub: true,        
            markers: false,
            onUpdate: (self) => {
                let progress = self.progress;
                gsap.to(".center", {
                    rotation: 1080 * progress,
                    scale: 1 + progress * 2,
                    backgroundColor: "hsl(" + (progress * 360) + ", 100%, 50%)",
                });
            }
        }
    });

    gsap.to(".right", {
        opacity: 1,
        scale: 1.2,
        rotation: -360,
        backgroundColor: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
        scrollTrigger: {
            trigger: '.right',
            start: "top 25%",   
            end: "top 0%",      
            scrub: true,        
            markers: false,
            onUpdate: (self) => {
                let progress = self.progress;
                gsap.to(".right", {
                    rotation: -360 * progress,
                    scale: 1 + progress * 3, 
                    backgroundColor: "hsl(" + (progress * 360) + ", 100%, 50%)", 
                });
            }
        }
    });
});
