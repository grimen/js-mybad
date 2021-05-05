
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
const DEFAULT_ERROR_COLORS = true
const DEFAULT_ERROR_VERBOSE = true

const TRUTHY_PATTERN = /^yes|true|1$/i
const FALSY_PATTERN = /^no|false|0$/i


/* =========================================
      CLASSES
-------------------------------------- */

class BaseError extends ExtendableError {

    #error = undefined
    #id = undefined
    #key = undefined
    #code = undefined
    #message = undefined
    #details = undefined

    constructor (...args) {
        let error = args.find((arg) => {
            return [
                (arg instanceof Error),
                (typeof arg === 'string'),
                (typeof arg === 'number'),
            ].some(Boolean)
        })

        if (error) {
            if (!(error instanceof Error)) {
                error = new Error(`${error}`)

                error.stack = error.stack.split('\n')
                    .filter(stackLine => !/new [A-Za-z_]+Error/gmi.test(stackLine))
                    .filter(stackLine => !stackLine.includes('js-mybad/src'))
                    .join('\n')
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

        if (error) {
            id = id || error.id
            key = key || error.key
            code = code || error.code
            message = message || error.message

            details = details || error.details

            // TODO: pass any non-reserved option - https://github.com/ramadis/unmiss/blob/master/src/MethodMissingClass.js

        } else {
            error = options.error
        }

        message = message || (error && `${error}`) || 'Unknown'
        message = message && `${message}`
        message = message.split('Error:').pop().trim()

        details = details || {}

        super(message)

        const klass = this.constructor.name

        if (typeof details !== 'object') {
            throw TypeError(`Expected argument \`${klass}({ details: <details> })\`\` to be a \`${typeof {}}\`, but was \`${typeof details}\`.`)
        }

        if (error) {
            this.stack = error.stack || this.stack
        }

        this.#error = error
        this.#id = id
        this.#key = key
        this.#code = code
        this.#message = message
        this.#details = details
    }

    get error () {
        return this.#error
    }

    set error (value) {
        this.#error = value
    }

    get id () {
        return this.#id
    }

    set id (value) {
        this.#id = value
    }

    get key () {
        return this.#key
    }

    set key (value) {
        this.#key = value
    }

    get code () {
        return this.#code
    }

    set code (value) {
        this.#code = value
    }

    get message () {
        return this.#message
    }

    set message (value) {
        this.#message = value
    }

    get details () {
        return this.#details || {}
    }

    set details (value) {
        this.#details = value
    }

    get cause () {
        return super.cause || this.error
    }

    set cause (error) {
        this.error = error
    }

    get stack () {
        return super.stack || ''
    }

    get stacktrace () {
        return this.stack
    }

    get stackframes () {
        return this.constructor.getStackFrames(this)
    }

    get stackobjects () {
        return this.constructor.getStackObjects(this)
    }

    get data () {
        return this.constructor.toJSON(this)
    }

    // DEPRECATE: stringify? `util-deprecate`
    json (...args) {
        return this.constructor.stringify(this, ...args)
    }

    inspect (...args) {
        return this.constructor.inspect(this, ...args)
    }

    valueOf (...args) {
        return this.constructor.valueOf(this, ...args)
    }

    toJSON (...args) {
        return this.constructor.toJSON(this, ...args)
    }

    toString (...args) {
        return this.constructor.toString(this, ...args)
    }

    static from (...args) {
        return this.cast(...args)
    }

    // legacy
    static object (...args) {
        return this.toJSON(...args)
    }

    static data (...args) {
        return this.toJSON(...args)
    }

    static stackframes (...args) {
        return this.getStackFrames(...args)
    }

    static stackobjects (...args) {
        return this.getStackObjects(...args)
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

    static inspect (error, options = {}) {
        if (typeof error === 'object') {
            let {
                colors,
                verbose,
            } = this.getOptions(options)

            let message
            let details

            const indent = DEFAULT_ERROR_INDENT

            if (!error.message) {
                message = '<none>'

            } else {
                message = error.message.split(' - Arguments')[0]
            }

            if (colors) {
                message = color.red(message)
            }

            if (verbose) {
                const depth = null

                details = inspect(error.details, {
                    colors,
                    indent,
                    depth,
                })

                if (colors) {
                    details = color.gray(details)
                }

            } else {
                details = null
            }

            const hasDetails = (typeof error.details === 'object') && !!Object.keys(error.details).length

            message = [
                message,
                hasDetails && details,
            ].filter(Boolean).join(' ')

            return message
        }
    }

    static stringify (error, options = {}) {
        if (typeof error === 'object') {
            let {
                indent,
            } = options || {}

            if (!indent && indent !== false) {
                indent = DEFAULT_ERROR_INDENT
            }

            return JSON.stringify(error.data, null, indent)
        } else if (error) {
            if (typeof error.toString === 'function') {
                return error.toString()
            }
        }

        return ''
    }

    static valueOf (error) {
        if (typeof error === 'object') {
            return (typeof error.code === 'number') ? error.code : 0
        } else if (error) {
            if (typeof error.valueOf === 'function') {
                return error.valueOf()
            }
        }

        return undefined
    }

    static toJSON (error, attrs = {}) {
        if (error) {
            const extendedError = BaseError.cast(error)

            return {
                type: error.constructor.name,
                id: extendedError.id,
                code: extendedError.code,
                key: extendedError.key,
                message: extendedError.message,
                details: extendedError.details,
                stack: extendedError.stackobjects,
                ...attrs,
            }
        } else {
            return {}
        }
    }

    static toString (error, options = {}) {
        if (error) {
            error = BaseError.cast(error)

            const string = this.inspect(error, options)

            return string
        }
    }

    static getOptions (options = {}) {
        options = {
            ...options,
        }

        let { colors, verbose } = options

        colors = (typeof colors === 'boolean') ? colors : process.env['NO_COLOR'] && FALSY_PATTERN.test(process.env['NO_COLOR']) // no-color.org
        colors = (typeof colors === 'boolean') ? colors : process.env['ERROR_COLORS']
        colors = (typeof colors === 'boolean') ? colors : process.env['COLORS']


        if (typeof colors === 'undefined') {
            colors = DEFAULT_ERROR_COLORS
        }

        colors = TRUTHY_PATTERN.test(`${colors}`)

        verbose = (typeof verbose === 'boolean') ? verbose : process.env['ERROR_VERBOSE']
        verbose = (typeof verbose === 'boolean') ? verbose : process.env['VERBOSE']

        if (typeof verbose === 'undefined') {
            verbose = DEFAULT_ERROR_VERBOSE
        }

        verbose = TRUTHY_PATTERN.test(`${verbose}`)

        return {
            verbose,
            colors,
            ...options,
        }
    }

    static getStackFrames (error) {
        let _stackframes

        if ((error instanceof Error) && typeof error.stack === 'string') {
            _stackframes = error.stack
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
                            stackframeData = stackframeLine.match(/^at ([^()]+)\((.+)(?::(\d+):(\d+)\))/i)
                        } else {
                            stackframeData = stackframeLine.match(/^at (.+)(?::(\d+):(\d+))/i)
                        }

                        if (stackframeData && stackframeData.length === 4) {
                            stackframeData = [
                                ...stackframeData.slice(0, 2),
                                null,
                                ...stackframeData.slice(2, 4),
                            ]
                        }

                        let [
                            // eslint-disable-next-line
                            _,
                            functionName,
                            fileName,
                            lineNumber,
                            columnNumber,
                        ] = stackframeData || []

                        if (functionName.includes('/')) {
                            fileName = functionName
                            functionName = null
                        }

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
            _stackframes = []
        }

        return _stackframes
    }

    static getStackObjects (error) {
        let _stackobjects

        if (error instanceof Error) {
            error = BaseError.cast(error)

            const _stackobjects = (error.stackframes || [])
                .map((stackframe) => {
                    const file = stackframe.fileName
                    const function_ = stackframe.functionName
                    const line = stackframe.lineNumber
                    const column = stackframe.columnNumber
                    const source = stackframe.source
                    const uri = file && `file://${file}:${line}:${column}`

                    const stackobject = {
                        file,
                        function: function_,
                        line,
                        column,
                        source,
                        uri,
                    }

                    return stackobject
                })
                // .filter((stackobject) => {
                //     return !!stackobject.file
                // })
                .filter((stackobject) => {
                    const isInternalStackFile = stackobject.file && stackobject.file.includes(__filename)
                    const isInternalStackFunction = Object.getOwnPropertyNames(error).includes(stackobject.function)
                    const isInternalStackObject = isInternalStackFile && isInternalStackFunction

                    return !isInternalStackObject
                })

            return _stackobjects
        } else {
            _stackobjects = []
        }

        return _stackobjects
    }
}

/* =========================================
      EXPORTS
-------------------------------------- */

module.exports = {
    Error: BaseError,
}
