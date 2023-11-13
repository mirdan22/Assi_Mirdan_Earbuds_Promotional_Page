   // Hero Content Vertical Scrolling Animation
   (() => {
    const shopNowButton = document.querySelector('.cta-button');

    gsap.from(shopNowButton, {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        markers: true
      },
      y: 50,
      opacity: 0
    });
  })();
   // Hero Content Vertical Scrolling Animation
   (() => {
    const heroContent = document.querySelector('.hero-content');
    const heroTitle = heroContent.querySelector('h2');
    const heroText = heroContent.querySelector('p');
    const heroCtaButton = heroContent.querySelector('.cta-button');

    gsap.from(heroTitle, {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        markers: true
      },
      y: 50,
      opacity: 0
    });

    gsap.from(heroText, {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        markers: true
      },
      y: 50,
      opacity: 0
    });

    gsap.from(heroCtaButton, {
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        markers: true
      },
      y: 50,
      opacity: 0
    });
  })();

  // Scroll Animation
  (() => {
    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");
    canvas.width = 1820;
    canvas.height = 1080;
    const frameCount = 386;
    const images = [];
    const buds = {
      frame: 0
    };

    for (let i = 0; i < frameCount; i++) {
      const img = document.createElement("img");
      img.src = `images/scroll/explode${(i + 1).toString().padStart(4, '0')}.jpg`;
      images.push(img);
    }

    gsap.to(buds, {
      frame: 386,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1,
        start: "top top",
        markers: true
      },
      onUpdate: render
    });

    images[0].addEventListener("onload", render);

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  })();

  // Navigation Toggle
  (() => {
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', function () {
      header.classList.toggle('menu-open');
    });
  })();

  // X-Ray

(() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

        function onDown() {
            dragging = true;
            console.log("Set to true")
        }

        function onUp() {
            dragging = false;
            console.log("Set to false")
        }

        function onMove(event) {
            //console.log("on move called");
            if(dragging===true) {
                //console.log("dragging");
                let x = event.clientX - imageCon.getBoundingClientRect().left;
                console.log(x)

                if(x < min) {
                    x = min;
                } else if (x > max) {
                    x = max-10;
                }

                drag.style.left = x + "px";
                left.style.width = x + "px";
            }
        }

        drag.addEventListener('mousedown', onDown);
        document.body.addEventListener('mouseup', onUp)
        document.body.addEventListener('mousemove', onMove);
})();

(() => {
    // Your existing code for explode-view canvas...

    // Shop Now button animation
    const shopButton = document.querySelector('.cta-button');
    gsap.to(shopButton, {
      y: -100, // Adjust the distance you want the button to move vertically
      opacity: 0, // Fade out the button during scrolling
      scrollTrigger: {
        trigger: ".hero", // Adjust the trigger element as needed
        start: "top top",
        scrub: 1.5,
        markers: true
      }
    });

    // Logo animation
    const logos = document.querySelectorAll('.logo img');
    gsap.to(logos, {
      y: -100, // Adjust the distance you want the logos to move vertically
      opacity: 0, // Fade out the logos during scrolling
      scrollTrigger: {
        trigger: ".hero", // Adjust the trigger element as needed
        start: "top top",
        scrub: 1.5,
        markers: true
      }
    });

    // "MAGIC AUDIO" text animation
    const magicAudioText = document.querySelector('.hero-content h2');
    gsap.to(magicAudioText, {
      y: -100, // Adjust the distance you want the text to move vertically
      opacity: 0, // Fade out the text during scrolling
      scrollTrigger: {
        trigger: ".hero", // Adjust the trigger element as needed
        start: "top top",
        scrub: 1.5,
        markers: true
      }
    });

    // "Experience High Resolution Audio" text animation
    const highResolutionAudioText = document.querySelector('.hero-content p');
    gsap.to(highResolutionAudioText, {
      y: -100, // Adjust the distance you want the text to move vertically
      opacity: 0, // Fade out the text during scrolling
      scrollTrigger: {
        trigger: ".hero", // Adjust the trigger element as needed
        start: "top top",
        scrub: 1.5,
        markers: true
      }
    });

  })();