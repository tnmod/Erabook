const sortObjectsArray = require('sort-objects-array');
const productModel = require('./ProductModel');
const ProductModel = require('./ProductModel');
//
// GET
//

const getAllProduct = async () => {
  return await productModel.find();
}

const getProductById = async (id) => {
  try {
    let product = await productModel.findById(id);
    if (product) {
      return product;
    }
  } catch (error) {
    return null;
  }
  return null;
}
const getProductByName = async (name) => {
  try {
    let product = await productModel.find({ name: { $regex: name, $options: "i" } });
    if (product) {
      return product;
    }
    return null;
  } catch (error) {
    return null;
  }
}

//
//SORT
//


const sortPrice = async (type) => {
  try {
    switch (type) {
      case "lowtohigh":
        // return sortObjectsArray(DATA, "price",);
        return await productModel.find().sort({ price: 1 });
      case "hightolow":
        // return sortObjectsArray(DATA, "price", 'reverse');
        return await productModel.find().sort({ price: -1 });
    }
  }
  catch (error) {
    console.log(error);
  }
}

const sortName = async (type) => {
  try {
    switch (type) {
      case "a-z":
        return await productModel.find().sort({ name: 1 });
      case "z-a":
        return await productModel.find().sort({ name: -1 });
    }
  }
  catch (error) {
    console.log(error);
  }
}

const sortQuantity = async (type) => {
  try {
    switch (type) {
      case "hotsale":
        return await productModel.find().sort({ quantity: 1 });
      default:
        return await productModel.find().sort({ quantity: -1 });
    }
  }
  catch (error) {
    console.log(error);
  }
}






//
//POST
//


const addNewProducts = async (title, author, description, genre, coverImage, averageRating, reviews) => {
  try {
    const newProduct = { title, author, description, genre, coverImage, averageRating, reviews }
    await ProductModel.create(newProduct);
    return true;
  }
  catch (error) {
    console.log("addProductById error", error);
  }
}


//
//PUT
//

const updateProductById = async (id, title, author, description, genre, coverImage, averageRating, reviews) => {
  try {
    let item = await ProductModel.findById(id);
    if (item) {
      item.title = title ? title : item.title;
      item.author = author ? author : item.author;
      item.description = description ? description : item.description;
      if (item.coverImage == null) {
        item.coverImage = item.coverImage;
      } else {
        item.coverImage = coverImage ? coverImage : item.coverImage;
      }
      item.genre = genre ? genre : item.genre;
      item.averageRating = averageRating ? averageRating : item.averageRating;
      item.rate = rate ? rate : item.rate;
      item.reviews = reviews ? reviews : item.reviews;
      await item.save();
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }

}

const deleteProductById = async (id) => {
  try {
    await productModel.findByIdAndDelete(id);
  } catch (error) {
    console.log("deleteProductById error", error);
  }

}



module.exports = {
  getAllProduct,
  getProductById,
  getProductByName,

  sortPrice,
  sortName,
  sortQuantity,

  deleteProductById,
  addNewProducts,
  updateProductById,


}



const DATA = [{
  "_id": {
    "$oid": "6422ed92fc13ae18560001b8"
  },
  "name": "Skinix",
  "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7721e342-bd9b-45af-9836-72bf9d729b9e/air-jordan-1-elevate-low-se-womens-shoes-Q630Pk.png",
  "price": 114.97,
  "category": "Jordan",
  "sale": 78,
  "rate": 4,
  "description": "Osteomyelitis",
  "quantity": 238
}]