import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = document.querySelectorAll('.grid__item')

console.log(items)
items.forEach((item) => {
    const image = item.querySelector('img')
    console.log('img', image)

    gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    })
        .set(image, {
            // change the point of origin for scaling to occur
            transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
        })
        .to(image, {
            ease: 'none', // scale uniformly with scroll
            scale: 0,
        })
})
