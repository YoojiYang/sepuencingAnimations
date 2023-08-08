const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// alice1.animate(aliceTumbling, aliceTiming);
// alice2.animate(aliceTumbling, aliceTiming);
// alice3.animate(aliceTumbling, aliceTiming);

function animateElement(element) {
  return new Promise((resolve) => {
    const animation = element.animate(aliceTumbling, aliceTiming);
    animation.onfinish = resolve;
  });
}

animateElement(alice1)
  .then(() => animateElement(alice2))
  .then(() => animateElement(alice3))
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });