const userModel = require('./UserModel');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const getAll = async () => {

    return await userModel.find();

}

const login = async (email, password) => {
    const user = await userModel.findOne({ email: email });
    if (user && bcrypt.compareSync(password, user.password)) {
        return user;
    }
    else {
        return null;
    }
}

const findEmail = async (email) => {
    try {
        const userAccount = await userModel.findOne({ email: email });
        if (userAccount) {
            return true;
        }
        return false;
    }
    catch (e) {
        return false;
    }

}

const register = async (email, password, username) => {
    try {
        let hash = bcrypt.hashSync(password, salt);
        const newuser = {
            email: email,
            password: hash,
            username: username
        }
        let user = await userModel.create(newuser);
        return user;
    } catch (error) {
        return false;
    }
}

const changeinfo = async (userId, newUsername) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, { username: newUsername }, { new: true });
        return updatedUser;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// const register = async (email, password, name, age, address, securityquestion, securityanswer, cart) => {
//     try {
//         let hash = bcrypt.hashSync(password, salt);
//         const newuser = {
//             email: email,
//             password: hash,
//             name: name,
//             age: age,
//             address: address,
//             security: {
//                 securityquestion: securityquestion,
//                 securityanswer: securityanswer,
//             },
//             cart: cart
//         }
//         let user = await userModel.create(newuser);
//         return user;
//     } catch (error) {
//         return false;
//     }

// }


const changepassword = async (id, email, newpassword, oldpassword) => {
    try {
        const user = await userModel.findOne({ email: email });
        if (user && bcrypt.compareSync(oldpassword, user.password)) {
            let hast = bcrypt.hashSync(newpassword, salt);
            await userModel.findOneAndUpdate({ email: email }, { password: hast }, { new: true });
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const resetpassword = async (email, securityQuestion, securityAnswer, newpassword) => {
    try {
        const userAccount = await userModel.findOne({ email: email });
        if (userAccount) {
            if (userAccount.security.securityquestion == securityQuestion) {
                if (userAccount.security.securityanswer == securityAnswer) {
                    userAccount.password = newpassword;
                    userAccount.save();
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    login,
    register,
    getAll,
    findEmail,
    changepassword,
    resetpassword,
    changeinfo,
};

var users = [
    {
        "_id": 1,
        "email": 'abc@gmail.com',
        "password": "11111111Aa",
        "name": 'tin',
        "age": 18,
        "address": "govap",
        "security": {
            "securityquestion": "1+1=?",
            "securityanswer": "2"
        }
    },
    {
        "_id": 2,
        "email": 'a',
        "password": "1",
        "name": 'tin',
        "age": 18,
        "address": 'govap',
        "security": {
            "securityquestion": "1+1=?",
            "securityanswer": "2"
        }
    }
]
