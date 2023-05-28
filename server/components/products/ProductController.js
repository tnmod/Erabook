const productService = require('./ProductService');


const getAllProducts = async () => {
    return await productService.getAllProduct();
}

const getProductById = async (id) => {
    try {
        return await productService.getProductById(id);
    } catch (error) {
        console.log(error);
    }
}

const getProductByName = async (name) => {
    try {
        return await productService.getProductByName(name);
    } catch (error) {
        console.log(error);
    }
}

const sortPrice = async (type) => {
    try {
        return await productService.sortPrice(type);
    } catch (error) {
        console.log(error);
    }
}

const sortName = async (type) => {
    try {
        return await productService.sortName(type);
    } catch (error) {
        console.log(error);
    }
}
const sortQuantity = async (type) => {
    try {
        return await productService.sortQuantity(type);
    } catch (error) {
        console.log(error);
    }
}



const addNewProduct = async (title, author, description, genre, coverImage, averageRating, reviews) => {
    try {
        return await productService.addNewProducts(title, author, description, genre, coverImage, averageRating, reviews);
    } catch (error) {
        console.log(error);
    }
}

const updateProductById = async (id, title, author, description, genre, coverImage, averageRating, reviews) => {
    try {
        return await productService.updateProductById(id, title, author, description, genre, coverImage, averageRating, reviews);
    } catch (error) {
        console.log(error);

    }

}

const deleteId = async (id) => {
    return await productService.deleteProductById(id);
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,

    sortPrice,
    sortName,
    sortQuantity,

    addNewProduct,
    updateProductById,
    deleteId,
};