import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public"));
app.use(cookieParser());

//for middleware we have (err,req,res,next) => {} 4 parameters
/*app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});*/




export default app;