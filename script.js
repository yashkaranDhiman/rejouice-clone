let play_cursor = document.getElementById("play");
let page1 = document.getElementById("page1");
let heading = document.querySelectorAll("#page2-heading h2")
let main = document.querySelector("body")


gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



function page1Cursor(){
    page1.addEventListener("mousemove",(dets)=>{
        gsap.to(play_cursor,{
            x:dets.x-50,
            y:dets.y-50,
        })
    })
    page1.addEventListener("mouseenter",()=>{
        gsap.to(play_cursor,{
            scale:1,
            opacity:1
        })
    })
    page1.addEventListener("mouseleave",()=>{
        gsap.to(play_cursor,{
            scale:0,
            opacity:0
        })
    })
}
page1Cursor()


function pageAnimaition(){
    gsap.from(heading,{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from("#page4-heading h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from("#page5-heading h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"main",
            start:"top 77%",
            end:"top 80%",
            scrub:2
        }
    })
    gsap.from(".line",{
        width:0,
        stagger:.2,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"main",
            start:"top 60%",
            end:"top 70%",
            scrub:2
        }
    })
    gsap.from("#page2-text p",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"main",
            start:"top 67%",
            end:"top 66%",
            scrub:2
        }
    })
    gsap.from("#page5-text p",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"main",
            start:"top 57%",
            end:"top 56%",
            scrub:2
        }
    })
    gsap.from("#page4-text p",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page4 ",
            scroller:"main",
            start:"top 57%",
            end:"top 56%",
            scrub:2
        }
    })
    gsap.from("#page3-heading h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page3-heading h4",
            scroller:"main",
            start:"top 87%",
            end:"top 86%",
            scrub:2
        }
    })
    gsap.from("#about-main h2",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#about-main",
            scroller:"main",
            start:"top 87%",
            end:"top 86%",
            scrub:2
        }
    })
    gsap.from("#page7 #map",{
        y:100,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"main",
            start:"top 100%",
            end:"top 0%",
            scrub:2
        }
    })
    gsap.from("#page7 #address",{
        y:40,
        stagger:.2,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"main",
            start:"top 100%",
            end:"top 0%",
            scrub:2
        }
    })
    gsap.from("#page7 #name h2 span",{
        y:-50,
        stagger:.2,
        opacity:0,
        scrollTrigger:{
            trigger:"#page7 #address",
            scroller:"main",
            start:"top 100%",
            end:"top 60%",
            scrub:2
        }
    })
}
pageAnimaition()

function cardPlay(){
    let Imgcard1 = document.querySelector("#card1 img");
    let Imgcard2 = document.querySelector("#card2 img");
    let Imgcard3 = document.querySelector("#card3 img");

    let videocard1 = document.querySelector("#card1 video");
    let videocard2 = document.querySelector("#card2 video");
    let videocard3 = document.querySelector("#card3 video");

    Imgcard1.addEventListener("mouseenter",()=>{
        videocard1.play()
        Imgcard1.style.opacity = 0
    })
    Imgcard1.addEventListener("mouseleave",()=>{
        videocard1.pause()
        Imgcard1.style.opacity = 1
        videocard1.currentTime = 0;
    })

    
    Imgcard2.addEventListener("mouseenter",()=>{
        videocard2.play()
        Imgcard2.style.opacity = 0
    })
    Imgcard2.addEventListener("mouseleave",()=>{
        videocard2.pause()
        Imgcard2.style.opacity = 1
        videocard2.currentTime = 0;
    })
    
    Imgcard3.addEventListener("mouseenter",()=>{
        videocard3.play()
        Imgcard3.style.opacity = 0
    })
    Imgcard3.addEventListener("mouseleave",()=>{
        videocard3.pause()
        Imgcard3.style.opacity = 1
        videocard3.currentTime = 0;
    })
    
    
}
cardPlay()