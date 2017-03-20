var fs = require('fs')
var df = require('./duplicate_field.js')
var fields = require('./fields.json').fields
var duplicated = require('./duplicated.json').fields

beforeAll(() => {
  fs.writeFile('test.json', '', (e) => console.log('clear test.json:: ', e))
})

test('test.json is empty', () => {
  const test = fs.readFileSync('./test.json').toString()

  expect(test).toBe('')
})

test('gets fields from fields.json', () => {
  expect(fields.length).toBe(3)
})

test('duplicateID adds a duplicate id field', () => {
  expect(df.duplicateID(fields)).toEqual(duplicated)
})

test('writeFields writes new json with duplicated field', () => {
  df.writeFields('test.json', fields)
  var dupFields = require('./test.json')

  expect(dupFields.fields).toEqual(duplicated)
  expect(dupFields.fields.reduce(field => (field._id === field.id))).toBeTruthy()
})
