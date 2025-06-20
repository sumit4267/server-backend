import express from "express"
import "dotenv/config";
import cors from "cors" ;
import connectDB from "./configs/db.js";
import { clerkMiddleware} from '@clerk/express';
import clerkwebhooks from "./controllers/clerkwebhooks.js";





connectDB()
const app = express()
app.use(cors()) // Enable Cross-Origin Resource Sharing
 
// middleware
app.use(express.json())
app.use(clerkMiddleware())


// API to listen to Clerk Webhooks
app.use("/api/clerk",clerkwebhooks)



app.get('/',(req, res) => res.send("API is working fine sumit"))
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));


