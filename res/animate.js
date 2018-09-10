const mq = window.matchMedia('(min-width: 500px)');
if (mq.matches) {
// window width is at least 500px
//var pc = document.getElementById('pc').getBoundingClientRect();

var timer = null;
var wp = document.getElementById('wp');
var tm = document.getElementById('tm');
var pc = document.getElementById('pc');

var vh = window.innerHeight;
var tm = document.getElementById('tm');


var master = new TimelineMax({paused: true});
//master.add();

var ttl = new TimelineMax({paused: true});
//ttl.to(#)

var ptl = new TimelineMax({paused: true});
ptl.to('#hr', 4, {rotation:360, svgOrigin:"-128.54px -145.643px", 
    ease:Linear.easeNone, delay:0.6})
  .to('#mn', 2, {rotation:360, svgOrigin:"-128.54px -145.643px", 
    ease:Linear.easeNone, repeat:1, delay:0.6}, 0);

document.addEventListener("scroll", tiktok);
document.addEventListener("touchmove", queueUpdate);  
//TweenMax.ticker.addEventListener("tick", update);

//TweenLitie.to('#eiffel', 16, {y:"220px"});

function update() {
var pcBounds = pc.getBoundingClientRect();
var tmBounds = tm.getBoundingClientRect();
var pcHalf = pcBounds.height / 2;
var vhHalf = vh / 2;
var pcCurrentMiddle = pcBounds.top - pcHalf;
console.log(pcBounds.top);
console.log(pcBounds.bottom);

if (pcBounds.top >= 0 && pcBounds.bottom <= vh) {
    if (!ptl.isActive()){
    console.log("Animation Runs..");
    ptl.restart();
}
}
else ptl.stop();
}

function tiktok(){
    if(timer !== null){
       clearTimeout(timer);
    }
    timer = setTimeout(update, 500);
}
}
else {
// window width is less than 500px
    alert("Hello there");
}
