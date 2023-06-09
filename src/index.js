import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import './config.js';
import Auth from "./routes/auth_routes.js";
import Fund from "./routes/fund_routes.js";

const app = express();
dotenv.config();

//middelwares
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
    defaultErrorHandler: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


//All APi's Endponits
app.use('/api/v1', Auth,Fund)

app.use('*', (req, res) => {
    return res.status(404).json({
        message: 'Backend is runing..'
    })
});

//Port
const port = process.env.PORT || 3333;
const nodeServer = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
