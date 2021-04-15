
# `js-mybad` [![NPM version](https://badge.fury.io/js/%40grimen%2Fmybad.svg)](https://badge.fury.io/js/%40grimen%2Fmybad) [![Build Status](https://travis-ci.com/grimen/js-mybad.svg?token=sspjPRWbecBSpceU8Jyn&branch=master)](https://travis-ci.com/grimen/js-mybad) [![Coverage Status](https://codecov.io/gh/grimen/js-mybad/branch/master/graph/badge.svg)](https://codecov.io/gh/grimen/js-mybad)

*My friendly error base class - for Node/JavaScript.*


## Introduction

One in general always needs a application/library specific error base class, but the native errors are very limited in what meta/debugging information they can hold at time they are raised. For better debugging and error reporting/inspection this error base class allows to attach some additonal error context information that can be used to better understand the issue - without having to create custom error formatters, or run debugger.


## Install

Install using **npm**:

```bash
$ npm install @grimen/mybad
```

Install using **yarn**:

```bash
$ yarn add @grimen/mybad
```


## Use

Very basic **[example](https://github.com/grimen/js-mybad/tree/master/examples/basic.js)**:

```javascript
const mybad = require('@grimen/mybad')

class ToMuchError extends mybad.Error {}

function printMoney(stash) {
    try {
        if (typeof stash === 'string' && stash.length > 13) {
            throw new RangeError(`Too much money to print: ${stash}`)
        }

        console.log(`PRINT ${stash.join('')}`)

    } catch (error) {
        throw new ToMuchError(error, {
            message: 'Out of money printing ink...',
            id: Date.now(), // well, should maybe be unique...
            key: 'too_much',
            code: 400,
            details: {
                stash,
            },
        })
    }
}

let amount = ''

const range = (to) => {
    return [...Array(to).keys()]
}

for (let dollar of range(42)) {
    amount += '$'

    try {
        printMoney(amount)

    } catch (error) {
        process.env.ERROR_VERBOSE = false
        process.env.ERROR_COLORS = false

        console.log()
        console.log('========================================================')
        console.log('     error.toString({verbose: false})')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({verbose: false}))
        console.log()

        console.log()
        console.log('========================================================')
        console.log('     error.toString({verbose: true})')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({verbose: true}))
        console.log()

        console.log()
        console.log('========================================================')
        console.log('     error.toJSON()')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({verbose: true}))
        console.log()

        throw error
    }
}

```

Run this with optional environment variables `COLORS` / `ERROR_COLORS` and/or `VERBOSE` / `ERROR_VERBOSE` set too truthy or falsy values, so see various error info formatting in terminal. Also `(NO_COLOR)[https://no-color.org]` is respected.

Something like this (imagine some colorized formatting):

```bash
PRINT $
PRINT $$
PRINT $$$
PRINT $$$$
PRINT $$$$$
PRINT $$$$$$
PRINT $$$$$$$
PRINT $$$$$$$$
PRINT $$$$$$$$$
PRINT $$$$$$$$$$
PRINT $$$$$$$$$$$
PRINT $$$$$$$$$$$$
PRINT $$$$$$$$$$$$$


========================================================
     error.toString({verbose: false})
-----------------------------------------------------

Out of money printing ink...


========================================================
     error.toString({verbose: true})
-----------------------------------------------------

Out of money printing ink... { stash: '$$$$$$$$$$$$$$' }


========================================================
     error.toJSON()
-----------------------------------------------------

{
  type: 'ToMuchError',
  id: 1618487081556,
  code: 400,
  key: 'too_much',
  message: 'Out of money printing ink...',
  details: { stash: '$$$$$$$$$$$$$$' },
  stack: [
    {
      file: '/Users/jonas/Dev/Private/js-mybad/examples/basic.js',
      function: 'printMoney',
      line: 23,
      column: 19,
      source: undefined
    },
    {
      file: '/Users/jonas/Dev/Private/js-mybad/examples/basic.js',
      function: 'Object.<anonymous>',
      line: 57,
      column: 9,
      source: undefined
    },
    {
      file: 'internal/modules/cjs/loader.js',
      function: 'Module._compile',
      line: 1063,
      column: 30,
      source: undefined
    },
    {
      file: 'internal/modules/cjs/loader.js',
      function: 'Object.Module._extensions..js',
      line: 1092,
      column: 10,
      source: undefined
    },
    {
      file: 'internal/modules/cjs/loader.js',
      function: 'Module.load',
      line: 928,
      column: 32,
      source: undefined
    },
    {
      file: 'internal/modules/cjs/loader.js',
      function: 'Function.Module._load',
      line: 769,
      column: 14,
      source: undefined
    },
    {
      file: 'internal/modules/run_main.js',
      function: 'Function.executeUserEntryPoint [as runMain]',
      line: 72,
      column: 12,
      source: undefined
    },
    {
      file: '17',
      function: 'internal/main/run_main_module.js',
      line: 47,
      column: undefined,
      source: undefined
    }
  ]
}
```


## Test

Clone down source code:

```sh
$ make install
```

Run **colorful tests** using **jest**:

```sh
$ make test
```


## Related

- [**`python-mybad`**](https://github.com/grimen/python-mybad) - *"My friendly error base class - for Python"*


## About

This project was mainly initiated - in lack of solid existing alternatives - to be used at our work at **[Markable.ai](https://markable.ai)** to have common code conventions between various programming environments where **Node.js** (for I/O heavy operations) is heavily used.


## License

Released under the MIT license.
