
# `js-mybad` [![NPM version](https://badge.fury.io/js/%40grimen%2Fmybad.svg)](https://badge.fury.io/js/%40grimen%2Fmybad) [![Build Status](https://travis-ci.com/grimen/js-mybad.svg?token=sspjPRWbecBSpceU8Jyn&branch=master)](https://travis-ci.com/grimen/js-mybad) [![Coverage Status](https://codecov.io/gh/grimen/js-mybad/branch/master/graph/badge.svg)](https://codecov.io/gh/grimen/js-mybad)

*My friendly error base class - for Node/JavaScript.*


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

===============================
     error.toString()
---------------------------

Out of money printing ink... - { stash: '$$$$$$$$$$$$$$' }


===============================
     error.stack
---------------------------

ToMuchError: Out of money printing ink...
    at printMoney (/Users/grimen/Dev/Private/js-mybad/examples/basic.js:29:15)
    at Object.<anonymous> (/Users/grimen/Dev/Private/js-mybad/examples/basic.js:56:9)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Function.Module.runMain (module.js:694:10)
    at startup (bootstrap_node.js:204:16)
    at bootstrap_node.js:625:3


===============================
     error.inspect()
---------------------------

Out of money printing ink...

===============================
     error.json()
---------------------------

{
    "type": "ToMuchError",
    "id": 1557522743469,
    "code": 400,
    "key": "too_much",
    "message": "Out of money printing ink...",
    "details": {
        "stash": "$$$$$$$$$$$$$$"
    },
    "stack": [
        {
            "file": "/Users/grimen/Dev/Private/js-mybad/examples/basic.js",
            "function": "printMoney",
            "line": 29,
            "column": 15
        },
        {
            "file": "/Users/grimen/Dev/Private/js-mybad/examples/basic.js",
            "function": "Object.<anonymous>",
            "line": 56,
            "column": 9
        },
        {
            "file": "module.js",
            "function": "Module._compile",
            "line": 653,
            "column": 30
        },
        {
            "file": "module.js",
            "function": "Object.Module._extensions..js",
            "line": 664,
            "column": 10
        },
        {
            "file": "module.js",
            "function": "Module.load",
            "line": 566,
            "column": 32
        },
        {
            "file": "module.js",
            "function": "tryModuleLoad",
            "line": 506,
            "column": 12
        },
        {
            "file": "module.js",
            "function": "Function.Module._load",
            "line": 498,
            "column": 3
        },
        {
            "file": "module.js",
            "function": "Function.Module.runMain",
            "line": 694,
            "column": 10
        },
        {
            "file": "bootstrap_node.js",
            "function": "startup",
            "line": 204,
            "column": 16
        },
        {
            "file": "625",
            "function": "bootstrap_node.js",
            "line": 3
        }
    ]
}

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


## Related

- [**`python-mybad`**](https://github.com/grimen/python-mybase) - *"My friendly error base class - for Python"*


## About

This project was mainly initiated - in lack of solid existing alternatives - to be used at our work at **[Markable.ai](https://markable.ai)** to have common code conventions between various programming environments where **Node.js** (for I/O heavy operations) is heavily used.


## License

Released under the MIT license.
