const acepta = acc => {
    console.log('acept '+ acc)
    return Promise.resolve( acc+1)
  }
  
  const rechaza = acc => {
    console.log('reject '+ acc)
    return Promise.reject( acc)
  }
  
  Promise.resolve(0)
  .then(rechaza)
  .then(rechaza)
  .catch((acc) => { console.log('REJECT  '+ acc); return rechaza(acc)})
  .then(acepta)
  .then(console.log)
  .catch((acc) => { console.log('REJECT '+ acc)})

/**  OUTPUT
 reject 0
REJECT  0
reject 0
REJECT 0
*/