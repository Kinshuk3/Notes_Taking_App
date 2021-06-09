
# Notes App
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
</br>
A simple app built on NodeJs runtime which runs entirely on command line args and performs basic notes related function.


## Features

- Add a Note
- Remove a Note
- List all of the notes
- Read the body of a spcefic note

  
## Deployment

To deploy this project, change directory to the folders directory and open terminal and run:

```bash
  npm install
```

1) To add a note:

```bash
  node .\app.js add --title="Lorem Ipsum" --body="Lorem itsu pitsu"
```
2) To remove a note:

```bash
  node .\app.js remove --title="Lorem Ipsum"
```
3) To list all the notes:

```bash
  node .\app.js list
```
4) To read a specific note:

```bash
  node .\app.js read --title="Lorem Ipsum"
```
## FAQ

#### Question 1 Why can't i add a new note?

- Make sure the note your are adding has a unique title.
- Make sure u pass both args in command line for title and body as both are required.

#### Question 2 Why cant i remove a note?

- The note needs to exists before it can be deleted.
- You are not passing the correct title name of the note.
- If you already deleted the note, you cant delete it again.

#### Question 3 Why cant i read a specific note?
  
- You are not passing the correct title name of the note.
- The note does not exists.
  
