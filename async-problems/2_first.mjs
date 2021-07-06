//Source  https://codesandbox.io/s/restless-dream-5iqhf?fontsize=14


import _ from "lodash";

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(ms);
      resolve(ms);
    }, ms)
  );

const getNumber = () => delay(_.random(1, 1000));

const arrayOfPromises = _.range(10).map(() => getNumber());

//Each promise in arrayOfPromises is solved with a different number.
//Get the sum of all those numbers  


/*Solution in the package 
Promise.all(arrayOfPromises).then((value) => console.log("Suma: " + _.sum(value)));

*/


 
Promise.all(arrayOfPromises).then((value) =>
  console.log("Suma: " + _.sum(value))
);

//console.log('Suma total ' + sumPromises)


