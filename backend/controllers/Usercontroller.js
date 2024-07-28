const User = require('../models/user.models');
const asyncHandler = require("express-async-handler")
const  bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

//registraion for a new user
// @desc: Register a new user
// @route: POST /api/users/register
// @access: Public


const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new Error(400, "All fields are mandatory");
    }

    const user = await User.create({
        name,
        email,
        password
    })

    res.status(201).json(user)
})


///login
// @desc    Authenticate a user and get a token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Send response
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



module.exports = {
    createUser,loginUser
};

