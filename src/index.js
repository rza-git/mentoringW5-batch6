class Game {

    constructor(title, platform, developer) {
        this.title = title;
        this.platform = platform;
        this.developer = developer;
    }
}

const gameList = [
    new Game("Assasins Creed Mirage", "PC, PS4, PS5", "Ubisoft"),
    new Game("Pathfinder Wrath of Righteous", "PC, PS4", "Owlcat Game"),
    new Game("Shadow of the Tomb Raider", "PC, PS4", "Eidos Montreal")
]



window.onload = (event) => {
    console.log("page is fully loaded");

    // Populate Table
    populateData();

    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", (e) => {

        const titleData = document.getElementById("game-title");
        const platformData = document.getElementById("game-platform");
        const developerData = document.getElementById("game-developer");

        const newGame = new Game(titleData.value, platformData.value, developerData.value);

        gameList.push(newGame)

        populateData();

        
        // RESET FORM INPUT
        titleData.value = ""
        platformData.value = ""
        developerData.value = ""
    })
};

const populateData = () => {

    const tableBody = document.getElementById("table-body");
    
    // Reset Table Body menjadi kosong
    tableBody.innerHTML = ""

    for(let i = 0; i < gameList.length; i++) {

        const currentRow = tableBody.insertRow(i);

        const cell1 = currentRow.insertCell(0);
        const cell2 = currentRow.insertCell(1);
        const cell3 = currentRow.insertCell(2);
        const cell4 = currentRow.insertCell(3);

        cell1.innerHTML = gameList[i].title;
        cell2.innerHTML = gameList[i].platform;
        cell3.innerHTML = gameList[i].developer;

        // cell 4 delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-error");
        deleteButton.textContent = "DELETE"

        deleteButton.addEventListener("click", (e) => {
            const deletedRow = e.target.parentElement.parentElement
            
            deletedRow.innerHTML = ""
            // splice(start, deleteCount)
            gameList.splice(i, 1);
        })

        cell4.append(deleteButton);
    }
}