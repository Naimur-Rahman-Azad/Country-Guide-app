var input=document.getElementById("input");
var btn=document.getElementById("btn");
var info=document.getElementById("info");
btn.addEventListener("click",()=>{
    var countryName=input.value;
    var url=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log( Object.values(data[0].languages).toString().split(",").join(", "));

        info.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag">
        <h2>${data[0].name.common}</h2>
        <div class="section">
            <h4><span>Capital :</span> ${data[0].capital[0]} </h4>
            <h4><span>Continent : </span> ${data[0].continents[0]} </h4>
            <h4><span>Population : </span> ${data[0].population} </h4>
            <h4><span>Currency : </span> ${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]} </h4>
            <h4><span>Common Language : </span> ${Object.values(data[0].languages).toString().split(",").join(", ")} </h4>

        </div>

        `;

    }).catch(function(){
        if(countryName.length==0){
            info.innerHTML=`<h3>The input field cannot be empty</h3>`;

        }else{
            info.innerHTML=`<h3>Please enter a valid country name</h3>`;
            
        }
    })

});