let apiUrl: string = "https://rickandmortyapi.com/api/character"
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string
}

const headerData: string[] = ['ID', 'NAME', 'STATUS', 'SPECIES', 'TYPE', 'GENDER', 'IMAGE']
let characterData: CharacterType[] = []

function generateTable(): void {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const header = document.createElement("tr");
    headerData.map((data) => {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        header.appendChild(cell);
    })
    tableBody.appendChild(header);
    characterData.map((data: CharacterType, idx: number) => {
        const row = document.createElement("tr");
        Object.values(data).map((tableData: number | string, idx: number) => {
            tableData = tableData.toString()
            const cell = document.createElement("td");
            if (!tableData) {
                tableData = 'N/A'
            }
            if (tableData.includes('https')) {
                var img = document.createElement('img');
                img.src = tableData
                cell.appendChild(img);
            } else {
                const cellText = document.createTextNode(tableData);
                cell.appendChild(cellText);
            }
            row.appendChild(cell);
        })
        tableBody.appendChild(row);
    })
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

fetch(apiUrl).then(function (response) {
    response?.json().then((data) => {
        data.results.map(({ id, name, status, species, type, gender, image }: CharacterType, idx: number) => {
            characterData.push({
                id, name, status, species, type, gender, image
            })
        })
        generateTable()
    });

}).catch(function (err) {
    console.log('Something went wrong.', err);
});



