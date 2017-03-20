var jsonFields = require('./fields.json')

exports.fields = jsonFields.fields

exports.duplicateID = () => jsonFields.fields.map(field => Object.assign({}, { "_id": field.id }, field))

exports.simple = () => jsonFields.fields.map(field => field)
exports.popField = function () { return jsonFields.fields.map(field => Object.assign({}, { "_id": field.id }, field)) }
