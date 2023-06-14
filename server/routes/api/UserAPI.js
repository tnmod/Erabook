var express = require('express');
var router = express.Router();
const userController = require('../../components/users/UserController');
const AUTH = require('../../middle/Authen');

router.post('/register/:email/:password/:username', async (req, res, next) => {
    try {
        const { email, password, username } = req.params;
        const user = await userController.register(email, password, username);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userController.login(email, password);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.get('/getall', async (req, res, next) => {
    try {
        const user = await userController.getAll();
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.post('/find', async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userController.findEmail(email);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

router.post('/email', async (req, res, next) => {
    try {
        const { email, password, username, link } = req.body;
        let subject = "Xác nhận đăng ký"
        let content = `<h1>Mail xác nhận</h1>
        <p>Bạn đang đăng ký tài khoản Erabook</p>
        <p>Bấm vào nút bên dưới để xác nhận</p>
        
        <form action="${link}/api/user/register/${email}/${password}/${username}" method="post">
            <button type="submit">Đăng ký</button>
        </form>
        `;
        const result = await userController.sendEmail(email, subject, content);
        return res.status(200).json({ result });
    } catch (error) {
        console.log('send mail error: ', error);
        return res.status(500).json({ result: false });
    }
})

module.exports = router;