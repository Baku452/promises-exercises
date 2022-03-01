/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  Promise.resolve(3).then(function(value) {
    return value;
  });
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
 
  Promise.reject('Boo').then(function(value){
    return value;
  }, function(value){
    return value;
  });
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    if(!itShouldResolve){
      reject(new Error('Error'));
    }else{
      resolve('Success');
    }
   
  });
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
  /* Return a promise that resolves with the value after delayInMs */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    },delayInMs );

  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
