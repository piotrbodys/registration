const Eventmodel = require("../models/EventModel")

module.exports = {
  index:(req, res, next) => {
    Eventmodel.find({})
    .then( (result) => {
      

      res.json(result)
    })
    .catch((err) => {
      return res.status(500).json({
      message: "Error while creating Event",
      error: err 
    })
  })
 },

 create:(req, res, next) => {
    const event = new Eventmodel({
      name: req.body.name,
      event: req.body.event,
      city: req.body.city
    })

    event.save().then((event) => {
      // res.json({
      //   formData: req.body,
      //   error: false 
      // })
        return res.status(201).json(event)
    })
        .catch((err) => {
          return res.status(500).json({
          message: "Error while creating Event",
          error: err 
        })
      })

    
 },

 delete:(req, res, next) => {
  const id = req.params.id

  Eventmodel.findByIdAndRemove(id, (err, event) => {
    if (err) {
      return res.status(500).json({
        message: "Error while deleting Event",
        error: err
      })
    }

    return res.status("200").json({
      id: id,
      delete: true
    })
  })
 },
}

