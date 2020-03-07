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
  // translateY: [{ value: 100, duration: 500 }],
  // translateX: [{ value: 100, duration: 500 }],
  loop: true,
  delay: function(el, i, li) {
    return i * 1000;
  }
});
