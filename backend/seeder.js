import connectDB from "./config/db.js";
import Order from "./models/Order.model.js";
import Product from "./models/Product.model.js";
import User from "./models/User.model.js";
import { users } from "./data/users.js";
import { products } from "./data/products.js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const seedData = async () => {
  try {
    console.log("TRY>>>");
    await connectDB();
    console.log("AFTER>>>");

    // Clear old data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    // @CREATE USERS
    const createdUser = await User.insertMany(users);
    const adminUser = await User.findOne({ isAdmin: true });
    // @CREATE PRODUCTS
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser._id.toString() };
    });
    console.log(sampleProducts);
    const createdProducts = await Product.insertMany(sampleProducts);

    // @CREATE ORDERS
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
