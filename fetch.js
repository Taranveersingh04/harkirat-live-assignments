

const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#facts");
const btn=document.querySelector("#click");

// const getFacts= async ()=>{
//     console.log("Fetching data ...");
//     let  response= await fetch(url);
//     let data= await response.json();
//     console.log(data[1].text);
//     factPara.innerText=data[1].text;
// }

function getFacts(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        factPara.innerText = data[1].text;
    })
}
btn.addEventListener('click',getFacts)