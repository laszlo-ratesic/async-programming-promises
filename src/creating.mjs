import setText, { appendText } from './results.mjs';

export function timeout() {
  const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Timeout!');
    }, 1500);
  });

  wait.then((text) => setText(text));
}

export function interval() {
  let counter = 0;
  const wait = new Promise((resolve) => {
    setInterval(() => {
      console.log('interval');
      resolve(`Timeout! ${++counter}`);
    }, 1500);
  });

  wait.then((text) => setText(text))
  .finally(() => appendText(` -- Done ${counter}`));
}

export function clearIntervalChain() {}

export function xhr() {}

export function allPromises() {}

export function allSettled() {}

export function race() {}
