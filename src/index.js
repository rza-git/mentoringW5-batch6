// DOM = Document Object Model
// HTML tag pake syntax OOP

class Game {

    constructor(title, platforms, developer) {
        this.title = title;
        this.platforms = platforms;
        this.developer = developer;
    }
}

const gameList = [
    new Game("Assasins Creed Mirage", "PC, PS4, PS5", "Ubisoft"),
    new Game("Pathfinder Wrath of Righteous", "PC, PS4", "Owlcat Game"),
    new Game("Shadow of the Tomb Raider", "PC, PS4", "Eidos Montreal")
]

addEventListener("load", (e) => {

    populateGames();

    // FORMS
    const titleForm = document.getElementById("game-title");
    const platformsForm = document.getElementById("game-platform");
    const developerForm = document.getElementById("game-developer");

    // BUTTON
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", (e) => {

        const addGame = new Game(titleForm.value, platformsForm.value, developerForm.value);

        gameList.push(addGame);

        // Render ulang array
        populateGames();
    })

})

const populateGames = () => {

    const tableBody = document.getElementById("table-body");

    // reset ulang table
    tableBody.innerHTML = ""

    for(let i = 0; i < gameList.length; i++) {

        const gameRow = tableBody.insertRow(i);

        const titleCell = gameRow.insertCell(0);
        const platformsCell = gameRow.insertCell(1);
        const developerCell = gameRow.insertCell(2);
        const deleteButtonCell = gameRow.insertCell(3);

        titleCell.innerHTML = gameList[i].title;
        platformsCell.innerHTML = gameList[i].platforms;
        developerCell.innerHTML = gameList[i].developer;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE"
        deleteButton.classList.add("btn", "btn-error")
        deleteButtonCell.append(deleteButton)

        deleteButton.addEventListener("click", (e) => {

            // Hapus object yang diselect dari gameList Array
            gameList.splice(i, 1);
            
            // Render ulang
            populateGames();
        })
    }
}

