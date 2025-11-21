let url = 'https://raw.githubusercontent.com/ideagmb/fetcher/main/files/Max_Fri18_Robo.json';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        person(data, document.getElementById('person'));
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

function person(jsOBJ, element){
    element.innerHTML = '';
    const per = Array.isArray(jsOBJ) ? jsOBJ : [jsOBJ];
    per.forEach((pokemon) => {
        let art = ``;
        element.innerHTML += art;
    });
}