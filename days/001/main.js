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
  scaleX: [
    {
      value: 0.8,
      duration: 300,
      delay: 300
    },
    {
      value: 1,
      duration: 300,
      delay: 300
    }
  ],
  scaleY: [
    {
      value: 0.75,
      duration: 300,
      delay: 300
    },
    {
      value: 1,
      duration: 300,
      delay: 295
    }
  ],
  loop: true
});
