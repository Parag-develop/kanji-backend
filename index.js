import express, { json } from 'express';
const app = express();
import cors from 'cors';
import { config } from 'dotenv';
import kanjiRoutes from './Routes/kanjiRoutes.js';
import kanjiDetailRoutes from './Routes/kanjiDetailRoutes.js';
import exampleDetail from './Routes/exampleDetail.js'
const path = require('path');

config();

const PORT = process.env.PORT || 3000;

app.use(cors());    
app.use(json());

app.use(express.static(path.join(__dirname, '../frontend/kanjifrontend/dist'))); // Adjust 'dist' to your build directory

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/kanjifrontend/dist', 'index.html')); // Serve index.html for all other routes
});

app.get('/', (req,res)=>{
    res.send({"message" : "hello"});
})

// Use kanji routes
app.use('/', kanjiRoutes);

// Use kanji detail routes
app.use('/', kanjiDetailRoutes);

// Use kanji detail routes
app.use('/example', exampleDetail);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})

export default app;
// module.exports = app;