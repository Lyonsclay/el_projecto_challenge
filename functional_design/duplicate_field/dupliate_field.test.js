var dF = require('./duplicate_field.js')

var fields = dF.fields

test('gets fields', () => {
  expect(fields.length).toBe(3)
})

test('duplicateID works', () => {
  expect(dF.duplicateID).toBeDefined()
  expect(dF.duplicateID()).toEqual(dF.popField())
  expect(dF.simple()).toBe({}) 
  expect(dF.duplicateID()).toBe(3)
})
