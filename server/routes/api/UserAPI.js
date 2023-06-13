var express = require('express');
var router = express.Router();
const userController = require('../../components/users/UserController');
const AUTH = require('../../middle/Authen');

router.post('/register', async(req, res, next) => {
    try {
        const {email, password, username} = req.body;
        const user = await userController.register(email, password, username);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.post('/login', async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await userController.login(email, password);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.get('/getall', async(req, res, next) => {
    try {
        const user = await userController.getAll();
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

module.exports = router;