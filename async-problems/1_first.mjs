import _ from "lodash";

const delay = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(ms);
      resolve();
    }, ms)
  );

const getPromises = () => _.map(_.range(4), () => delay(_.random(300)));

//TODO
// receives an array of promises
// returns a promise, that's solved as soon as any of the promises in the array is solved

// solution: using Promise.any 
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
const getFasterPromise = promises => {
 return Promise.any(promises)
    
};

(async () => {
    try {
  //await getFasterPromise(getPromises());
        await Promise.any( getPromises()) ;
        console.log("this must be the second log");
    }
    catch(err){
        console.log('Error: ' + err)
    }
})();
