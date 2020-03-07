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
  scaleX: [
    {
      value: 1.2,
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
      value: 1.1,
      duration: 300,
      delay: 300
    },
    {
      value: 1,
      duration: 300,
      delay: 300
    }
  ],
  // translateY: [{ value: 100, duration: 500 }],
  // translateX: [{ value: 100, duration: 500 }],
  loop: true,
  delay: function(el, i, li) {
    return i * 1000;
  }
});
