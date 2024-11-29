import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import kanjiRoutes from './Routes/kanjiRoutes.js';
import kanjiDetailRoutes from './Routes/kanjiDetailRoutes.js';
import exampleDetail from './Routes/exampleDetail.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());    
app.use(json());

app.use(express.static(path.join(__dirname, '/dist'))); // Adjust 'dist' to your build directory

console.log("Serving files from:", path.join(__dirname, '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html')); // Serve index.html for all other routes
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