const requestUrl="https://api.github.com/users/Taranveersingh04";
const xhr=new XMLHttpRequest();
const button=document.querySelector(".btn");
const card=document.querySelector(".card");
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
       const data=JSON.parse(this.responseText);
       console.log(data);
       console.log(data.followers);
       const followers=data.followers;
       const url=data.avatar_url;
       console.log(url);
       button.addEventListener("click",()=>{
        card.innerHTML=`<img src="${url} "<br><p>followers</p>`;
        button.style.display = "none"; 
       })
       

    }
}
xhr.send();