// loader animation 
function sharyjs(){
    Shery.mouseFollower();


Shery.makeMagnet(".magnet" );

// Shery.textAnimate(".text-target" /* Element to target.*/, {
//     //Parameters are optional.
//     style:2,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });
}
function loaderanimation(){


    let tl = gsap.timeline()


    tl.from(".load-mid span",{
        x:100,
        duration:.8,
        stagger:.1
    })
    .to(".loader>div>span,.loader>div>h1>span , load-mid span",{
        y:-100,
        duration:.8,
        delay:.4,
        easeease: "circ.out"
    })
    .to(".loader",{
        height:0,
        padding:0,
        
        duration:.4
    },"uploader")
    .to(".loader-after",{
        height:"100%",
        backgroundColor:"#14cf93",
        
        duration:.4
    },"uploader")
    .to(".loader-after",{
        height:"0%",
        backgroundColor:"transperent",
        top:0,
        duration:.3,
        delay:-.01,
       ease: "circ.out",
       onComplete:function(){
           sharyjs();
       }
    })
    .from(".heading2 div h1,.heading2 div img",{
        y:200,
        duration:.5,
        opacity:0
    })
    .from(".heading1 div h1,.heading1 div p",{
        y:200,
        duration:.5,
        opacity:0,
        delay:-.3
    })
    
    .from("#nav-left>div,#nav-right>div",{
        y:200,
        duration:.5,
        opacity:0,
        delay:-.3
    },"nav")
    .from(".heading1 div:nth-child(2) div",{
        y:200,
        duration:.5,
        opacity:0,
        delay:-.3,
      
    },"nav")
    
    
}
loaderanimation();

// function animatesvg(){
//     document.querySelectorAll("#Visual>g").forEach((e)=> {
//         var character = e.childNoads[1].childNoads[1];

//         character.style.strokeDasharray = character.getTotalLength()+'px';
      
//         character.style.strokeDashoffset = character.getTotalLength()+'px';
      
//     });

//     gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
//         strokeDashoffset:0,
//         duration:2,
//         delay:5
//     })
// }

// animatesvg();


gsap.from(".three-cards div:nth-child(1) h3",{
  y: 150,
  opacity:0,
  duration:.8,
  scrollTrigger:{
    trigger:".three-cards div:nth-child(1) h3",
    scroller:"body",
    
    start:"top 105%"
  }
})

gsap.from(".three-cards div:nth-child(2) img",{
    rotate: 20,
    transition:"none",
    scrollTrigger:{
      trigger:".three-cards div:nth-child(1) h3",
      scroller:"body",
      
      start:"top 115%",
      scrub:2
    }
  })

  function string(){
    
    let final = "M 0 40 Q 437 40 874 40"

    window.addEventListener("mouseover",function(dets){
        path = `M 0 40 Q ${dets.x} ${dets.y} 874 40`

        gsap.to(".string svg path",{
            attr:{d:path},
            duration:0.4,
            ease:"power3.out"
        })
    })

    window.addEventListener("mouseleave",function(){
        gsap.to(".string svg path",{
            attr:{d:final},
            duration:0.8,
            ease:"elastic.out(1,0.2)"
        })
    })
  }
  
  function future(){
    document.querySelector(".play").addEventListener("mouseover",function(){
        gsap.to(".page4 video",{
            opacity:1,
            duration:.5
        })
    })
    document.querySelector(".play").addEventListener("mouseleave",function(){
        gsap.to(".page4 video",{
            opacity:0,
            duration:.5
        })
    })
  }
  future();
  