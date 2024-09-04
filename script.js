let fname = document.querySelector("#name");
let sname = document.querySelector("#sname");
fname.addEventListener("mouseenter", function(){
   fname.style.color = "transparent";
});
fname.addEventListener("mouseleave", function(){
  fname.style.color = "orange";
});
sname.addEventListener("mouseenter", function(){
  sname.style.color = "transparent";
});
sname.addEventListener("mouseleave", function(){
 sname.style.color = "orange";
});     
let t1 = gsap.timeline();
t1.from("#nav-2",{
  y:-30,
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.3
})
t1.from(".part1 ", {
  opacity: 0,
  duration: 3,
  delay:1,
  ease: "power2.inOut"
})
t1.from(".photo-2 img", {
  scale:0,
  duration: 2,
  delay:1,
  ease: "power2.inOut"
})