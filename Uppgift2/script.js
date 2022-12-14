let button=document.querySelector('#button');
let divOutput=document.querySelector('#output');

function getApi(){    
    
    let fullUri='https://deckofcardsapi.com/api/deck/new/draw/?count=1';
    
   
    fetch(fullUri)
        .then(res => res.json())
        .then(data =>{
           
            let imageUrl=data.cards[0].image;     // Get the image url       
            let imageElement=document.createElement("img"); // Create image element
            divOutput.innerHTML='';  // Reset the div
            imageElement.setAttribute("src", imageUrl); // Set crs attribute
            divOutput.appendChild(imageElement); // Add the image element to div                 
        })
        .catch(err => console.log(err))
}


button.addEventListener('click', getApi);