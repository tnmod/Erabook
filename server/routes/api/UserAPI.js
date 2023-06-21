var express = require('express');
var router = express.Router();
const userController = require('../../components/users/UserController');
const AUTH = require('../../middle/Authen');

router.post('/register', async (req, res, next) => {
    try {
        const { email, password, username } = req.body;
        const user = await userController.register(email, password, username);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "user": false });
    }
})

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userController.login(email, password);
        res.status(200).json({ result: true, "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

// router.get('/getall', async (req, res, next) => {
//     try {
//         const user = await userController.getAll();
//         res.status(200).json({ "user": user });
//     } catch (error) {
//         res.status(400).json({ "error": error });
//     }
// })

router.post('/find', async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userController.findEmail(email);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

function generateRandomNumbers() {
    const numbers = [];

    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        numbers.push(randomNumber);
    }
    return numbers;
}

let randomCode = "";

router.post('/email', async (req, res, next) => {
    try {
        const random = generateRandomNumbers();
        const { email } = req.body;
        randomCode = random.join(",") + ":" + email;
        // let numberFormat = "";
        // for (let index = 0; index < random.length; index++) {
        //     numberFormat = numberFormat.concat(" : ", random[index].toString());
        // }
        let subject = "OTP Code"
        let content = `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; border-radius: 10px; padding: 20px;">
            <h1 style="font-size: 24px; color: #333;">Mail xác nhận</h1>
            <p style="font-size: 16px; color: #666;">Bạn đang đăng ký tài khoản Erabook</p>
            <p style="font-size: 16px; color: #666;">Đừng chia sẻ mã này cho bất kì ai</p>
            <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;">
              <div style="display: flex; justify-content: center; align-items: center; border: 1px solid #ccc; border-radius: 10px; padding: 10px; background-color: #f9f9f9;">
                ${random.map(number => `
                  <div style="font-size: 32px; color: #333; margin: 0 5px;">${number}</div>
                `).join('')}
              </div>
            </div>
            <p style="font-size: 16px; color: #666;">Hãy sử dụng mã trên để hoàn thành quá trình đăng ký.</p>
          </div>
        </div>
      `;
        const result = await userController.sendEmail(email, subject, content);
        return res.status(200).json(true);
    } catch (error) {
        console.log('send mail error: ', error);
        return res.status(500).json(false);
    }
});

router.post('/veriCode', async (req, res, next) => {
    try {
        const [array, emailOTP] = randomCode.split(":");
        const codeOTP = array.split(",").map(Number);
        const { code, email } = req.body;
        if (emailOTP === email) {
            if (JSON.stringify(code) == JSON.stringify(codeOTP)) {
                return res.status(200).json(true);
            }
            return res.status(200).json(false);
        }
        return res.status(200).json(false);
    } catch (error) {
        return res.status(500).json(false);
    }
})

router.post('/changeinfo', async (req, res, next) => {
    const { id, username } = req.body;
    try {
        const user = await userController.changeinfo(id, username);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})
router.post('/changepassword', async (req, res, next) => {
    try {
        const { id, email, newpassword, oldpassword } = req.body;
        const user = await userController.changepassword(id, email, newpassword, oldpassword);
        res.status(200).json({ "user": user });
    } catch (error) {
        res.status(400).json({ "error": error });
    }
})

module.exports = router;