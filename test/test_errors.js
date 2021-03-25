/* global describe test expect */

// =========================================
//       IMPORTS
// --------------------------------------

const path = require('path')

const mybad = require('../src')

const stripAnsi = require('strip-ansi')


// =========================================
//       EXTENSIONS
// --------------------------------------

expect.extend(require('jest-tobetype'))


// =========================================
//       ENVIRONMENT
// --------------------------------------

process.env.COLORS = false
process.env.ERROR_COLORS = false

process.env.VERBOSE = false
process.env.ERROR_VERBOSE = false


// =========================================
//       CONSTANTS
// --------------------------------------

const ROOT_PATH = path.resolve(path.join(__dirname, '..'))


// =========================================
//       TESTS
// --------------------------------------

describe('mybad', () => {

    test('import', () => {
        expect(mybad).toBeInstanceOf(Object)
    })

    describe('Error', () => {

        test('constructor', async () => {
            let error = new mybad.Error()

            expect(error).toBeInstanceOf(mybad.Error)
        })

        test('#error', async () => {
            let error = new mybad.Error()

            expect('error' in error).toBe(true)

            let someRaisedError = new TypeError('No good')

            error = new mybad.Error(someRaisedError)

            expect(error.error).toBeInstanceOf(TypeError)
            expect(error.error.toString()).toEqual('TypeError: No good')

            error = new mybad.Error(error)

            expect(error.error).toBeInstanceOf(mybad.Error)
            expect(error.error.toString()).toEqual('No good')
        })

        test('#id', async () => {
            let error = new mybad.Error()

            expect('id' in error).toBe(true)

            expect(error.id).toBe(undefined)

            error = new mybad.Error({
                id: 123,
            })

            expect(error.id).toBeType('number')
            expect(error.id).toEqual(123)

            error = new mybad.Error({
                id: '123',
            })

            expect(error.id).toBeType('string')
            expect(error.id).toEqual('123')

            error = new mybad.Error(error)

            expect(error.id).toBeType('string')
            expect(error.id).toEqual('123')
        })

        test('#key', async () => {
            let error = new mybad.Error()

            expect('key' in error).toBe(true)

            expect(error.key).toBe(undefined)

            error = new mybad.Error({
                key: 123,
            })

            expect(error.key).toBeType('number')
            expect(error.key).toEqual(123)

            error = new mybad.Error({
                key: '123',
            })

            expect(error.key).toBeType('string')
            expect(error.key).toEqual('123')

            error = new mybad.Error(error)

            expect(error.key).toBeType('string')
            expect(error.key).toEqual('123')
        })

        test('#code', async () => {
            let error = new mybad.Error()

            expect('code' in error).toBe(true)

            expect(error.code).toBe(undefined)

            error = new mybad.Error({
                code: 123,
            })

            expect(error.code).toBeType('number')
            expect(error.code).toEqual(123)

            error = new mybad.Error({
                code: '123',
            })

            expect(error.code).toBeType('string')
            expect(error.code).toEqual('123')

            error = new mybad.Error(error)

            expect(error.code).toBeType('string')
            expect(error.code).toEqual('123')
        })

        test('#message', async () => {
            let error = new mybad.Error()

            expect('message' in error).toBe(true)

            expect(error.message).toBeType('string')
            expect(error.message).toEqual('Unknown')

            error = new mybad.Error({
                message: 123,
            })

            expect(error.message).toBeType('string')
            expect(error.message).toEqual('123')

            error = new mybad.Error({
                message: '123',
            })

            expect(error.message).toBeType('string')
            expect(error.message).toEqual('123')

            error = new mybad.Error(error)

            expect(error.message).toBeType('string')
            expect(error.message).toEqual('123')
        })

        test('#details', async () => {
            let error = new mybad.Error()

            expect('details' in error).toBe(true)

            expect(error.details).toBeType('object')
            expect(error.details).toEqual({})

            expect(() => {
                error = new mybad.Error({
                    details: 123,
                })
            }).toThrow(TypeError)

            error = new mybad.Error({
                details: {},
            })

            expect(error.details).toBeType('object')
            expect(error.details).toEqual({})

            error = new mybad.Error({
                details: {
                    foo: 'bar',
                    baz: [1, 2, 3],
                },
            })

            expect(error.details).toBeType('object')
            expect(error.details).toEqual({
                foo: 'bar',
                baz: [1, 2, 3],
            })

            error = new mybad.Error(error)

            expect(error.details).toBeType('object')
            expect(error.details).toEqual({
                foo: 'bar',
                baz: [1, 2, 3],
            })
        })

        test('#stack', async () => {
            let error = new mybad.Error()

            expect('stack' in error).toBe(true)

            expect(error.stack).toBeType('string')
            expect(error.stacktrace.length).toBeGreaterThan(0)

            error = new mybad.Error(error)

            expect(error.stack).toBeType('string')
            expect(error.stacktrace.length).toBeGreaterThan(0)
        })

        test('#stacktrace', async () => {
            let error = new mybad.Error()

            expect('stacktrace' in error).toBe(true)

            expect(error.stacktrace).toBeType('string')
            expect(error.stacktrace.length).toBeGreaterThan(0)

            error = new mybad.Error(error)

            expect(error.stacktrace).toBeType('string')
            expect(error.stacktrace.length).toBeGreaterThan(0)
        })

        test('#stackframes', async () => {
            let error = new mybad.Error()

            expect('stackframes' in error).toBe(true)

            expect(error.stackframes).toBeType('array')
            expect(error.stackframes.length).toBeGreaterThan(0)

            error = new mybad.Error(error)

            expect(error.stackframes).toBeType('array')
            expect(error.stackframes.length).toBeGreaterThan(0)
        })

        test('#stackobjects', async () => {
            let error = new mybad.Error()

            expect('stackobjects' in error).toBe(true)

            expect(error.stackobjects).toBeType('array')
            expect(error.stackobjects.length).toBeGreaterThan(0)
            expect(error.stackobjects[0]).toBeType('object')
            expect(error.stackobjects[0].column).toEqual(expect.any(Number))
            expect(error.stackobjects[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(error.stackobjects[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(error.stackobjects[0].line).toEqual(270)
            expect(error.stackobjects[0].source).toEqual(undefined)

            error = new mybad.Error(error)

            expect(error.stackobjects).toBeType('array')
            expect(error.stackobjects.length).toBeGreaterThan(0)
            expect(error.stackobjects[0]).toBeType('object')
            expect(error.stackobjects[0].column).toEqual(expect.any(Number))
            expect(error.stackobjects[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(error.stackobjects[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(error.stackobjects[0].line).toEqual(270)
            expect(error.stackobjects[0].source).toEqual(undefined)
        })

        test('#data', async () => {
            let error = new mybad.Error()

            expect('data' in error).toBe(true)

            expect(error.data).toBeType('object')

            expect('type' in error.data).toBe(true)
            expect('id' in error.data).toBe(true)
            expect('code' in error.data).toBe(true)
            expect('key' in error.data).toBe(true)
            expect('message' in error.data).toBe(true)
            expect('details' in error.data).toBe(true)
            expect('stack' in error.data).toBe(true)

            expect(error.data.type).toEqual('BaseError')
            expect(error.data.id).toEqual(undefined)
            expect(error.data.code).toEqual(undefined)
            expect(error.data.key).toEqual(undefined)
            expect(error.data.message).toEqual('Unknown')
            expect(error.data.details).toEqual({})

            expect(error.data.stack.length).toBeGreaterThan(0)
            expect(error.data.stack[0]).toBeType('object')
            expect(error.data.stack[0].column).toEqual(expect.any(Number))
            expect(error.data.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(error.data.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(error.data.stack[0].line).toEqual(296)
            expect(error.data.stack[0].source).toEqual(undefined)

            error = new mybad.Error(error)

            expect(error.data.type).toEqual('BaseError')
            expect(error.data.id).toEqual(undefined)
            expect(error.data.code).toEqual(undefined)
            expect(error.data.key).toEqual(undefined)
            expect(error.data.message).toEqual('Unknown')
            expect(error.data.details).toEqual({})

            expect(error.data.stack.length).toBeGreaterThan(0)
            expect(error.data.stack[0]).toBeType('object')
            expect(error.data.stack[0].column).toEqual(expect.any(Number))
            expect(error.data.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(error.data.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(error.data.stack[0].line).toEqual(296)
            expect(error.data.stack[0].source).toEqual(undefined)
        })

        test('#json()', async () => {
            let error = new mybad.Error()

            expect('json' in error).toBe(true)

            let json = error.json()

            expect(json).toBeType('string')

            let data = JSON.parse(json)

            expect(data.type).toBeType('string')
            expect(data.type).toEqual('BaseError')

            expect(data.message).toBeType('string')
            expect(data.message).toEqual('Unknown')

            expect(data.details).toBeType('object')
            expect(data.details).toEqual({})

            expect(data.stack).toBeType('array')
            expect(data.stack.length).toBeGreaterThan(0)
            expect(data.stack[0]).toBeType('object')
            expect(data.stack[0].column).toEqual(expect.any(Number))
            expect(data.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(data.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(data.stack[0].line).toEqual(344)
            expect(data.stack[0].source).toEqual(undefined)

            error = new mybad.Error(error)

            json = error.json()

            data = JSON.parse(json)

            expect(data.type).toBeType('string')
            expect(data.type).toEqual('BaseError')

            expect(data.message).toBeType('string')
            expect(data.message).toEqual('Unknown')

            expect(data.details).toBeType('object')
            expect(data.details).toEqual({})

            expect(data.stack).toBeType('array')
            expect(data.stack.length).toBeGreaterThan(0)
            expect(data.stack[0]).toBeType('object')
            expect(data.stack[0].column).toEqual(expect.any(Number))
            expect(data.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(data.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(data.stack[0].line).toEqual(344)
            expect(data.stack[0].source).toEqual(undefined)
        })

        test('#inspect()', async () => {
            let error = new mybad.Error()

            expect('inspect' in error).toBe(true)

            expect(() => {
                error.inspect()
            }).toNotThrow

            error = new mybad.Error(error)

            expect(() => {
                error.inspect()
            }).toNotThrow
        })

        test('#toString()', async () => {
            let error = new mybad.Error()

            expect('toString' in error).toBe(true)

            expect(stripAnsi(error.toString())).toBeType('string')
            expect(stripAnsi(error.toString())).toEqual('Unknown')

            error = new mybad.Error(new TypeError('Boo'))

            expect(stripAnsi(error.toString())).toBeType('string')
            expect(stripAnsi(error.toString())).toEqual('Boo')

            error = new mybad.Error(new TypeError('Boo'), {
                message: 'Boo-hoo',
            })

            expect(stripAnsi(error.toString())).toBeType('string')
            expect(stripAnsi(error.toString())).toEqual('Boo-hoo')

            error = new mybad.Error(error)

            expect(stripAnsi(error.toString())).toBeType('string')
            expect(stripAnsi(error.toString())).toEqual('Boo-hoo')

            error = new mybad.Error(error, {
                message: 'Boo-hoo',
            })

            expect(stripAnsi(error.toString())).toBeType('string')
            expect(stripAnsi(error.toString())).toEqual('Boo-hoo')
        })

        test('.cast()', async () => {
            expect('cast' in mybad.Error).toBe(true)

            let error = mybad.Error.cast(new mybad.Error('Foo'))

            expect(error).toBeInstanceOf(mybad.Error)

            error = mybad.Error.cast(new TypeError('Bar'))

            expect(error).toBeInstanceOf(mybad.Error)
        })

        test('.from()', async () => {
            expect('from' in mybad.Error).toBe(true)

            let error = mybad.Error.from(new mybad.Error('Foo'))

            expect(error).toBeInstanceOf(mybad.Error)

            error = mybad.Error.from(new TypeError('Bar'))

            expect(error).toBeInstanceOf(mybad.Error)
        })

        test('.object()', async () => {
            expect('object' in mybad.Error).toBe(true)

            let error = new mybad.Error('Foo')
            let errorObject = mybad.Error.object(error)

            expect(errorObject).toBeType('object')

            expect('type' in errorObject).toBe(true)
            expect('id' in errorObject).toBe(true)
            expect('code' in errorObject).toBe(true)
            expect('key' in errorObject).toBe(true)
            expect('message' in errorObject).toBe(true)
            expect('details' in errorObject).toBe(true)
            expect('stack' in errorObject).toBe(true)

            expect(errorObject.type).toEqual('BaseError')
            expect(errorObject.id).toEqual(undefined)
            expect(errorObject.code).toEqual(undefined)
            expect(errorObject.key).toEqual(undefined)
            expect(errorObject.message).toEqual('Foo')
            expect(errorObject.details).toEqual({})

            expect(errorObject.stack).toBeType('array')
            expect(errorObject.stack.length).toBeGreaterThan(0)
            expect(errorObject.stack[0]).toBeType('object')
            expect(errorObject.stack[0].column).toEqual(expect.any(Number))
            expect(errorObject.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(errorObject.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(errorObject.stack[0].line).toEqual(473)
            expect(errorObject.stack[0].source).toEqual(undefined)

            class CustomError extends mybad.Error {}

            error = new CustomError('Bar')
            errorObject = mybad.Error.object(error)

            expect(errorObject).toBeType('object')

            expect('type' in errorObject).toBe(true)
            expect('id' in errorObject).toBe(true)
            expect('code' in errorObject).toBe(true)
            expect('key' in errorObject).toBe(true)
            expect('message' in errorObject).toBe(true)
            expect('details' in errorObject).toBe(true)
            expect('stack' in errorObject).toBe(true)

            expect(errorObject.type).toEqual('CustomError')
            expect(errorObject.id).toEqual(undefined)
            expect(errorObject.code).toEqual(undefined)
            expect(errorObject.key).toEqual(undefined)
            expect(errorObject.message).toEqual('Bar')
            expect(errorObject.details).toEqual({})

            expect(errorObject.stack).toBeType('array')
            expect(errorObject.stack.length).toBeGreaterThan(0)
            expect(errorObject.stack[0]).toBeType('object')
            expect(errorObject.stack[0].column).toEqual(expect.any(Number))
            expect(errorObject.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(errorObject.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(errorObject.stack[0].line).toEqual(504)
            expect(errorObject.stack[0].source).toEqual(undefined)

            errorObject = mybad.Error.object(new TypeError('Baz'))

            expect(errorObject).toBeType('object')

            expect('type' in errorObject).toBe(true)
            expect('id' in errorObject).toBe(true)
            expect('code' in errorObject).toBe(true)
            expect('key' in errorObject).toBe(true)
            expect('message' in errorObject).toBe(true)
            expect('details' in errorObject).toBe(true)
            expect('stack' in errorObject).toBe(true)

            expect(errorObject.type).toEqual('TypeError')
            expect(errorObject.id).toEqual(undefined)
            expect(errorObject.code).toEqual(undefined)
            expect(errorObject.key).toEqual(undefined)
            expect(errorObject.message).toEqual('Baz')
            expect(errorObject.details).toEqual({})

            expect(errorObject.stack).toBeType('array')
            expect(errorObject.stack.length).toBeGreaterThan(0)
            expect(errorObject.stack[0]).toBeType('object')
            expect(errorObject.stack[0].column).toEqual(expect.any(Number))
            expect(errorObject.stack[0].file).toEqual(`${ROOT_PATH}/test/test_errors.js`)
            expect(errorObject.stack[0].function).toEqual(expect.stringMatching(/^Object\.(?:test|<anonymous>|mybad\.Error)$/))
            expect(errorObject.stack[0].line).toEqual(533)
            expect(errorObject.stack[0].source).toEqual(undefined)
        })

    })

})
