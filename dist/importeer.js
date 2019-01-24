/**
 * A Solution for the dynamic Import Problem with require in CJS
 * Mimic Same Behavior of nativ dynamic Imports 
 * 
 * Also Helps to dynamic import many stuff as needed
 * 
 * 
 */
//['http', 'child_process.exec'] => function([http,exec])
module.exports = function Importeer(load) {
  return Promise.all(load.map(url=>Promise.resolve(require(url))));
};