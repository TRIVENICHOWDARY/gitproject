function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    display(data.cards)
})


function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
    console.log(deck)  

for(var i in mb){
//    console.log(mb[i].name)
   var caddiv=document.createElement("div")
   caddiv.classList.add("card")
   var cadimg=document.createElement("img")
   cadimg.src=mb[i].img
   caddiv.appendChild(cadimg)
   deck.appendChild(caddiv)
// name area
   var cname=document.createElement("h2")
   cname.textContent=mb[i].name;
   caddiv.appendChild(cname)
//    price area
var price=document.createElement("h2")
price.textContent=mb[i].price;
caddiv.appendChild(price)
// offer price
var offer=document.createElement("h2")
offer.textContent= "off/-"+mb[i].offer;
caddiv.appendChild(offer)
// button area
var btn=document.createElement("button")
    btn.classList.add("btn-info")
    btn.textContent=mb[i].button;
caddiv.appendChild(btn)

} 

}