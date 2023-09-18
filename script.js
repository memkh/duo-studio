function init() {
  // const scroll = new LocomotiveScroll({
  //     el: document.querySelector('.main'),
  //     smooth: true
  // });
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();
var cursor = document.querySelector(".cursor");
// var main = document.querySelector(".main");
var video = document.querySelector(".page1 video");
document.addEventListener("mousemove", function (val) {
  cursor.style.left = val.x + 10 + "px";
  cursor.style.top = val.y + 10 + "px";
});
video.addEventListener("mouseenter", function () {
  cursor.innerHTML = "SOUND ON";
  cursor.style.borderRadius = "30px";
  cursor.style.cursor = "pointer";
  cursor.style.width = "100px";
});
video.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  cursor.style.width = "20px";
  cursor.style.borderRadius = "50%";
  cursor.style.cursor = "auto";
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -80,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 55,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top -310%",
    end: "top -350%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0D0D",
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){
 elem.addEventListener("mouseenter", function(){
  var att = elem.getAttribute("data-image");
  cursor.style.borderRadius = "0";
  cursor.style.height = "200px";
  cursor.style.width = "200px";
  cursor.style.backgroundImage = `url(${att})`;
 });
 elem.addEventListener("mouseleave", function(){
  elem.style.backgroundColor = "transparent";
  cursor.style.borderRadius = "50%";
  cursor.style.height = "20px";
  cursor.style.width = "20px";
  cursor.style.backgroundImage = ``;
 })
});
var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
var circle = document.querySelector(".circle");
var h1 = document.querySelectorAll("#purple h1");
h4.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    purple.style.display = "block";
    purple.style.opacity = "1";
    var html = elem.innerHTML;
    h1.forEach(function(elem){
      elem.innerHTML = html;
    });
  });
  elem.addEventListener("mouseleave", function(){
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});
circle.addEventListener("mouseenter", function(){
  purple.style.display = "block";
  purple.style.opacity = "1";
  h1.forEach(function(elem){
    elem.innerHTML = "ExtraCredits";
  });
});
circle.addEventListener("mouseleave", function(){
  purple.style.display = "none";
  purple.style.opacity = "0";
});
