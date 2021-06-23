const number = document.querySelector('#number'),
    jokeBtn = document.querySelector('.get-jokes');

jokeBtn.addEventListener('click', function(e) {
    document.querySelector('.jokes').innerHTML = '<ul></ul>';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number.value}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            if((response.type) === 'success') {
                response.value.forEach(function(joke, index) {
                    displayJoke(joke.joke);
                });
                
            } else {
                displayJokes('Something went wrong')
            }
            
        }
    }

    xhr.send();
    e.preventDefault();
});

function displayJoke(joke) {
    const jokeLi = document.createElement('li');
    jokeLi.appendChild(document.createTextNode(joke));
    document.querySelector('.jokes').appendChild(jokeLi);   
}