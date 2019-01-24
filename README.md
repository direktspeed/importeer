# Importeer
A CJS dynamic Import for NodeJS Only at present (if you are not a user of requrejs at last)

## Why? 
Because i wanted to code like i would use Import but using only require
- Dynamic CJS module loading inside NodeJS with Modules that get garbage collected after execution

## Usage
example async await
```js
const load = require('importeer')

async function test(dependencys) {
  const [ http, child_process] = await dependencys;
  const { exec } = child_process;
  console.log(exec);
  // After that log all is removed from ram!!!!!
}

test(Importeer(['http', 'child_process']));

```

example promise
```js
const load = require('importeer)

function test(dependencys) {
  const [ http, child_process] = dependencys;
  const { exec } = child_process;
  console.log(exec);
  // After that log all is removed from ram!!!!!
}

Importeer(['http', 'child_process']).then(test})
```