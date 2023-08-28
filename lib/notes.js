const fs = require('fs');
const path = require('path');

//this handles the interactions with the notes, it uses the fs module to write into the db.json file

const createNewNote = (note, notesArray) => {
    // adds new note to notes array
    notesArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

// finds specific note by ID from notes array
const findById = (id, notesArray) => {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};


const removeNote = (note, notesArray) => {
    // removes specific note from notes array
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    // rewrites db.json with new array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};

module.exports = { createNewNote, findById, removeNote };