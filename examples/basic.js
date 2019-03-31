
// =========================================
//       IMPORTS
// --------------------------------------

const mybad = require('..')


// =========================================
//       ERRORS
// --------------------------------------

class ToMuchError extends mybad.Error {}


// =========================================
//       FUNCTIONS
// --------------------------------------

function printMoney(stash) {
    try {
        if (typeof stash === 'string' && stash.length > 13) {
            throw new RangeError(`Too much money to print: ${stash}`)
        }

        console.log(`PRINT ${stash}`)

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

const range = (to) => {
    return [...Array(to).keys()]
}


// =========================================
//       MAIN
// --------------------------------------

let amount = ''

for (let dollar of range(42)) {
    amount += '$'

    try {
        printMoney(amount)

    } catch (error) {
        console.error(error.toString())

        throw error
    }
}
