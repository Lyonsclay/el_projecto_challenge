var fs = require('fs')

const duplicateID = (fields) => fields.map(field => Object.assign({}, { '_id': field.id }, field))



const writeFields = (file, fields) => fs.writeFileSync(
  file,
  JSON.stringify({ 'fields': duplicateID(fields) })
)


module.exports = {
  duplicateID,
  writeFields,
}

