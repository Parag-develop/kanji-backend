
import axios from 'axios';

export const getKanjiDetail = async (req, res) => {
    const character = req.params.character;
    console.log("backend", character);
    
    const url = `https://kanjiapi.dev/v1/kanji/${character}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        handleError(error, res);
    }
};

// Error handling function
const handleError = (error, res) => {
    if (error.response) {
        res.status(error.response.status).send(error.response.data.message);
    } else if (error.request) {
        res.status(500).send('No response received');
    } else {
        res.status(400).send(error.message);
    }
};
