// controllers/kanjiController.js

import axios from 'axios';

export const getGrade1Kanji = async (req, res) => {
    const url = `https://kanjiapi.dev/v1/kanji/grade-1`;

    try {
        const response = await axios.get(url);
        // const kanjiArray = response.data;

        res.status(200).json(response.data);
    } catch (error) {
        handleError(error, res);
    }
};

export const getGrade2Kanji = async (req, res) => {
    const url = `https://kanjiapi.dev/v1/kanji/grade-2`;

    try {
        const response = await axios.get(url);
        const kanjiArray = response.data;

        kanjiArray.forEach((character, index) => {
            console.log(`Index: ${index}, Character: ${character}`)});
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
