var t1 = gsap.timeline()

gsap.from('.st',{
    stagger : .2,
    x:"-250%",
    duration: 2,
    ease:'Expo.easeInOut'
})

gsap.from("#content",{
    y:"-100%",
    opacity:0,
    duration: 2,
    delay:.6,
    ease:"Expo.easeInOut"

})

gsap.from("#right",{
    x:"200%",
    duration:2,
    ease:'Expo.easeInOut'
})

 gsap.from("#btmlft",{
    x:"100%",
    duration:2,
    delay:.6,
    ease:'Expo.easeInOut'
})

t1.from("#cart",{
    y:"40%",
    opacity:0,
    duration:1,
    delay:1.5,
    ease:'Expo.easeInOut'
})
.from("#line",{
    width:"0",
    duration:1,
    ease:'Expo.easeInOut'
})

gsap.from('.left',{
    y:"200%",
    stagger : .2,
    opacity:0,
    duration:2,
    delay:1.5,
    ease:'Expo.easeInOut'
})

gsap.from('.prc',{
    y:"200%",
    stagger : .2,
    opacity:0,
    duration:2,
    delay:1.5,
    ease:'Expo.easeInOut'
})

gsap.from('.circ',{
    y:"100%",
    stagger : .3,
    opacity:0,
    duration:2,
    delay:1.5,
    ease:'Expo.easeInOut'
})