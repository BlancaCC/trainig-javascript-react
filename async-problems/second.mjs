import _ from "lodash";


const randomPromise = acc => {
  const n = _.random(0, 1);
  return n ? Promise.resolve(acc + "a") : Promise.reject(acc + "b");
};


Promise.resolve("")
  .then(randomPromise)
  .then(randomPromise)
  .catch(randomPromise)
  .then(randomPromise)
  .then(console.log)
  .catch(console.log);


// move the above code to async/await sintax
console.log('My exercise')

(async () => {

  let ret = ''
  try {
    try{
    ret = await randomPromise(ret)
    ret = await randomPromise(ret)
    }
    catch{
      ret = await randomPromise(ret)
    }
    ret = await randomPromise(ret)

    console.log(ret)
  }
  catch{
    console.log(ret)
  }

})();



