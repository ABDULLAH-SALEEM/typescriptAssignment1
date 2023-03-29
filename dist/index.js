"use strict";
let apiUrl = "https://rickandmortyapi.com/api/character";
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
const headerData = ['ID', 'NAME', 'STATUS', 'SPECIES', 'TYPE', 'GENDER', 'IMAGE'];
let characterData = [];
function generateTable() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    const header = document.createElement("tr");
    headerData.map((data) => {
        const cell = document.createElement("th");
        const cellText = document.createTextNode(data);
        cell.appendChild(cellText);
        header.appendChild(cell);
    });
    tableBody.appendChild(header);
    characterData.map((data, idx) => {
        const row = document.createElement("tr");
        Object.values(data).map((tableData, idx) => {
            tableData = tableData.toString();
            const cell = document.createElement("td");
            if (!tableData) {
                tableData = 'N/A';
            }
            if (tableData.includes('https')) {
                var img = document.createElement('img');
                img.src = tableData;
                cell.appendChild(img);
            }
            else {
                const cellText = document.createTextNode(tableData);
                cell.appendChild(cellText);
            }
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
fetch(apiUrl).then(function (response) {
    response === null || response === void 0 ? void 0 : response.json().then((data) => {
        data.results.map(({ id, name, status, species, type, gender, image }, idx) => {
            characterData.push({
                id, name, status, species, type, gender, image
            });
        });
        generateTable();
    });
}).catch(function (err) {
    console.log('Something went wrong.', err);
});
//# sourceMappingURL=index.js.map