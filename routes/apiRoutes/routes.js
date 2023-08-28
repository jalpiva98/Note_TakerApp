const express = require('express');
const router = express.Router();
const { notes } = require('../../db/db.json');
const { createNewNote, findById, removeNote } = require('../../lib/notes');

// Function to generate a timestamp-based ID
function generateId() {
    return Date.now().toString();
}

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // creates new note
    if (!req.body.id) {
        req.body.id = generateId();
        createNewNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});

module.exports = router;