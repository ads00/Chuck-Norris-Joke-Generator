const number = document.querySelector('#number'),
    jokeBtn = document.querySelector('.get-jokes');

jokeBtn.addEventListener('click', function(e) {
    document.querySelector('.jokes').innerHTML = '<ul></ul>';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number.value}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = ``;

            if((response.type) === 'success') {
                
                response.value.forEach(function(joke, index) {
                    output += `<li>${joke.joke}</li>`;
                });

            } else {
                output = '<li>Something went wrong</li>';
            }
            
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
});