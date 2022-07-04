const dogDiv = document.querySelector(".doggos");

function addNewDog(breed){
    let DOG_URL = `https://dog.ceo/api/breed/${breed}/images/random`;
    const promise = fetch(DOG_URL);
    const img = document.createElement('img');

    promise.then(function(response){
        const processingResponse = response.json();
        return processingResponse;
    }).then(function (jsonResponse){
        img.src = jsonResponse.message;
        img.alt = 'Doggo';
        dogDiv.appendChild(img);
    });
}

document.querySelector(".dog-adder").addEventListener('click', function(){
    const breed = document.querySelector('.breed-selector').value;
    addNewDog(breed);
});


