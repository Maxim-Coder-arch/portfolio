!function() {
    document.readyState === 'complete' && typeof window !== 'undefined' && typeof ScrollReveal === 'undefined' || typeof gsap === 'undefined' ? main() : window.addEventListener('load', (function(){main()}()))
}();
function main() {
    class animation {
        constructor(innerEl, distance, origin, duration, interval) {
            this.innerEl = innerEl;
            this.distance = distance;
            this.origin = origin;
            this.duration = duration;
            this.interval = interval;
        };
        animeForElement() {
            ScrollReveal().reveal(this.innerEl, {
                origin:this.origin,
                distance:this.distance,
                duration:this.duration,
                interval:this.interval,
                opacity:0,
                viewFactor:0.8,
                easing: 'ease-in-out'
            });
        };
    };
    document.addEventListener('scroll', () => {
        const sc = window.scrollY;
        const maxBlur = 200; 
        const blurAmount = Math.min(sc * 0.01, maxBlur);  
        document.querySelector('.layerparallax2').style.filter = `blur(${blurAmount}px)`;
    });
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "0% 0%",
            end: "100% 0%",
            scrub: 0
        }
        });
        const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
        ];
        layers.forEach((layerObj, idx) => {
        tl.to(
            triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
            {
            yPercent: layerObj.yPercent,
            ease: "none"
            },
            idx === 0 ? undefined : "<"
            );
        });
    });
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollY / docHeight) * 100;
        document.querySelector('.lineScrollBar').style.width = `${scrollPercent}px`;
    });
    let forDocumentStyles = document.readyState === 'loading' ? true : false;
    if (window.innerWidth > 600) {
        if (forDocumentStyles) {
            let scrollSpeed = 0;
            let isScrolling = false;
            window.addEventListener("wheel", function(event) {
                event.preventDefault(); 
                scrollSpeed += event.deltaY * 0.07;
                if (!isScrolling) {
                    isScrolling = true;
                    requestAnimationFrame(smoothScroll);
                }
            }, { passive: false });
            function smoothScroll() {
                scrollSpeed *= 0.9;
                window.scrollBy(0, scrollSpeed);
                if (Math.abs(scrollSpeed) > 0.5) {
                    requestAnimationFrame(smoothScroll);
                } else {
                    isScrolling = false;
                };
            };
        };
    } else {
        if (forDocumentStyles) {
            let scrollSpeed = 0;
            let isScrolling = false;
            window.addEventListener("wheel", function(event) {
                event.preventDefault(); 
                scrollSpeed += event.deltaY * 0.1;
                if (!isScrolling) {
                    isScrolling = true;
                    requestAnimationFrame(smoothScroll);
                }
            }, { passive: false });
            function smoothScroll() {
                scrollSpeed *= 0.9;
                window.scrollBy(0, scrollSpeed);
                if (Math.abs(scrollSpeed) > 0.5) {
                    requestAnimationFrame(smoothScroll);
                } else {
                    isScrolling = false;
                };
            };
        };
    };
    const burger = document.getElementById('nav-icon3');
    const menu = document.querySelector('.mobile-menu');
    const htmlX = document.querySelector('html')
    burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    htmlX.classList.toggle('zetscroll')
    });
    (function() {
        const ed = document.querySelector('.ed')
        , diz = document.querySelector('.diz')
        , make = document.querySelector('.make')
        , visual = document.querySelector('.visual')
        , read = document.querySelector('.read')
        , thiss = document.querySelector('.thiss')
        , hell = document.querySelector('.hell')
        , relax = document.querySelector('.relax');
        const beginAnimation = [hell, ed, diz, make, visual, read, thiss, relax];
        const animationElement1 = new animation(beginAnimation, '50px', 'bottom', 800, 80);
        animationElement1.animeForElement();
    }());
    (function() {
        document.querySelector('.arrow').style.height = '80%'
    }());
    (function() {
        const animationElement3 = new animation(document.querySelector('.logotype'), '50px', 'left', 700, 0);
        animationElement3.animeForElement();
    }());
    (function() {
        var lis = []
        for (var i = 1; i <= 4; i++) {
            var li = document.querySelector(`.li${i}`);
            if (li) {lis.push(li)};
        };
        const animationElement2 = new animation(lis, '30px', 'top', 800, 120);
        animationElement2.animeForElement();
    }());
    (function() {
        var allGetEllElements = []
        for (var i = 1; i <= 20; i++) {
            var getEll = document.querySelector(`.getEll${i}`);
            if (getEll) {allGetEllElements.push(getEll)};
        };
        const animationElement4 = new animation(allGetEllElements, '30px', 'bottom', 700, 80);
        animationElement4.animeForElement();
    }());
    (function() {
        var textElementsAddit = []
        for (var i = 1; i <= 20; i++) {
            var additElement = document.querySelector(`.additElement${i}`);
            if (additElement) {textElementsAddit.push(additElement)};
        };
        const animationElement5 = new animation(textElementsAddit, '30px', 'bottom', 700, 80);
        animationElement5.animeForElement();
    }());
    (function() {
        var boxs = []
        for (var i = 1; i <= 5; i++) {
            var bx = document.querySelector(`.box${i}`);
            if (bx) {boxs.push(bx)};
        };
        const animationElement6 = new animation(boxs, '30px', 'bottom', 800, 120);
        animationElement6.animeForElement();
    }());
    (function() {
        const animationElement7 = new animation(document.querySelector('.conntentLoad1'), '50px', 'left', 900, 0);
        animationElement7.animeForElement();
        const animationElement8 = new animation(document.querySelector('.conntentLoad2'), '50px', 'right', 900, 0);
        if (window.innerWidth > 900) {
            animationElement8.animeForElement();
        }
    }());
    (function() {
        var animatedTags = []
        for (var i = 1; i <= 25; i++) {
            var animeTag = document.querySelector(`.animatedtag${i}`);
            if (animeTag) {animatedTags.push(animeTag)};
        };
          const animationElement9 = new animation(animatedTags, '60px', 'bottom', 700, 80);
          animationElement9.animeForElement();
    }());
    (function() {
        const stage = document.querySelector('.stageat')
        const bg = document.querySelector('.bgat')
        const word = document.querySelector('.wordat')
        const nClones = 12
        for (var i = 0; i<nClones; i++){
        const clone1 = word.cloneNode(true)  
        const clone2 = word.cloneNode(true)
        bg.prepend(clone1)
        bg.prepend(clone2)
        gsap.timeline({
            repeat:-1,
            onRepeat:()=> { bg.append(clone1); bg.append(clone2) }
        }).fromTo([clone1, clone2], {
            position:'absolute',
            attr:{class:'clone'},
            scaleY:0.7
        }, {
            duration:4,
            y:(j)=>(j%2)?200:-200,
            scaleY:1.2,
            ease:'power3'
        })
        .play( i/nClones*4 )
        }
    }());
    (function() {
        ScrollReveal().reveal('.addit', {
            easing: 'ease-in-out',
            beforeReveal: () => {
                const addit = document.querySelector('.addit');
                addit.classList.add('separator');
            }
        });
    }());
    (function() {
        ScrollReveal().reveal('.line1', {
            viewFactor: 0.9,
            beforeReveal: (function() {
                var ls = [];
                for (var i = 1; i <= 4; i++) {
                    var el = document.querySelector(`.line${i}`)
                    if (el) {ls.push(el)}
                };
                if (window.innerWidth > 860) {

                    ls.forEach((el, index) => {
                        if (index % 2 !== 0) {
                            el.style.rotate = '-10deg';
                        }else {
                            el.style.rotate = '10deg'
                        };
                    });
                }
            })
        });
    }());
    ScrollReveal().reveal('.arrowChart', {
        viewFactor: 0.6,
        beforeReveal: (function() {
            document.querySelector('.arrowChart').style.height = '60px';
            document.querySelector('.arrowChart').style.opacity = '100%';
        })
    });
    (function() {
        var cardWithAblot = [];
        for (let i = 0; i <= 4; i++) {
            var ablot = document.querySelector(`.card_with_a_blot${i}`);
            if (ablot) {
                cardWithAblot.push(ablot);
            };
        };
        const animationElement10 = new animation(cardWithAblot, '50px', 'bottom', 700, 100);
        animationElement10.animeForElement();
    }());
};







