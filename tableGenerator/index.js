const tableContainer = document.getElementById('table-container');
const btn = document.getElementById('table-btn');

btn.addEventListener('click', ()=>{
    // console.log("button has clicked")
    const rows = prompt("Enter number of rows");
    const cols = prompt("Enter number of columns");
    const table = document.createElement('table');
    table.className='table';
    for(let i = 0; i<rows; i++){
        const tr = document.createElement('tr');
        tr.className = 'tr';
        for(let j = 0; j<cols; j++){
            const td = document.createElement('td');
            td.className='td';
            td.textContent = "Explorin";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
});