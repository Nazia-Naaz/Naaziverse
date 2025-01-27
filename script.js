

function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()

function cursoR(){
    var cursorDot = document.querySelector("[data-cursor-dot]")
var cursorOutline = document.querySelector("[data-cursor-outline]")

window.addEventListener("mousemove",function(e){
    const posX = e.clientX;
     const posY = e.clientY;
     cursorDot.style.left =`${posX}px`;
     cursorDot.style.top =`${posY}px`;

     cursorOutline.style.left =`${posX}px`;
     cursorOutline.style.top =`${posY}px`;

     cursorOutline.animate({
        left:`${posX}px`,
        top: `${posY}px`,
     }, {duration: 1000, fill: "forwards"});
})
}
cursoR()



var slide1h1 = document.querySelectorAll('#page2 .slide1h1 h1');
slide1h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(-96%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
       /*markers: true,*/
      scrub: 3
    }
  })
})
var slide2h1 = document.querySelectorAll('#page2 .slide2h1 h1');
slide2h1.forEach(function (elem) {
  gsap.to(elem, {
    transform: 'translateX(0%)',
    ease: 'linear',
    duration: 4,
    scrollTrigger: {
      trigger: '#page2',
      scroller: '#main',
      // markers: true,
      scrub: 3
    }
  })
})






var tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#page6',
    start:'top top',
    scrub:1,
    scroller:'#main',
    pin:true,
   // markers:true
  }
})

tl.to("#page6 #page6-cont h1",{
  top:'-50%'
})

var tl2 = gsap.timeline();
tl2.from("#page1",{
  y:'200',
  opacity: 0,
  duration: 1.5,
  ease:Expo.easeInout,
  delay : 1.2,
  stagger: 2,
})











function page2Animation() {
  var rightElems = document.querySelectorAll("#page7-part2 .elem")

rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
       elem.childNodes[1].style.opacity = 1
   
  })

  elem.addEventListener("mouseleave",function(){
      elem.childNodes[1].style.opacity = 0

      
  })
  elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[1],{
          x:dets.x - elem.getBoundingClientRect().x-70,
          y:dets.y - elem.getBoundingClientRect().y-90
        
      })
  })
})


}


page2Animation() 
const clock = document.getElementById("digital-clock")
setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
  

},1000)






  












