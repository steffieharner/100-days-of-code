anime({
  targets: "div.box.black",
  translateY: [
    { value: 100, duration: 500 },
    { value: 0, duration: 500 }
  ],
  rotate: {
    value: "1turn"
  },
  delay: function(el, i, li) {
    return i * 1000;
  }
});

anime({
  targets: ".heart",
  easing: "easeOutElastic(1, .8)",
  scale: [
    {
      value: 0.8,
      duration: 300,
      delay: 50
    },
    {
      value: 0.85,
      duration: 300,
      delay: 100
    },
    {
      value: 1,
      duration: 300,
      delay: 80
    }
  ],
  loop: true
});
