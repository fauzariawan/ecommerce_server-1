const { Product } = require('../models')

class productController {
  static async getAllProduct(req, res, next) {
    try {
      const result = await Product.findAll()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  static async createProduct(req, res, next) {
    try {
      const newProduct = {
        name: req.body.name,
        image_url: req.body.image_url,
        price: req.body.price,
        stock: req.body.stock
      }
      const result = await Product.create(newProduct)
      res.status(201).json({
        name: newProduct.name,
        image_url: newProduct.image_url,
        price: newProduct.price,
        stock: newProduct.stock
      })
    } catch (error) {
      next(error)
    }
  }
  static async updateProduct(req, res, next) {
    try {
      const updatedId = req.params.id
      const updatedData = {
        name: req.body.name,
        image_url: req.body.image_url,
        price: req.body.price,
        stock: req.body.stock
      }
      const result = await Product.update(updatedData, {
        where: {
          id: updatedId
        }
      })
      res.status(200).json({
        name: updatedData.name,
        image_url: updatedData.image_url,
        price: updatedData.price,
        stock: updatedData.stock
      })
    } catch (error) {
      next(error)
    }
  }
  static async deleteProduct(req, res, next) {
    try {
      const deletedId = req.params.id
      const cekId = await Product.findByPk(deletedId)
      if (cekId) {
        const result = await Product.destroy({
          where: {
            id: deletedId
          }
        })
        res.status(200).json({ message: "Delete Successfully" })
      } else {
        throw ({ message: "Data Tidak Ada", status: 402 })
      }
    } catch (error) {
      next(error)
    }
  }
  static async findById(req, res, next) {
    try {
      const id = req.params.id
      console.log(id)
      const result = await Product.findByPk(id)
      res.status(200).json(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

module.exports = productController