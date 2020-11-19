
function errorHandler(err, req, res, next) {
  if (err.status == 400) {
    res.status(400).json({ message: "wrong email/password" })
  } else if (err.status == 401) {
    res.status(401).json({ message: "Anda Belum login" })
  } else if (err.name == "SequelizeValidationError") {
    let result = []
    for (let i = 0; i < err.errors.length; i++) {
      result.push(err.errors[i].message)
    }
    res.status(500).json(result)
  } else if (err.status == 402) {
    res.status(402).json({ message: "Data Tidak Ada" })
  }
  //console.log(err, "<<<<<<<<<<<< dari errorhandler")
  // if (err.name === 'SequelizeUniqueConstraintError') {
  //   let result = []
  //   for (let i = 0; i < err.errors.length; i++) {
  //     result.push(err.errors[i].message)
  //   }
  //   res.status(500).json(result)
  // } else if (err.name === "SequelizeValidationError") {
  //   let result = []
  //   for (let i = 0; i < err.errors.length; i++) {
  //     result.push(err.errors[i].message)
  //   }
  //   res.status(500).json(result)
  // } else if (err.status == 401) {
  //   res.status(401).json(err.message)
  // } else if (err.status == 400) {
  //   res.status(400).json({ message: err.message })
  //   console.log(err, "<<<<<<<<<<<<<<dari error handler")
  // }

}

module.exports = errorHandler