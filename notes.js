const chalk = require('chalk');
const fs = require('fs');
const { title } = require('process');

const addNote = (title,body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
        
    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse("Added a new Node"));
    } else{
        console.log(chalk.inverse.red("There exixts a Note with same title!"));
    }   
}

const removeNote = (title) =>{
    const notes = loadNotes();

    const filteredNotes = notes.filter((note) => note.title !== title);

    if(filteredNotes.length === notes.length){
        console.log(chalk.bgRed("Note not found!"));       
    }
    else{
        console.log(chalk.bgGreen("Note removed!"));
        saveNotes(filteredNotes);
    }  
}

const listNotes = () =>{
    console.log(chalk.cyanBright.inverse("Your notes->"));

    const notes = loadNotes();
    const printTitle = notes.forEach((note) =>{
        console.log(note.title);
    })
}

const readNote = (title) =>{
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);

    if(noteFound){
        console.log(chalk.bold.bgBlackBright(noteFound.title));
        console.log(noteFound.body);
    }
    else{
        console.log(chalk.bold.red("No note found!"));
    }
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};