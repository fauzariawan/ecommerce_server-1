const request = require('supertest')
const app = require('../app')
//const { sequelize } = require('../models')
//const { queryInterface } = sequelize

describe('test endPoint get /product', () => {
  it('test success get All Product ', (done) => {
    request(app)
      .get('/product')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("message", "berhasil get all data")
        done()
      })
  })

  it('test success get All Product ', (done) => {
    request(app)
      .get('/product')
      .set({ token: "" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(401)
        expect(body).toHaveProperty("message", "Anda Belum login")
        done()
      })
  })
})

describe('test endPoint post /product', () => {
  it('test success post Product ', (done) => {
    request(app)
      .post('/product')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .send({
        name: "Aloe Plopolis",
        image_url: "https://www.hdistore.com/img/product/1235.jpg",
        price: 155000,
        stock: 6,
      })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(201)
        expect(body).toHaveProperty("name", "Aloe Plopolis")
        expect(body).toHaveProperty("image_url", "https://www.hdistore.com/img/product/1235.jpg")
        expect(body).toHaveProperty("price", 155000)
        expect(body).toHaveProperty("stock", 6)
        done()
      })
  })

  it('test gagal post Product karena salah satu field tidak diisi ', (done) => {
    request(app)
      .post('/product')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .send({
        name: "",
        image_url: "https://www.hdistore.com/img/product/1235.jpg",
        price: 155000,
        stock: 6,
      })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(500)
        expect.arrayContaining(['Name Tidak Boleh Kosong'])
        done()
      })
  })
})

describe('test endPoint update /product', () => {
  it('test success update Product ', (done) => {
    request(app)
      .put('/product/5')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .send({
        name: "Aloe Plopolis 1kg",
        image_url: "https://www.hdistore.com/img/product/1235.jpg",
        price: 200000,
        stock: 2,
      })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("name", "Aloe Plopolis 1kg")
        expect(body).toHaveProperty("image_url", "https://www.hdistore.com/img/product/1235.jpg")
        expect(body).toHaveProperty("price", 200000)
        expect(body).toHaveProperty("stock", 2)
        done()
      })
  })

  it('test gagal update Product karena salah satu field tidak diisi ', (done) => {
    request(app)
      .put('/product/5')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .send({
        name: "",
        image_url: "https://www.hdistore.com/img/product/1235.jpg",
        price: 155000,
        stock: 6,
      })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(500)
        expect.arrayContaining(['Name Tidak Boleh Kosong'])
        done()
      })
  })
})

describe('test endPoint delete /product', () => {
  it('test success delete Product ', (done) => {
    request(app)
      .delete('/product/6')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(200)
        expect(body).toHaveProperty("message", "Delete Successfully")
        done()
      })
  })
  it('test gagal delete Product karna data tidak ada ', (done) => {
    request(app)
      .delete('/product/6')
      .set({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MDUwMTI4OTR9.PSJ-cltGvwlMfHZB1d9bVAAA5w35Lu6JXFZp8YmmgEU" })
      .then(response => {
        let { body, status } = response
        expect(status).toBe(402)
        expect(body).toHaveProperty("message", "Data Tidak Ada")
        done()
      })
  })


})