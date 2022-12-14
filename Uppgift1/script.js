let input=document.querySelector('#input');
let button=document.querySelector('#button');
let output=document.querySelector('#output');
let outputName=document.querySelector('#outputName');



function getApi(){    
    
    let firstUri='https://www.swapi.tech/api/people/?name=';
    let fullUri=`${firstUri}${input.value}`;
    //console.log(input.value);
    //console.log(fullUri);

    fetch(fullUri)
        .then(res => res.json())
        .then(data =>{
                     
           let properties=data.result[0].properties;
           console.log(data);
           console.log(properties);
           let s=`Height: ${properties.height}\nMass: ${properties.mass}\nGender: ${properties.gender}\nHair color: ${properties.hair_color}`;
           console.log(s);
           outputName.innerHTML=`Info about ${properties.name}:`;
           output.innerHTML=s;            
        })
        .catch(err => console.log(err))
}


button.addEventListener('click', getApi);