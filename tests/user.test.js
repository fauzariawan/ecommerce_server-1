const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')
const { queryInterface } = sequelize

// afterAll((done) => {
//   queryInterface.bulkDelete('Users')
//     .then(response => {
//       done()
//     })
//     .catch(error => {
//       done()
//     })
// })

// let admin = { email: "fauzariawan@gmail.com" }

// describe('test endPoint POST /register', () => {
//   it('test register succes', (done) => {
//     request(app)
//       .post('/register')
//       .send({ email: admin.email, password: 123456 })
//       .then(response => {
//         //kembalian response diambil menggunakan key body
//         //res.status(201).json({id:id, email:email})
//         let { body, status } = response

//         //ekspektasi statusnya 201
//         //ekspektasi bodynya
//         expect(status).toBe(201)
//         expect(body).toHaveProperty("id", expect.any(Number))
//         expect(body).toHaveProperty("email", admin.email)
//         done()
//       })
//   })

//   it('test register email already exist', (done) => {
//     request(app)
//       .post('/register')
//       .send({ email: 'fauzariawan@gmail.com', password: 123456 })
//       .then(response => {
//         const { body, status } = response
//         expect(status).toBe(500)
//         expect(body).toHaveProperty("message", "Email already Exist")
//         done()
//       })
//   })
// })

describe('test endPoint post /login', () => {
  it('test success login', (done) => {
    request(app)
      .post('/login')
      .send({ email: "admin@gmail.com", password: "12345" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("token", expect.any(String))
        done()
      })
  })

  it('test gagal login email yang di masukkan salah', (done) => {
    request(app)
      .post('/login')
      .send({ email: "aaadmin@gmail.com", password: "12345" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty("message", "wrong email/password")
        done()
      })
  })

  it('test gagal login password yang di masukkan salah', (done) => {
    request(app)
      .post('/login')
      .send({ email: "aaadmin@gmail.com", password: "123456" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(400)
        expect(body).toHaveProperty("message", "wrong email/password")
        done()
      })
  })
})

