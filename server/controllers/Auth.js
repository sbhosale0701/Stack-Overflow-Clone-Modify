// import Dependencies
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Import Module
import users from "../models/auth.js";

//@ Sign Up Mechanism ---------------------

export const signup = async (req, res) => {
  // Collect data from request-body
  const { name, email, password } = req.body;

  try {
    // Check Is User Already exist or not
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already Exist." });
    }
    // If Not then hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Now Create User
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create the Token which is expire after 1 hrs of logIn
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Send Response
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went Wrong!! ... Internal Server Error");
  }
};

// @ Log in Mechanism -----------

export const login = async (req, res) => {
  // Get Details from req-body
  const { email, password } = req.body;
  try {
    // Check Is User Already exist or not
    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User don't Exist." });
    }

    // Check PassWord/ User Correct or not
    const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCrt) {
      // If user is not Correct
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // process.env.JWT_SECRET;
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong... Internal Server Error");
  }
};
