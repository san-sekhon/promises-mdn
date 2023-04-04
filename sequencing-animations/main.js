const aliceTumbling = [{ transform: "rotate(0) scale(1)" }, { transform: "rotate(360deg) scale(0)" }];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//async await implementation

async function animationSequence() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming);
  } catch (error) {
    console.error(`Could not run sequence: ${error}`);
    
  }
}
animationSequence();

//Promise chaining implementation

alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch(error => console.log(`Error animating Alices: ${error}`));

//Callback hell implementation

const promise1 = alice1.animate(aliceTumbling, aliceTiming).finished;
promise1.then(() => {
  const promise2 = alice2.animate(aliceTumbling, aliceTiming).finished;
  promise2.then(() => {
    alice3.animate(aliceTumbling, aliceTiming).finished;
  });
});