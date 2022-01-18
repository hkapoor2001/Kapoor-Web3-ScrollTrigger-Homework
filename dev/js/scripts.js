import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin, ScrollTrigger);


const mainTL = gsap.timeline({scrollTrigger: {trigger:"#preloadersection", pin: true, scrub: true}});


function innerframefade(){
    const tl = gsap.timeline();
    tl.from("#innerframe",{alpha:0})
    .to("#innerframe",{alpha:1})
    return tl;
}

function outerframedraw(){
    const tl = gsap.timeline();
    tl.from("#outerframe",{drawSVG: "0", ease:"none"})
    
    return tl;
}


function drawpaintinglines1(){
    const tl = gsap.timeline();

    tl.from(".painting1",{drawSVG: "0", ease:"none"})

    return tl;
}


function rotate1(){
    const tl = gsap.timeline();

    tl.from("#painting1",{rotation: "0", alpha: 1})

    tl.to("#painting1",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"1same")

    tl.to("#innerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%"},"1same")

    tl.to("#outerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%"},"1same")

    return tl;
}

function drawpaintinglines2(){
    const tl = gsap.timeline();

    tl.from(".painting2",{drawSVG: "0%", ease:"none"})

    return tl;
}

function rotate2(){
    const tl = gsap.timeline();

    tl.from("#painting2",{rotation: "0", alpha: 1})

    tl.to("#painting2",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"2same")

    tl.to("#innerframe",{rotation: "180_cw", ease: "none", transformOrigin: "50% 50%"},"2same")

    tl.to("#outerframe",{rotation: "180_cw", ease: "none", transformOrigin: "50% 50%"},"2same")

    return tl;
}


function drawpaintinglines3(){
    const tl = gsap.timeline();

    tl.from(".painting3",{drawSVG: "0%", ease:"none"})

    return tl;
}

function rotate3(){
    const tl = gsap.timeline();

    tl.from("#painting3",{rotation: "0", alpha: 1})

    tl.to("#painting3",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"3same")

    tl.to("#innerframe",{rotation: "270_cw", ease: "none", transformOrigin: "50% 50%"},"3same")

    tl.to("#outerframe",{rotation: "270_cw", ease: "none", transformOrigin: "50% 50%"},"3same")

    return tl;
}

function drawpaintinglines4(){
    const tl = gsap.timeline();

    tl.from(".painting4",{drawSVG: "0%", ease:"none"})

    return tl;
}

function rotate4(){
    const tl = gsap.timeline();

    tl.from("#painting4",{rotation: "0", alpha: 1})

    tl.to("#painting4",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"4same")

    tl.to("#innerframe",{rotation: "360_cw", ease: "none", transformOrigin: "50% 50%"},"4same")

    tl.to("#outerframe",{rotation: "360_cw", ease: "none", transformOrigin: "50% 50%"},"4same")

    return tl;
}

function drawpaintinglines5(){
    const tl = gsap.timeline();

    tl.from(".painting5",{drawSVG: "0%", ease:"none"})

    return tl;
}

function rotate5(){
    const tl = gsap.timeline();

    tl.from("#painting5",{rotation: "0", alpha: 1})

    tl.to("#painting5",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"5same")

    tl.to("#innerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"5same")

    tl.to("#outerframe",{rotation: "90_cw", ease: "none", transformOrigin: "50% 50%", alpha: 0},"5same")

    tl.to("#preloadersection",{autoAlpha:0})


    return tl;
}






mainTL.add(innerframefade())
      .add (outerframedraw())
      .add(drawpaintinglines1())
      .add(rotate1())
      .add(drawpaintinglines2())
      .add (rotate2())
      .add(drawpaintinglines3())
      .add (rotate3())
      .add(drawpaintinglines4())
      .add (rotate4())
      .add(drawpaintinglines5())
      .add (rotate5())

GSDevTools.create();