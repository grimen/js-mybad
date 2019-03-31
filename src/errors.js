
/* =========================================
      IMPORTS
-------------------------------------- */

const ExtendableError = require('es6-error')
const color = require('chalk')

let inspect

try {
    inspect = require('util').inspect

} catch (error) {
    inspect = require('util-inspect')
}


/* =========================================
      CONSTANTS
-------------------------------------- */

const DEFAULT_ERROR_INDENT = 4
const DEFAULT_ERROR_DEPTH = null
const DEFAULT_ERROR_COLORS = true
const DEFAULT_ERROR_VERBOSE = true

const TRUTHY_PATTERN = /^true|1$/i


/* =========================================
      CLASSES
-------------------------------------- */

class BaseError extends ExtendableError {

    constructor (...args) {
        let error = args.find((arg) => {
            return [
                (arg instanceof Error),
                (typeof arg === 'string'),
                (typeof arg === 'number'),
            ].some(Boolean)
        })

        // error = error || args.find((arg) => {
        //     return (typeof arg === 'string')
        // })

        if (error) {
            if (!(error instanceof Error)) {
                error = new Error(`${error}`)
            }

            args = args.slice(1)
        }

        const options = args[0] || {}

        let {
            id,
            key,
            code,
            message,
            details,
        } = options || {}

        if (!error) {
            error = options.error
        }

        message = message || (error && `${error}`) || 'Unknown'
        message = message && `${message}`
        message = message.split('Error:').pop().trim()

        details = details || {}

        super(message)

        const klass = this.constructor.name

        if (typeof details !== 'object') {
            throw TypeError(`Expected argument ${klass}(details = <details>) to be a \`${typeof {}}\`, but was \`${typeof details}\`.`)
        }

        this._error = error
        this._id = id
        this._key = key
        this._code = code
        this._message = message
        this._details = details
        this._error = error
    }

    get error () {
        return this._error
    }

    set error (value) {
        this._error = value
    }

    get id () {
        return this._id
    }

    set id (value) {
        this._id = value
    }

    get key () {
        return this._key
    }

    set key (value) {
        this._key = value
    }

    get code () {
        return this._code
    }

    set code (value) {
        this._code = value
    }

    get message () {
        return this._message
    }

    set message (value) {
        this._message = value
    }

    get details () {
        return this._details || {}
    }

    set details (value) {
        this._details = value
    }

    get stacktrace () {
        return this.stack
    }

    get stackArray () {
        let _stackArray = this.stack

        if (_stackArray) {
            _stackArray = _stackArray
                .split(/\n/)
                .filter((value) => {
                    return value && !!value.trim().length
                })
                .map((value) => {
                    return value.trim()
                })

        } else {
            _stackArray = null
        }

        return _stackArray
    }

    get stacktraceArray () {
        return this.stackArray
    }

    inspect (options = {}) {
        options = options || {}

        let {
            colors,
            verbose,
        } = options

        let message
        let details

        const indent = DEFAULT_ERROR_INDENT

        if (!this.message) {
            message = '<none>'

        } else {
            message = this.message.split(' - Arguments')[0]
        }

        if (colors) {
            message = color.red(message)
        }

        if (verbose) {
            const depth = null

            details = inspect(this.details, {
                colors,
                indent,
                depth,
            })

            // console.log('xxx', details)

        } else {
            details = null
        }

        const hasDetails = (typeof this.details === 'object') && !!Object.keys(this.details).length

        message = [
            message,
            hasDetails && details,
        ].filter(Boolean).join(' - ')

        return message
    }

    toString () {
        let colors
        let verbose

        colors = process.env['ERROR_COLORS']
        colors = colors || process.env['COLORS']

        if (typeof colors === 'undefined') {
            colors = DEFAULT_ERROR_COLORS
        }

        colors = TRUTHY_PATTERN.test(`${colors}`)

        verbose = process.env['ERROR_VERBOSE']
        verbose = verbose || process.env['VERBOSE']

        if (typeof verbose === 'undefined') {
            verbose = DEFAULT_ERROR_VERBOSE
        }

        verbose = TRUTHY_PATTERN.test(`${verbose}`)

        const string = this.inspect({
            colors,
            verbose,
        })

        return string
    }

    static cast (error) {
        if (error instanceof BaseError) {
            return error

        } else {
            return new BaseError(error)
        }
    }

    static object (error, attrs) {
        const extendedError = BaseError.cast(error)

        return {
            'type': error.constructor.name,
            'id': extendedError.id,
            'code': extendedError.code,
            'key': extendedError.key,
            'message': extendedError.message,
            'details': extendedError.details,
            'stack': extendedError.stackArray,
            ...attrs,
        }
    }

}

/* =========================================
      EXPORTS
-------------------------------------- */

module.exports = {
    Error: BaseError,
}
