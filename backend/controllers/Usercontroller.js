const User = require('../models/user.models');
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

//registraion for a new user
// @desc: Register a new user
// @route: POST /api/users/register
// @access: Public


const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    // Generate token
    const payload = {
        user: {
            id: user.id,
        },
    };

    jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: '4d' },
        (err, token) => {
            if (err) {
                return res.status(500).json({ message: "Error generating token" });
            }
            res.status(201).json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
                token,
            });
        }
    );
});


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
    createUser, loginUser
};

