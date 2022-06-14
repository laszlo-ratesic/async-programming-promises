import setText, { appendText, showWaiting, hideWaiting } from './results.mjs';

export function get() {
  // starts by calling xhr get request
  axios
    .get('http://localhost:3000/orders/1')
    // fulfills promise
    .then(({ data }) => {
      setText(JSON.stringify(data));
    });
}

export function getCatch() {
  axios
    .get('http://localhost:3000/orders/123')
    .then(({ data }) => {
      setText(JSON.stringify(data));
    })
    .catch((err) => setText(err));
}

export function chain() {
  axios
    .get('http://localhost:3000/orders/1')
    .then(({ data }) => {
      return axios.get(
        `http://localhost:3000/addresses/${data.shippingAddress}`
      );
    })
    .then(({ data }) => {
      setText(`City: ${data.city}`);
    });
}

export function chainCatch() {
  axios
    .get('http://localhost:3000/orders/1')
    .then(({ data }) => {
      return axios.get(
        `http://localhost:3000/addresses/${data.shippingAddress}`
      );
    })
    .then(({ data }) => {
      setText(`City: ${data.my.city}`);
    })
    .catch((err) => setText(err));
}
export function final() {}
