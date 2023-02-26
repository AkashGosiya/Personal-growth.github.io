// Laptop screen code
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  // desktop setup code here...
  gsap.from("#header", {duration:2, y:-100, opacity:10, ease:"bounce.out" });

const timeline = gsap.timeline ({defaults: {duration:1}})
timeline
    .from ('#header', {duration:1.5, y:-100, opacity:10, ease:"bounce.out"})
    .from ('.links', {opacity: 0, stagger: 1 })
    // mind map animation
    .fromTo(".orengebox",
    {x:0, y:100, opacity:0},
    {x:0, y:-100, opacity:1})
    .from("#pinkbox", {
        x:-100,
        opacity:0,scale:-2.3  },
        '<')
    .fromTo ('#bluebox',
    { x:200, y:0, opacity:0},
    { x:200, y:-250, scale:1.3, opacity:1 }        
    )
    .fromTo("#Yellowbox",
    {x:200, y:0, opacity:0},
    {x:0, y:1, opacity:1},
    '<')
       
    .fromTo("#Lightbluebox",
    {x:150, y:0, opacity:0},
    {x:300, y:1, opacity:1},
    '<')
    .fromTo("#Purplebox",
    {x:100, y:0, opacity:0},
    {x:200, y:1, opacity:1},
    '<')
    .fromTo("#Greenbox",
    {x:50, y:0, opacity:0},
    {x:100, y:1, opacity:1},
    '<')
    .fromTo(
        ".boyinstair",
        {x:-450, y:0, opacity:0, scale:0},
        {x:-450, y:-80, opacity:1, scale:1.5},
        '<'
    )
    .fromTo (
        ".girlpointing",
        {x:-450, y:0, opacity:0, scale:0},
        {x:-225, y:-50, opacity:1, scale:1.3},
        '<'
    )
});



mm.add("(max-width: 799px)", () => {
    // mobile setup code here...
    gsap.from("#header", {duration:2, y:-100, opacity:10, ease:"bounce.out" });

const timeline = gsap.timeline ({defaults: {duration:1}})
timeline
    .from ('#header', {duration:1.5, y:-100, opacity:10, ease:"bounce.out"})
    .from ('.links', {opacity: 0, stagger: 1 })
    // mind map animation
    .fromTo(".orengebox",
    {x:0, y:100, opacity:0},
    {x:0, y:-80, opacity:1})
    .from("#pinkbox", {
        x:-100,
        opacity:0,scale:-2.3  },
        '<')
    .fromTo ('#bluebox',
    { x:10, y:0, opacity:0},
    { x:80, y:-120, scale:1.3, opacity:1 }        
    )
    .fromTo("#Yellowbox",
    {x:200, y:0, opacity:0},
    {x:0, y:1, opacity:1},
    '<')
       
    .fromTo("#Lightbluebox",
    {x:150, y:0, opacity:0},
    {x:130, y:1, opacity:1},
    '<')
    .fromTo("#Purplebox",
    {x:10, y:0, opacity:0},
    {x:100, y:1, opacity:1},
    '<')
    .fromTo("#Greenbox",
    {x:10, y:0, opacity:0},
    {x:50, y:1, opacity:1},
    '<')
    .fromTo(
        ".boyinstair",
        {x:-150, y:0, opacity:0, scale:0},
        {x:-200, y:-80, opacity:1, scale:1.9},
        '<'
    )
    .fromTo (
        ".girlpointing",
        {x:-450, y:0, opacity:0, scale:0},
        {x:-80, y:-50, opacity:1, scale:1.5},
        '<'
    )
  });

