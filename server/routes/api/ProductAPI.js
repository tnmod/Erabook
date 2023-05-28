var express = require('express');
var router = express.Router();
const productController = require('../../components/products/ProductController');
const AUTH = require('../../middle/Authen');

/* GET home page. */

router.get('/', async function (req, res, next) {
  try {
    const product = await productController.getAllProducts();
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
});

router.get('/get/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productController.getProductById(id);
    res.status(200).json({ product });
  } catch (error) {

  }
});

router.get('/search', async (req, res) => {
  try {
    const name = req.query.name;
    const product = await productController.getProductByName(name);
    res.status(200).json({ product });
  } catch (error) {

  }
});

router.get('/sort/price', async (req, res) => {
  const type = req.query.type;
  try {
    const product = await productController.sortPrice(type);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
})

router.get('/sort/name', async (req, res) => {
  const type = req.query.type;
  try {
    const product = await productController.sortName(type);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
})

router.get('/sort/quantity', async (req, res) => {
  const type = req.query.type;
  try {
    const product = await productController.sortQuantity(type);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
})


router.post('/', async (req, res) => {
  try {
    const { title, author, description, genre, coverImage, averageRating, reviews } = req.body;
    await productController.addNewProduct(title, author, description, genre, coverImage, averageRating, reviews);
    res.status(200).json({ "status": "Create successfully!" });
  } catch (error) {
    console.log(error);
  }
});




module.exports = router;