const checkRegister = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ result: false, message: "Input ERROR!" });
        }


    } catch (error) {

        console.log("form input error: " + error);
        return res.status(400).json({ result: false });
    }
}

module.exports = {
    checkRegister: checkRegister,
}