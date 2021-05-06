const mongoose = require('mongoose')
const Schema = mongoose.Schema

const datakopiSchema = new Schema({
  namakopi: {
    type: String
  },
  harga: {
    type: String
  },
  profilroasting: {
    type: String
  },
  bodydanaroma: {
    type: String
  },
  accidity: {
    type: String
  },
  flavour: {
    type: String
  }

})
module.exports = mongoose.model('penjualankopi', datakopiSchema)