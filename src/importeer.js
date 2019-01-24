/**
 * A Solution for the dynamic Import Problem with require in CJS
 * Mimic Same Behavior of nativ dynamic Imports 
 * 
 * Also Helps to dynamic import many stuff as needed
 * 
 * 
 */
//['http', 'child_process.exec'] => function([http,exec])
// key = require: 'default,othername, othername,'
//{ 'http':'', child_process: { 'exec': ''] => function({ exec: Exec, http, custom = "I am self Explained" })
module.exports = function Importeer(load) {
  return Promise.all(load.map(url=>Promise.resolve(require(url))));
  //Promise.resolve(require('child_process')).then((defaultExport) => defaultExport.exec).then((exec) => []);
};

/*
async function ImporteerEs(load) {
    return Promise.all(load.map(url=>import(url).then(mod=>mod.default)));
}

async function test(dependencys) {
  const [ http, child_process] = await dependencys;
  const { exec } = child_process;
  console.log(exec);
}

async function start() {
  test(await Importeer(['http', 'child_process']));    
}

test(Importeer(['http', 'child_process']));
*/
