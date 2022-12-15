let input=document.querySelector('#input');
let button=document.querySelector('#button');
let output=document.querySelector('#output');

function getApi(){    
    
    let firstUri='https://www.swapi.tech/api/people/?name=';
    let fullUri=`${firstUri}${input.value}`;   

    fetch(fullUri)
        .then(res => res.json())
        .then(data =>{
                     
           let properties=data.result[0].properties;          
           let propString=`${properties.name}\n\nHeight: ${properties.height}\nMass: ${properties.mass}\nGender: ${properties.gender}\nHair color: ${properties.hair_color}\nEye color: ${properties.eye_color}`;
                     
           output.innerHTML=propString;            
        })
        .catch(err => console.log(err))
}

button.addEventListener('click', getApi);