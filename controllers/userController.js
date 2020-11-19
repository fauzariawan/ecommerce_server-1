const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class userController {
  static async register(req, res, next) {
    console.log(req.body)
    try {
      const newUser = {
        email: req.body.email,
        password: req.body.password
      }
      const result = await User.create(newUser)
      res.status(201).json(result)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

  static async login(req, res, next) {
    try {
      const userLogedIn = {
        email: req.body.email,
        password: req.body.password
      }
      const result = await User.findOne({
        where: {
          email: userLogedIn.email
        }
      })
      if (!result) {
        throw ({ message: "wrong email/password", status: 400 })
      } else {
        const cekPassword = comparePassword(userLogedIn.password, result.password)
        if (cekPassword) {
          const user = {
            id: result.id,
            email: result.email,
            role: result.role
          }
          const token = signToken(user)
          console.log(token, '<<<<<<<<< ini token dari usercontroller')
          res.status(200).json({ token: token })
        } else {
          throw ({ message: "wrong email/password", status: 400 })
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController