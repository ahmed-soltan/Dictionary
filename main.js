let result=document.querySelector(".meaning")
let btn=document.querySelector("button")
let url="https://api.dictionaryapi.dev/api/v2/entries/en/"

const translate=()=>{
    let text=document.querySelector("input").value;
    console.log(text);
    fetch(`${url}${text}`)
   .then((response)=>response.json())
   .then(data=>{
    console.log(data)
    result.innerHTML=`
        <div class="definition">
            <h2>${text}</h2>
            <span>${data[0].meanings[0].partOfSpeech}/${data[0].phonetics[1].text}/</span>
            <p><h3>Definition: </h3> ${data[0].meanings[0].definitions[0].definition}</p>
        </div>
        <div class="example">
            <p>${ data[0].meanings[0].definitions[0].example|| data[0].meanings[0].synonyms[0]}</p>
        </div>
    `
    text.innerHTML=""
   })
   .catch(()=>{
    result.innerHTML=`<h1>Not Found</h1>`
   })
}


btn.addEventListener("click",translate)