import jwt from "jsonwebtoken"
import { UserModel } from "../models/User.js"
import bcrypt from 'bcryptjs'

export const signupController = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({
                msg: "name, email and password are required"
            })
        }

        const existingUser = await UserModel.findOne({
            email
        })

        if(existingUser){
            return res.status(400).json({
                msg: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await UserModel.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            msg: "User created successfully"
        })
    } catch (error) {
        console.error(error)
        return res.tatus(500).json({
            msg: "Intrenal Server Error"
        })
    }
}


export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                msg: "email and passwords are required"
            })
        }

        const findUser = await UserModel.findOne({
            email
        })

        if(!findUser){
            return res.status(404).json({
                msg: "user not found"
            })
        }

        const matched = await bcrypt.compare(password, findUser.password)
        if(!matched){
            return res.status(400).json({
                msg: "Incorrect Password"
            })
        }

        const token = jwt.sign({
            id: findUser._id
        }, process.env.JWT_SECRET)

        return res.status(200).json({
            msg: "User logged in successfully",
            token
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
}