const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel');

// POST REQ, FOR REGISTER A USER
const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    //Checking if creds are provided or not
    if (!name, !email, !password) {
        return res.json({ msg: "Please Provide all the values" })
    }

    // Checking if user exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ msg: "Email already registered" });
    }

    // Creating User
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({ name, email, password: hashedPass })

    if (newUser) {
        res.json({ newUser, jwtToken: genToken(newUser._id) })
    } else {
        res.json({ msg: "Internal Error" }).status(500)
    }
}

// POST REQ, FOR LOGIN A USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Checking if creds are provided or not
    if (!email || !password) {
        return res.json({ err: "Provide all the Creds" });
    }

    // Checking if user is registered or not
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ user, jwtToken: genToken(user._id) })
    } else {
        return res.json({ msg: "Wrong Email or password" })
    }


}


const getMe = (req, res) => {
    res.json({ msg: "Hello from getMe" })

}

// GENERATE JSON WEB TOKEN
const genToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "10d"
    })
}

module.exports = {
    registerUser, loginUser, getMe
}