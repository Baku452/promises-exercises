/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(result => {
      if(transformer(result)){
        resolve(transformer(result));
      }else{
        reject(transformer(result));
      }
    }
    ).catch(error => reject(error));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((value) => {
      if(typeof value === 'number' || !isNaN(value)){
        return Promise.resolve(Math.pow(Number(value), 2));
      }else{
        return Promise.reject(`Cannot convert '${value}' to a number!`);
      }
    }

    ).catch(error => Promise.reject(error));
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => Promise.resolve(0));
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(value => {
    return Promise.reject(value);
  }, error => {
    return Promise.resolve(error);
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};