import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const auth = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    
        } catch (error) {
           next(error);
        }
};
