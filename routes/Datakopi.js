const router = require('express').Router()
const datakopiController = require('../controller/datakopi')

router.post('/insert', (req, res)=> {
    datakopiController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
    datakopiController.showAllData()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res)=> {
    datakopiController.showDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/update/:id', (req, res)=> {
    datakopiController.update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    datakopiController.delete(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router