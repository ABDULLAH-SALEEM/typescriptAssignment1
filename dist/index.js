"use strict";
const getUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
};
const createTable = (data) => {
    const table = document.createElement('table');
    const header = table.createTHead();
    const row = header.insertRow();
    row.insertCell().innerText = 'ID';
    row.insertCell().innerText = 'Name';
    row.insertCell().innerText = 'Username';
    row.insertCell().innerText = 'Email';
    const body = table.createTBody();
    data === null || data === void 0 ? void 0 : data.forEach(user => {
        const row = body.insertRow();
        row.insertCell().innerText = user.id.toString();
        row.insertCell().innerText = user.name;
        row.insertCell().innerText = user.username;
        row.insertCell().innerText = user.email;
    });
    return table;
};
const main = async () => {
    const users = await getUsers();
    const table = createTable(users);
    document.body.appendChild(table);
};
main();
//# sourceMappingURL=index.js.map
