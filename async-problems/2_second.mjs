//source: https://codesandbox.io/s/sleepy-mountain-664fk?file=/src/second.js:0-357

import _ from "lodash";

//do not touch this function
const oldFunction = () => {
  const n = _.random(0, 1);
  if (n) {
    return "ok";
  } else {
    throw new Error("Error");
  }
};

//todo
//return a promise that wraps oldFunction
const getPromise = () => {

    return new Promise( (resolve, reject) => {
        try {
            resolve(oldFunction())
        }
        catch (err){
            reject ('Error')
        }
    }
    )
};

_.range(10).forEach(() =>
  getPromise()
    .then(console.log)
    .catch(console.log)
);
