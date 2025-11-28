const startUrl = 'https://raw.githubusercontent.com/ideagmb/fetcher/master/db.json';
fetch(startUrl)
    .then(async function (res) {
        let data = await res.json();
        console.log(data);
        drawPerson(data);
    });

function drawPerson(person) {
    const container = document.body;
    container.innerHTML = '';

    const items = Array.isArray(person) ? person : (person && person.items ? person.items : [person]);

    items.forEach(item => {
        const personCard = document.createElement('div');
        personCard.classList.add('person-card');
        personCard.innerHTML = `
        <h2>${item.name}</h2>
        <p>Phone: ${item.phone}</p>
        <p>Gender: ${item.gender}</p>
        <p>Address: ${item.address}</p>
        <p>Friends: ${item.friends.map(f => f.name).join(', ')}</p> 
    `;
        container.appendChild(personCard);
    });
}