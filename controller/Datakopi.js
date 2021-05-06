const datakopiModel = require('../model/Datakopi')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    datakopiModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Kopi'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Kopi'
      }))
  })
//menampilkan data seluruh mahasiswa (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        datakopiModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Kopi',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Kopi',
            data: []
        }))
    })
// menampilkan data mahasiswa dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        datakopiModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Kopi',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Kopi',
      data: null
  }))
})
// update data mahasiswa dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    datakopiModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Kopi'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Kopi'
    }))
})
//menghapus data mahasiswa dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    datakopiModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Kopi'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Kopi'
  }))
})
