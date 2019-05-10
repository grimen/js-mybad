
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

    get stack () {
        return super.stack || ''
    }

    get stacktrace () {
        return this.stack
    }

    get stackframes () {
        let _stackframes

        if (this.stack) {
            _stackframes = this.stack
                .split(/\n/)
                .slice(1)
                .filter((value) => {
                    return value && !!value.trim().length
                })
                .map((value) => {
                    try {
                        const stackframeLine = value.trim()

                        let stackframeData

                        if (stackframeLine.includes('(')) {
                            stackframeData = stackframeLine.match(/^at ([^\()]+)\((.+)(?:\:(\d+)\:(\d+)\))/i)

                        } else {
                            stackframeData = stackframeLine.match(/^at (.+)(?:\:(\d+)\:(\d+))/i)
                        }

                        let [
                            _,
                            functionName,
                            fileName,
                            lineNumber,
                            columnNumber,
                        ] = stackframeData || []

                        functionName = functionName && functionName.trim()
                        lineNumber = lineNumber && parseInt(lineNumber)
                        columnNumber = columnNumber && parseInt(columnNumber)

                        return {
                            functionName,
                            fileName,
                            lineNumber,
                            columnNumber,
                        }

                    } catch (error) {
                        return error
                    }
                })

        } else {
            _stackframes = null
        }

        return _stackframes
    }

    get stackobjects () {
        const _stackobjects = (this.stackframes || [])
            .map((stackframe) => {
                const file = stackframe.fileName
                const function_ = stackframe.functionName
                const line = stackframe.lineNumber
                const column = stackframe.columnNumber
                const source = stackframe.source

                const stackobject = {
                    file,
                    function: function_,
                    line,
                    column,
                    source,
                }

                return stackobject
            })
            .filter((stackobject) => {
                return !!stackobject.file
            })
            .filter((stackobject) => {
                const isInternalStackFile = stackobject.file.includes(__filename)
                const isInternalStackFunction = Object.getOwnPropertyNames(this).includes(stackobject.function)
                const isInternalStackObject = isInternalStackFile && isInternalStackFunction

                return !isInternalStackObject
            })

        return _stackobjects
    }

    get data () {
        return {
            'type': this.constructor.name,
            'id': this.id,
            'code': this.code,
            'key': this.key,
            'message': this.message,
            'details': this.details,
            'stack': this.stackobjects,
        }
    }

    json (options = {}) {
        let {
            indent,
        } = options || {}

        if (!indent && indent !== false) {
            indent = DEFAULT_ERROR_INDENT
        }

        return JSON.stringify(this.data, null, indent)
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
            const castedError = new BaseError(error)

            castedError.stack = error.stack

            return castedError
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
            'stack': extendedError.stackobjects,
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
