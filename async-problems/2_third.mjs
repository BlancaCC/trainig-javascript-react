//source  https://codesandbox.io/s/sleepy-mountain-664fk?file=/src/third.js

// is the same than 1_second. 
import _ from "lodash";

const randomPromise = acc => {
  const n = _.random(0, 1);
  return n ? Promise.resolve(acc + "ok\n") : Promise.reject(acc + "no\n");
};

Promise.resolve("")
  .then(randomPromise)
  .catch(randomPromise)
  .then(randomPromise)
  .then(console.log)
  .catch(console.log);

// move the above code to async/await sintax
(async () => {
  //TODO CODE HERE
})();
