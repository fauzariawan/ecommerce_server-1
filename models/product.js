'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name Tidak Boleh Kosong"
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "image_url Tidak Boleh Kosong"
        }
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Price Tidak Boleh Kosong"
        },
        min: 1000
      }
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 0,
        notEmpty: {
          args: true,
          msg: "stock harus diisi min 0"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};