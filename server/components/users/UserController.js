const mailer = require('nodemailer');
const userService = require('./UserService');

const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'vulqps24441@fpt.edu.vn',
        pass: 'aaickiiifgadwuzp'
    },
});

const sendEmail = async (email, subject, content) =>{
    try {
        const mailOptions = {
            from:'Erabook <vulqps24441@fpt.edu.vn>',
            to: email,
            subject: subject,
            html: content
        };
    
        return await transporter.sendMail(mailOptions);
        
    } catch (error) {
        console.log('Send email error: ', error);
    }
    return false;
}

const getAll = async () => {
    return await userService.getAll();
}
const login = async (email, password) => {
    return await userService.login(email, password);
}
const findEmail = async (email) => {
    return await userService.findEmail(email);
}
// const register = async (email, password, name, age, address, securityquestion, securityanswer, cart) => {
//     return await userService.register(email, password, name, age, address, securityquestion, securityanswer, cart);
// }

const register = async (email, password, username) => {
    return await userService.register(email, password, username);
}

const changepassword = async (email, newpassword, changepassword) => {
    return await userService.changepassword(email, newpassword, changepassword);
}
const resetpassword = async (email, securityQuestion, securityAnswer, newpassword) => {
    return await userService.resetpassword(email, securityQuestion, securityAnswer, newpassword);
}
module.exports = { login, register, getAll, findEmail, changepassword, resetpassword, sendEmail }

