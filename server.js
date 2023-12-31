import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import morgan from "morgan"
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tour.js"
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/bookings.js"
import homeRoute from "./routes/home.js"

 
dotenv.config()
// database config
connectDB()
const app = express()
const PORT = process.env.PORT || 8000

const corsOptions ={
    origin:true,
    credentials:true
}

// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(morgan('dev'))

// api routes
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking", bookingRoute)

app.use('/home', homeRoute)
    

app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
});
