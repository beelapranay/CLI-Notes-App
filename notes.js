const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("Note added!");
    } else {
        console.log("Note title taken!");
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen.black("Note Removed!"));
        saveNotes(notesToKeep);
    }
    else {
        console.log(chalk.bgRed.black("Note not Found!"));
    }
}

const displayNote = (title) => {
    const notes = loadNotes();
    if(typeof(title) === "undefined") {
        notes.forEach((note) => console.log(note))
    }
    else {
        const noteToDisplay = notes.find((note) => note.title === title);
        if(!noteToDisplay) {
            console.log(chalk.bgRed.black("Note not Found! :("))
        } else {
            console.log(noteToDisplay)
        }
    }
}

module.exports = { 
    addNote: addNote,
    removeNote: removeNote,
    displayNote: displayNote
};