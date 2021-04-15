
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

// eslint-disable-next-line
for (let dollar of range(42)) {
    amount += '$'

    try {
        printMoney(amount)

    } catch (error) {
        process.env.ERROR_VERBOSE = false
        process.env.ERROR_COLORS = false

        console.log()
        console.log('========================================================')
        console.log('     error.toString()')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString())
        console.log()

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
        console.log('     error.toString({colors: false})')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({colors: false}))
        console.log()

        console.log()
        console.log('========================================================')
        console.log('     error.toString({colors: true})')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({colors: true}))
        console.log()

        console.log()
        console.log('========================================================')
        console.log('     error.toString({verbose: true, colors: true})')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toString({verbose: true, colors: true}))
        console.log()

        console.log()
        console.log('========================================================')
        console.log('     error.toJSON()')
        console.log('-----------------------------------------------------')
        console.log()
        console.log(error.toJSON())
        console.log()

        break
    }
}
