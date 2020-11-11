'use strict';

const { resolve } = require("path");

new Promise((resolve) => {
  resolve(2);
})
  .then((v1) => {
    return new Promise((resolve) => {
      resolve(v1 * 3);
    });
  })
  .then((v2) => {
    return new Promise((resolve) => {
      resolve(v2 * 4);
    });
  })
  .then((v3) => {
    console.log(v3);
  });