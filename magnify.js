window.ONE.funlist.performance = function () {
  ScrollTrigger.create({
    trigger: ".cbcn-performance-fix",
    start: "top top",
    end: "+=2000",
    pin: true,
  });

  ScrollTrigger.create({
    trigger: ".cbcn-performance-section-box",
    start: "top center",
    end: "top top",
    scrub: true,
    animation: gsap.timeline().to(".cbcn-performance-t2", {
      "text-shadow":
        "0 0 10px rgba(255, 255, 255, 0.8), 0 10px 70px #ff0011, 0 0 35px #d1000e",
    }),
  });

  ScrollTrigger.create({
    trigger: ".cbcn-performance-section-box",
    start: "top top",
    end: "+=1800",
    scrub: true,
    onUpdate: function (e) {
      const performanceVideo = $(".cbcn-performance-media video")[0];
      try {
        performanceVideo.currentTime = e.progress * performanceVideo.duration;
      } catch (error) {
        if (performanceVideo.duration) {
          performanceVideo.currentTime = e.progress * performanceVideo.duration;
        } else {
          performanceVideo.addEventListener("loadedmetadata", function () {
            performanceVideo.currentTime =
              e.progress * performanceVideo.duration;
          });
        }
      }
    },
  });

  ScrollTrigger.create({
    trigger: ".cbcn-performance-section-box",
    start: "top top",
    end: "+=1800",
    scrub: true,
    animation: gsap
      .timeline()
      .fromTo(
        ".cbcn-performance-title",
        { opacity: 1, marginTop: 0 },
        { opacity: 0, marginTop: "-3em" },
      )
      .fromTo(
        ".cbcn-performance-txt",
        { opacity: 0, marginTop: "3em" },
        { opacity: 1, marginTop: 0 },
      ),
  });
  
  ScrollTrigger.create({
    trigger: ".cbcn-performance-param2",
    start: "top 85%",
    end: "20% 15%",
    scrub: true,
    animation: gsap.timeline().to(".cbcn-cooling-section", {
      onStart: function () {
        $(".cbcn-performance-svg").removeClass("active");
      },
    }),
  });
  
  ScrollTrigger.create({
    trigger: ".cbcn-performance-param2",
    start: "85% 85%",
    end: "20% 15%",
    scrub: true,
    animation: gsap.timeline().to(".cbcn-cooling-section", {
      onStart: function () {
        $(".cbcn-performance-svg").addClass("active");
      },
    }),
  });
};
