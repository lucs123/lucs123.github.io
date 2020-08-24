const ml11Wrapper = document.querySelector('.ml11 .letters');
const presentationWrapper = document.querySelector('.presentation-text');

ml11Wrapper.innerHTML = ml11Wrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
presentationWrapper.innerHTML = presentationWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    // delay: 2000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 300,
    // delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.ml11 .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


anime.timeline({ loop: false })
  .add({
    targets: '.presentation-text .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 6000,
    delay: (el, i) => 505 + 3 * i
})

const linksWrapper = document.querySelectorAll('.link');
linksWrapper.forEach(link => {
  link.innerHTML = link.textContent.replace(/\S/g, "<span class='letter'>$&</span>");})
console.log(linksWrapper)

const targets = ['.link .letter', '.title', 'a']
anime.timeline({ loop: false })
  .add({
    targets: targets,
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    delay: (el, i) => 30 * (i + 1)
  })

const headerLinks = document.querySelector('.header-links')
console.log(headerLinks)

ScrollReveal().reveal('.s2-title', { delay: 500 });
ScrollReveal().reveal('.container', { delay: 800 });
ScrollReveal().reveal('.project3-container', { delay: 800 });
// Wrap every letter in a span
// const headingWrapper = document.querySelector('h2');
// headingWrapper.innerHTML = headingWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// const linkWrapper = document.querySelector('.link');
// linkWrapper.innerHTML = linkWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: true })
//   .add({
//     targets: 'h2 .letter',
//     scale: [4, 1],
//     opacity: [0, 1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70 * i
//   }).add({
//     targets: 'h2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// anime.timeline({ loop: true })
//   .add({
//     targets: '.link .letter',
//     scale: [4, 1],
//     opacity: [0, 1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70 * i
//   }).add({
//     targets: 'h2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });  