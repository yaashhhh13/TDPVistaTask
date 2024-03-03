const userModel = require("../model/user.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegisterController = async (req, res) => {
    console.log("starting backend user registration process");

    try {
        console.log(req.body)
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({
                message: "User already exists",
                success: false
            });
        }

        console.log("mixing pass")

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        req.body.password = hashPassword;

        console.log("password mixed")

        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        await newUser.save();
        console.log("done backend part")
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        console.log(token)

        return res.status(201).send({
            message: "user registered successfully",
            data: {
                user: newUser,
                token: token,
            },
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error registering user",
            success: false
        });
    }
};


const loginController = async (req, res) => {
    try {
        console.log(req.body)
        const user = await userModel.findOne({
            email: req.body.email
        }).select("+password")
        console.log(user)
        if (!user) {
            return res.status(200).send({
                message: "user not found",
                success: false
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        const signInUser = await userModel.findOne({
            email: req.body.email
        })

        if (!isMatch) {
            return res.status(200).send({
                message: "invalid email or password",
                success: false
            })
        }

        const token = jwt.sign({ id: signInUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        // console.log(user)
        return res.status(201).send({
            message: "user logged in successfully",
            data: {
                user: signInUser,
                token: token
            },
            success: true
        })

    } catch (error) {
        console.log(error)

        return res.status(500).send({
            success: false,
            message: `Auth error`,
        })
    }
}

module.exports = { userRegisterController, loginController }