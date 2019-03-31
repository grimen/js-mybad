
# `js-mybad` [![NPM version](https://badge.fury.io/js/%40grimen%2Fmybad.svg)](https://badge.fury.io/js/%40grimen%2Fmybad) [![Build Status](https://travis-ci.com/grimen/js-mybad.svg?token=sspjPRWbecBSpceU8Jyn&branch=master)](https://travis-ci.com/grimen/js-mybad) [![Coverage Status](https://codecov.io/gh/grimen/js-mybad/branch/master/graph/badge.svg)](https://codecov.io/gh/grimen/js-mybad)

*A runtime step profiler - for Node/JavaScript.*


## Introduction

One in general always needs a application/library specific error base class, but the native errors are very limited in what meta/debugging information they can hold at time they are raised. For better debugging and error reporting/inspection this error base class allows to attach some additonal error context information that can be used to better understand the issue - without having to create custom error formatters, or run debugger.


# Install

Install using **npm**:

```bash
$ npm install @grimen/mybad
```

Install using **yarn**:

```bash
$ yarn add @grimen/mybad
```


# Use

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
        console.error(error.toString())

        throw error
    }
}

```

Run this with optional environment variables `COLORS` / `ERROR_COLORS` and/or `VERBOSE` / `ERROR_VERBOSE` set too truthy or falsy values, so see various error info formatting in terminal.

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
Out of money printing ink... - { stash: '$$$$$$$$$$$$$$' }

examples/basic.js:61
        throw error
        ^
ToMuchError: Out of money printing ink...
    at printMoney (examples/basic.js:29:15)
    at Object.<anonymous> (examples/basic.js:56:9)
    at Module._compile (internal/modules/cjs/loader.js:688:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)
```


# Test

Clone down source code:

```sh
$ make install
```

Run **colorful tests** using **jest**:

```sh
$ make test
```


## About

This project was mainly initiated - in lack of solid existing alternatives - to be used at our work at **[Markable.ai](https://markable.ai)** to have common code conventions between various programming environments where **Node.js** (for I/O heavy operations) is heavily used.


## License

Released under the MIT license.
