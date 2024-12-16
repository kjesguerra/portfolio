$(document).ready(function () {
  function startMarquee() {
    const $marquee = $(".marquee");
    const containerWidth = $(".marquee-container").width();
    const textWidth = $marquee.width();

    // Set initial position off the right side
    $marquee.css({ left: containerWidth });

    // Animate the marquee
    $marquee.animate(
      { left: -textWidth },
      10000, // Duration (adjust as needed)
      "linear",
      startMarquee // Loop the animation
    );
  }

  startMarquee();
});

