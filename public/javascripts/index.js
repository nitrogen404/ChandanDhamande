var textWrapper = document.querySelector('.name .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.name .line',
    scaleY: [0,1],
    opacity: [0.2,1],
    easing: "easeOutExpo",
    duration: 800,
    
  })
  .add({
    targets: '.name .line',
    translateX: [0, document.querySelector('.name .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
    opacity: [1, 0.1]
  }).add({
    targets: '.name .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1),
    
  }).add({
    targets: '.name',
    opacity: 0.8,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });